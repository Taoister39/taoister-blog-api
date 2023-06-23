import { Injectable } from '@nestjs/common';
import { FindPostDto } from 'apps/taoister-blog-api/src/v1/posts/dto/find-post.dto';
import { DbService } from '@libs/db';
import {
  DEFAULT_LIMIT,
  DEFAULT_OFFSET,
} from '@libs/common/constants/pagination';
import { POST_SORT_BY_ENUM } from '@libs/common/dto/sort.dto';
import { Prisma } from '@prisma/client';
import {
  IS_DELETED_ENUM,
  IS_PUBLISHED_ENUM,
} from '@libs/common/constants/enum';

@Injectable()
export class PostsService {
  constructor(private readonly dbService: DbService) {}
  // 查詢一羣文章
  async findMany(findPostDto: FindPostDto) {
    const {
      title,
      id,
      offset = DEFAULT_OFFSET,
      limit = DEFAULT_LIMIT,
      sortBy = POST_SORT_BY_ENUM.CREATED_TIME,
      order = Prisma.SortOrder.desc,
    } = findPostDto;

    let publishedAt: Prisma.SortOrder,
      createdAt: Prisma.SortOrder,
      updatedAt: Prisma.SortOrder;

    switch (sortBy) {
      case POST_SORT_BY_ENUM.CREATED_TIME:
        createdAt = order;
        break;
      case POST_SORT_BY_ENUM.PUBLISHED_TIME:
        publishedAt = order;
        break;
      case POST_SORT_BY_ENUM.UPDATED_TIME:
        updatedAt = order;
        break;
    }

    const req: Pick<Prisma.PostFindManyArgs, 'where' | 'orderBy'> = {
      where: {
        isPublished: IS_PUBLISHED_ENUM.YES,
        isDeleted: IS_DELETED_ENUM.NO,
      },
      orderBy: {
        publishedAt,
        createdAt,
        updatedAt,
      },
    };

    const total = await this.dbService.post.count(req);
    const lists = await this.dbService.post.findMany({
      ...req,
      skip: offset, // 偏移
      take: limit, // 數量
      // 篩選字段
      // content是內容，返回作爲列表
      select: {
        id: true,
        title: true,
        categories: true,
        tags: true,
        type: true,
        createdAt: true,
        description: true,
        view: true,
      },
    });

    return { total: total ?? 0, lists };
  }
  // 查詢單個文章
  findOne(id: string) {
    return this.dbService.post.findUnique({
      where: { id },
      include: {
        categories: true,
        tags: true,
      },
    });
  }
  // 瀏覽度 + 1
  async viewIncrement(id: string) {
    const post = await this.dbService.post.findFirst({ where: { id } });

    return this.dbService.post.update({
      where: { id },
      data: { view: post.view + 1 },
    });
  }
}

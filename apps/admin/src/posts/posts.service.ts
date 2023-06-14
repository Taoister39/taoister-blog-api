import { IS_DELETED_ENUM } from '@libs/common/constants/enum';
import {
  DEFAULT_LIMIT,
  DEFAULT_OFFSET,
} from '@libs/common/constants/pagination';
import { POST_SORT_BY_ENUM } from '@libs/common/dto/sort.dto';
import { DbService } from '@libs/db';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreatePostDto } from 'apps/admin/src/posts/dto/create-post.dto';
import { FindPostDto } from 'apps/admin/src/posts/dto/find-post.dto';
import { UpdatePostDto } from 'apps/admin/src/posts/dto/update-post.dto';

@Injectable()
export class PostsService {
  delete(id: string) {
    return this.dbService.post.delete({ where: { id } });
  }
  update(id: string, updatePostDto: UpdatePostDto) {
    return this.dbService.post.update({
      where: { id },
      data: {
        ...updatePostDto,
        categories: {
          connect: updatePostDto.categories?.map((item) => ({ id: item })),
        },
        tags: {
          connect: updatePostDto.tags?.map((item) => ({ id: item })),
        },
      },
    });
  }
  findOne(id: string) {
    return this.dbService.post.findFirst({ where: { id } });
  }
  async findMany(findPostDto: FindPostDto) {
    const {
      id,
      sortBy = POST_SORT_BY_ENUM.CREATED_TIME,
      order = Prisma.SortOrder.desc,
      title,
      isPublished,
      isDeleted,
      type,
      offset = DEFAULT_OFFSET,
      limit = DEFAULT_LIMIT,
    } = findPostDto;

    let publishedAt: Prisma.SortOrder,
      createdAt: Prisma.SortOrder,
      updatedAt: Prisma.SortOrder;

    switch (sortBy) {
      case POST_SORT_BY_ENUM.CREATED_TIME:
        createdAt = order;
        break;
      case POST_SORT_BY_ENUM.UPDATED_TIME:
        updatedAt = order;
      case POST_SORT_BY_ENUM.PUBLISHED_TIME:
        publishedAt = order;
    }

    const condition: Pick<Prisma.PostFindManyArgs, 'where' | 'orderBy'> = {
      where: {
        title: {
          contains: title,
        },
        id,
        isPublished,
        isDeleted,
        type,
      },
      orderBy: {
        publishedAt,
        createdAt,
        updatedAt,
      },
    };

    const total = (await this.dbService.post.count(condition)) || 0;
    const lists = await this.dbService.post.findMany({
      ...condition,
      skip: offset,
      take: limit,
      include: {
        categories: true,
        tags: true,
      },
    });

    return { lists, total };
  }
  create(createPostDto: CreatePostDto) {
    return this.dbService.post.create({
      data: {
        ...createPostDto,
        /**
         * 跟分類和標籤表產生關聯
         */
        categories: {
          connect: createPostDto.categories?.map((item) => ({ id: item })),
        },
        tags: {
          connect: createPostDto.tags?.map((item) => ({ id: item })),
        },
      },
    });
  }
  constructor(private dbService: DbService) {}
}

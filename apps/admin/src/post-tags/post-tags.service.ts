import { SORT_BY_ENUM } from '@libs/common/dto/sort.dto';
import {
  DEFAULT_LIMIT,
  DEFAULT_OFFSET,
} from '@libs/common/constants/pagination';
import { DbService } from '@libs/db';
import { Injectable } from '@nestjs/common';
import { CreatePostTagDto } from 'apps/admin/src/post-tags/dto/create-post-tag.dto';
import { FindPostTagDto } from 'apps/admin/src/post-tags/dto/find-post-tag.dto';
import { Prisma } from '@prisma/client';
import { UpdatePostTagDto } from 'apps/admin/src/post-tags/dto/update-post-tag.dto';

@Injectable()
export class PostTagsService {
  delete(id: string) {
    return this.dbService.postTag.delete({ where: { id } });
  }
  findOne(id: string) {
    return this.dbService.postTag.findUnique({ where: { id } });
  }
  update(id: string, updatePostTagDto: UpdatePostTagDto) {
    return this.dbService.postTag.update({
      where: { id },
      data: updatePostTagDto,
    });
  }
  async findMany(findPostTagDto: FindPostTagDto) {
    const {
      id,
      name,
      isDeleted,
      limit = DEFAULT_LIMIT,
      offset = DEFAULT_OFFSET,
      sortBy = SORT_BY_ENUM.CREATED_TIME,
      order = Prisma.SortOrder.desc,
    } = findPostTagDto;

    // const id = paramId?.trim();

    let createdAt: Prisma.SortOrder, updatedAt: Prisma.SortOrder;

    if (sortBy === SORT_BY_ENUM.CREATED_TIME) {
      createdAt = order;
    }
    if (sortBy === SORT_BY_ENUM.UPDATED_TIME) {
      updatedAt = order;
    }

    const condition: Pick<Prisma.PostTagFindManyArgs, 'where' | 'orderBy'> = {
      where: {
        id,
        name: {
          contains: name,
        },
        isDeleted,
      },
      orderBy: {
        updatedAt,
        createdAt,
      },
    };

    const count = await this.dbService.postTag.count(condition);
    const lists = await this.dbService.postTag.findMany({
      ...condition,
      take: limit,
      skip: offset,
    });

    return { total: count ?? 0, lists };
  }
  create(createPostTagDto: CreatePostTagDto) {
    return this.dbService.postTag.create({ data: { ...createPostTagDto } });
  }

  constructor(private dbService: DbService) {}
}

import {
  DEFAULT_LIMIT,
  DEFAULT_OFFSET,
} from '@libs/common/constants/pagination';
import { SORT_BY_ENUM } from '@libs/common/dto/sort.dto';
import { DbService } from '@libs/db';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreatePostCategoryDto } from 'apps/admin/src/post-categories/dto/create-post-category.dto';
import { FindPostCategoryDto } from 'apps/admin/src/post-categories/dto/find-post-category.dto';

@Injectable()
export class PostCategoriesService {
  async findMany(findPostCategoryDto: FindPostCategoryDto) {
    const {
      name,
      id,
      isDeleted,
      offset = DEFAULT_OFFSET,
      limit = DEFAULT_LIMIT,
      sortBy = SORT_BY_ENUM.CREATED_TIME,
      order = Prisma.SortOrder.desc,
    } = findPostCategoryDto;

    // const id = paramId.trim();

    let createdAt: Prisma.SortOrder, updatedAt: Prisma.SortOrder;

    if (sortBy === SORT_BY_ENUM.CREATED_TIME) {
      createdAt = order;
    }
    if (sortBy === SORT_BY_ENUM.UPDATED_TIME) {
      updatedAt = order;
    }

    const condition: Pick<
      Prisma.PostCategoryFindManyArgs,
      'where' | 'orderBy'
    > = {
      where: {
        name: {
          contains: name,
        },
        id,
        isDeleted,
      },
      orderBy: {
        createdAt,
        updatedAt,
      },
    };

    const total = await this.dbService.postCategory.count(condition);
    const result = await this.dbService.postCategory.findMany({
      ...condition,
      skip: offset,
      take: limit,
    });

    return { total: total ?? 0, lists: result };
  }
  create(createPostCategoriesDto: CreatePostCategoryDto) {
    return this.dbService.postCategory.create({
      data: { ...createPostCategoriesDto },
    });
  }
  constructor(private dbService: DbService) {}
}

import {
  IS_DELETED_ENUM,
  IS_PUBLISHED_ENUM,
} from '@libs/common/constants/enum';
import { DbService } from '@libs/db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StatisticsService {
  constructor(private dbService: DbService) {}

  async getCount() {
    const postCount = await this.dbService.post.count({
      where: {
        isDeleted: IS_DELETED_ENUM.NO,
        isPublished: IS_PUBLISHED_ENUM.YES,
      },
    });

    const categoryCount = await this.dbService.postCategory.count({
      where: { isDeleted: IS_DELETED_ENUM.NO },
    });

    const tagCount = await this.dbService.postTag.count({
      where: { isDeleted: IS_DELETED_ENUM.NO },
    });

    return { tagCount, postCount, categoryCount };
  }
}

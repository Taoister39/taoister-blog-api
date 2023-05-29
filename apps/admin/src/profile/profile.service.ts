import { DbService } from '@libs/db';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateProfileDto } from 'apps/admin/src/profile/dto/create-profile.dto';
import { UpdateProfileDto } from 'apps/admin/src/profile/dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private dbService: DbService) {}

  getOne() {
    return this.dbService.profile.findFirst({
      orderBy: {
        createdAt: Prisma.SortOrder.asc,
      },
    });
  }

  findOne(id: string) {
    return this.dbService.profile.findUnique({ where: { id } });
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    return this.dbService.profile.update({
      where: { id },
      data: updateProfileDto,
    });
  }

  createOne(createProfileDto: CreateProfileDto) {
    return this.dbService.profile.create({
      data: createProfileDto,
    });
  }
}

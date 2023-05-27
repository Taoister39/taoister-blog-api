import { Injectable } from '@nestjs/common';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { DbService } from '@libs/db';

@Injectable()
export class AboutService {
  getOne() {
    return this.dbService.about.findFirst();
  }
  constructor(private dbService: DbService) {}

  create(createAboutDto: CreateAboutDto) {
    return this.dbService.about.create({ data: createAboutDto });
  }

  findOne(id: string) {
    return this.dbService.about.findFirst({
      where: {
        id,
      },
    });
  }

  updateOne(id: string, updateAboutDto: UpdateAboutDto) {
    return this.dbService.about.update({
      where: {
        id,
      },
      data: updateAboutDto,
    });
  }
}

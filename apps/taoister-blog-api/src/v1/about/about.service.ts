import { DbService } from '@libs/db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AboutService {
  constructor(private dbService: DbService) {}
  getOne() {
    return this.dbService.about.findFirst();
  }
}

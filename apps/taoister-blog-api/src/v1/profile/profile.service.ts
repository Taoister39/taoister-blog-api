import { DbService } from '@libs/db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  constructor(private dbService: DbService) {}
  getOne() {
    return this.dbService.profile.findFirst({ orderBy: { createdAt: 'desc' } });
  }
}

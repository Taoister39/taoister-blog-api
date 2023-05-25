import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AboutModule } from './about/about.module';
import { ConfigModule } from '@libs/config';
import { DbModule } from '@libs/db';

@Module({
  imports: [ConfigModule, DbModule, AboutModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}

import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AboutModule } from './about/about.module';
import { ConfigModule } from '@libs/config';
import { DbModule } from '@libs/db';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [ConfigModule, DbModule, AboutModule, AuthModule, ProfileModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}

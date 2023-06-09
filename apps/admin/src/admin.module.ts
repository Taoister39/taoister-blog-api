import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AboutModule } from './about/about.module';
import { ConfigModule } from '@libs/config';
import { DbModule } from '@libs/db';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { UsersModule } from './users/users.module';
import { JwtAuthGuard } from 'apps/admin/src/auth/guard/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { PostsModule } from './posts/posts.module';
import { PostCategoriesModule } from './post-categories/post-categories.module';
import { PostTagsModule } from './post-tags/post-tags.module';

@Module({
  imports: [
    ConfigModule,
    DbModule,
    AboutModule,
    AuthModule,
    ProfileModule,
    UsersModule,
    PostsModule,
    PostCategoriesModule,
    PostTagsModule,
  ],
  controllers: [AdminController],
  providers: [AdminService, { provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AdminModule {}

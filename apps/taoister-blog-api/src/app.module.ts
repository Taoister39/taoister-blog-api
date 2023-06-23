import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { AboutModule } from 'apps/taoister-blog-api/src/v1/about/about.module';
import { PostsModule } from 'apps/taoister-blog-api/src/v1/posts/posts.module';
import { ConfigModule } from '@libs/config';
import { ProfileModule } from 'apps/taoister-blog-api/src/v1/profile/profile.module';
import { PostTagsModule } from './v1/post-tags/post-tags.module';
import { PostCategoriesModule } from './v1/post-categories/post-categories.module';
import { StatisticsModule } from './v1/statistics/statistics.module';

@Module({
  imports: [
    ConfigModule,
    DbModule,
    AboutModule,
    PostsModule,
    PostsModule,
    ProfileModule,
    PostTagsModule,
    PostCategoriesModule,
    StatisticsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

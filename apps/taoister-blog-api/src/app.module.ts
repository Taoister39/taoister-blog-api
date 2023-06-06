import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { AboutModule } from 'apps/taoister-blog-api/src/v1/about/about.module';
import { PostsModule } from 'apps/taoister-blog-api/src/v1/posts/posts.module';
import { ConfigModule } from '@libs/config';
import { PostModule } from './post/post.module';

@Module({
  imports: [ConfigModule, DbModule, AboutModule, PostsModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { AboutModule } from 'apps/taoister-blog-api/src/v1/about/about.module';

@Module({
  imports: [DbModule, AboutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

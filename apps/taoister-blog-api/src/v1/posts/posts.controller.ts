import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindPostDto } from 'apps/taoister-blog-api/src/v1/posts/dto/find-post.dto';

@Controller('/v1/posts')
@ApiTags('文章')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiOperation({ summary: '查詢文章' })
  findMany(@Query() findPostDto: FindPostDto) {
    return this.postsService.findMany(findPostDto);
  }
}

import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from 'apps/admin/src/posts/dto/create-post.dto';
import { FindPostDto } from 'apps/admin/src/posts/dto/find-post.dto';
import { UpdatePostDto } from 'apps/admin/src/posts/dto/update-post.dto';

@Controller('/posts')
@ApiTags('文章')
@ApiBearerAuth()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({ summary: '創建一個文章' })
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @ApiOperation({ summary: '獲取文章列表' })
  @Get()
  findMany(@Query() findPostDto: FindPostDto) {
    return this.postsService.findMany(findPostDto);
  }

  @ApiOperation({ summary: '獲取文章' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @ApiOperation({ summary: '更新文章' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @ApiOperation({ summary: '根據id進行真刪除' })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.postsService.delete(id);
  }
}

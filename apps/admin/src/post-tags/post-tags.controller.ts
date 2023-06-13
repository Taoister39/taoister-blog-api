import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { PostTagsService } from './post-tags.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostTagDto } from 'apps/admin/src/post-tags/dto/create-post-tag.dto';
import { FindPostTagDto } from 'apps/admin/src/post-tags/dto/find-post-tag.dto';

@Controller('/post_tags')
@ApiTags('文章標籤')
@ApiBearerAuth()
export class PostTagsController {
  @Post()
  @ApiOperation({ summary: '創建標籤' })
  create(@Body() createPostTagDto: CreatePostTagDto) {
    return this.postTagsService.create(createPostTagDto);
  }

  @Get()
  @ApiOperation({ summary: '查詢標籤列表' })
  findMany(@Query() findPostTagDto: FindPostTagDto) {
    return this.postTagsService.findMany(findPostTagDto);
  }

  constructor(private readonly postTagsService: PostTagsService) {}
}

import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostTagsService } from './post-tags.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostTagDto } from 'apps/admin/src/post-tags/dto/create-post-tag.dto';
import { FindPostTagDto } from 'apps/admin/src/post-tags/dto/find-post-tag.dto';
import { UpdatePostTagDto } from 'apps/admin/src/post-tags/dto/update-post-tag.dto';

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

  @Patch(':id')
  @ApiOperation({ summary: '更新文章標籤' })
  update(@Param('id') id: string, updatePostTagDto: UpdatePostTagDto) {
    return this.postTagsService.update(id, updatePostTagDto);
  }

  @Get(':id')
  @ApiOperation({ summary: '根據id查詢文章' })
  findOne(@Param('id') id: string) {
    return this.postTagsService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: '根據id進行刪除' })
  delete(@Param('id') id: string) {
    return this.postTagsService.delete(id);
  }

  constructor(private readonly postTagsService: PostTagsService) {}
}

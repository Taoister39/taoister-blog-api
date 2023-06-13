import {
  Body,
  Controller,
  Post,
  Query,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostCategoriesService } from './post-categories.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostCategoryDto } from 'apps/admin/src/post-categories/dto/create-post-category.dto';
import { FindPostCategoryDto } from 'apps/admin/src/post-categories/dto/find-post-category.dto';
import { UpdatePostCategoryDto } from 'apps/admin/src/post-categories/dto/update-post-category.dto';

@Controller('/post_categories')
@ApiTags('文章分類')
@ApiBearerAuth()
export class PostCategoriesController {
  constructor(private readonly postCategoriesService: PostCategoriesService) {}

  @Post()
  @ApiOperation({ summary: '創建文章分類' })
  create(@Body() createPostCategoriesDto: CreatePostCategoryDto) {
    return this.postCategoriesService.create(createPostCategoriesDto);
  }

  @Get()
  @ApiOperation({ summary: '查詢文章分類' })
  findMany(@Query() findPostCategoryDto: FindPostCategoryDto) {
    return this.postCategoriesService.findMany(findPostCategoryDto);
  }

  @Get(':id')
  @ApiOperation({ summary: '根據id進行查詢' })
  findOne(@Param('id') id: string) {
    return this.postCategoriesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新文章分類' })
  update(
    @Param('id') id: string,
    @Body() updatePostCategoryDto: UpdatePostCategoryDto,
  ) {
    return this.postCategoriesService.update(id, updatePostCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '完整刪除' })
  delete(@Param('id') id: string) {
    return this.postCategoriesService.delete(id);
  }
}

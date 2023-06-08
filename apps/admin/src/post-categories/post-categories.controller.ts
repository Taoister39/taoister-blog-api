import { Body, Controller, Post, Query, Get } from '@nestjs/common';
import { PostCategoriesService } from './post-categories.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostCategoryDto } from 'apps/admin/src/post-categories/dto/create-post-category.dto';
import { FindPostCategoryDto } from 'apps/admin/src/post-categories/dto/find-post-category.dto';

@Controller('/v1/post_categories')
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
}

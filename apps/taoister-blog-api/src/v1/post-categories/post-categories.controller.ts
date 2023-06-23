import { Controller, Get, Param, Query } from '@nestjs/common';
import { PostCategoriesService } from './post-categories.service';
import { FindPostCategoryDto } from 'apps/taoister-blog-api/src/v1/post-categories/dto/FindPostCategoryDto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('v1/post_categories')
export class PostCategoriesController {
  @Get()
  @ApiOperation({})
  findMany(@Query() findPostCategory: FindPostCategoryDto) {
    return this.postCategoriesService.findMany(findPostCategory);
  }

  @Get(':id')
  @ApiOperation({})
  findOne(@Param('id') id: string) {
    return this.postCategoriesService.findOne(id);
  }

  constructor(private readonly postCategoriesService: PostCategoriesService) {}
}

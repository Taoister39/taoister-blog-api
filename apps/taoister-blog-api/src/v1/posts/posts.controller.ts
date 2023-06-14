import { Controller, Get, Patch, Param, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindPostDto } from 'apps/taoister-blog-api/src/v1/posts/dto/find-post.dto';

@Controller('/v1/posts')
@ApiTags('文章')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('')
  @ApiOperation({ summary: '查詢文章' })
  findMany(@Query() findPostDto: FindPostDto) {
    return this.postsService.findMany(findPostDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: '根據id查詢文章',
  })
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Patch('/view_increment/:id')
  viewIncrement(@Param('id') id: string) {
    return this.postsService.viewIncrement(id);
  }
}

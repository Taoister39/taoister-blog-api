import { Get, Param, Controller, Query } from '@nestjs/common';
import { PostTagsService } from './post-tags.service';
import { FindPostTagDto } from 'apps/taoister-blog-api/src/v1/post-tags/dto/FindPostTagDto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('v1/post_tags')
export class PostTagsController {
  constructor(private readonly postTagsService: PostTagsService) {}

  @ApiOperation({
    summary: '根據id獲取文章標籤數據',
    description: '包括有哪些文章',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postTagsService.findOne(id);
  }

  @ApiOperation({
    summary: '獲取文章標籤的列表',
    description: '返回的posts是個文章數量',
  })
  @Get()
  findMany(@Query() findPostTagDto: FindPostTagDto) {
    return this.postTagsService.findMany(findPostTagDto);
  }
}

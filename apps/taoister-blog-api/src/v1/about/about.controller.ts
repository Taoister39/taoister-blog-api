import { Controller, Get } from '@nestjs/common';
import { AboutService } from './about.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('/v1/about')
@ApiTags('關於')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}
  @Get('')
  @ApiOperation({ summary: '我的第一個about' })
  getOne() {
    return this.aboutService.getOne();
  }
}

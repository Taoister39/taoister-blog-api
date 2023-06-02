import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AboutService } from './about.service';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('about')
@ApiTags('關於')
@ApiBearerAuth()
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Post()
  @ApiOperation({ summary: '創建關於' })
  createAbout(@Body() content: CreateAboutDto) {
    return this.aboutService.create(content);
  }

  @Get()
  @ApiOperation({ summary: '獲取第一個關於' })
  getOne() {
    return this.aboutService.getOne();
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新關於' })
  updateOne(@Param('id') id: string, @Body() updateAboutDto: UpdateAboutDto) {
    return this.aboutService.updateOne(id, updateAboutDto);
  }

  @Get(':id')
  @ApiOperation({ summary: '獲取指定的關於' })
  findOne(@Param('id') id: string) {
    return this.aboutService.findOne(id);
  }
}

import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProfileDto } from 'apps/admin/src/profile/dto/create-profile.dto';
import { UpdateProfileDto } from 'apps/admin/src/profile/dto/update-profile.dto';

@Controller('profile')
@ApiTags('博主信息')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':id')
  @ApiOperation({
    summary: '通過id查找個人信息',
  })
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  @Get()
  @ApiOperation({
    summary: '獲取第一條個人信息',
  })
  getOne() {
    return this.profileService.getOne();
  }

  @Post()
  @ApiOperation({
    summary: '創建一條個人信息',
  })
  createOne(@Body() body: CreateProfileDto) {
    return this.profileService.createOne(body);
  }

  @Patch(':id')
  update(@Body() body: UpdateProfileDto, @Param('id') id: string) {
    return this.profileService.update(id, body);
  }
}

import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('/v1/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('')
  @ApiOperation({ summary: '獲取第一個profile' })
  getOne() {
    return this.profileService.getOne();
  }
}

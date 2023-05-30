import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from 'apps/admin/src/auth/guard/local-auth.guard';
import { LoginDto } from 'apps/admin/src/auth/dto/login.dto';

@Controller('auth')
@ApiTags('驗證賬號（管理員）')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard) // 本地賬戶密碼策略
  @Post('login')
  @ApiOperation({
    summary: '登錄，輸入賬號密碼',
  })
  login(@Body() loginDto: LoginDto, @Req() request) {
    return this.authService.login(request.user);
  }
}

import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// 直接應用，不做擴展
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}

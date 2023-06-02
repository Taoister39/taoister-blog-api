import { AuthGuard } from '@nestjs/passport';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
  // 利用反射器可以配合自定義裝飾器
  constructor(private reflector: Reflector) {
    super();
  }

  // 重寫方法，可以配合反射器
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();
    const path = request.path;

    // console.log(path);
    if (path === '/auth/login') {
      return true;
    }

    return super.canActivate(context);
  }
}

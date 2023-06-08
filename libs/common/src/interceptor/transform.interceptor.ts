import { CODE_ENUM } from '@libs/common/constants/enum';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

interface ApiResultVo<T> {
  code: CODE_ENUM;
  message: string;
  data: T;
}

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(
        (item): ApiResultVo<any> => ({
          code: CODE_ENUM.SUCCESS,
          message: 'success',
          data: item,
        }),
      ),
    );
  }
}

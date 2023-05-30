import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { PayloadDto } from 'apps/admin/src/auth/dto/payload.dto';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // console.log(process.env.JWT_SECRET, ' jwt secret ');
    super({
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 從請求頭中提取token
      ignoreExpiration: false, // 過期自動返回401錯誤
    });
  }
  // jwt裏只攜帶了id
  async validate(payload: PayloadDto) {
    return payload;
  }
}

import { checkPassword } from '@libs/common/utils/password';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PayloadDto } from 'apps/admin/src/auth/dto/payload.dto';
import { UsersService } from 'apps/admin/src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  login(user: User) {
    const payload: PayloadDto = { id: user.id };
    return { token: this.jwtService.sign(payload) }; // 返回json web token
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.getUserByEmail(email);

    if (!checkPassword(user.password, password)) {
      return null;
    }

    return {
      ...user,
      password: undefined, // 密碼不做返回
    };
  }
}

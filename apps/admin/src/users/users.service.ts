import { IS_DELETED_ENUM } from '@libs/common/constants/enum';
import { generatePassword } from '@libs/common/utils/password';
import { DbService } from '@libs/db';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'apps/admin/src/users/dto/create-user.dto';

@Injectable()
export class UsersService {
  async getUserByEmail(email: string) {
    const user = await this.dbService.user.findFirst({
      where: { email, isDeleted: IS_DELETED_ENUM.NO },
    });

    // Nest提供了一个内置的 HttpException 类，它从 @nestjs/common 包中导入。
    // 内置的异常层负责处理整个应用程序中的所有抛出的异常。当捕获到未处理的异常时，最终用户将收到友好的响应。
    if (!user) {
      throw new NotFoundException(`找不到email爲${email}的用戶`);
    }

    return user;
  }
  create(createUserDto: CreateUserDto) {
    const password = generatePassword(createUserDto.password);

    return this.dbService.user.create({
      data: { ...createUserDto, password },
    });
  }
  constructor(private dbService: DbService) {}

  findOne(id: string) {
    return this.dbService.user.findUnique({ where: { id } });
  }
}

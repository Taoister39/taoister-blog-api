import { PartialType, PickType } from '@nestjs/swagger';
import { FindUserDto } from 'apps/admin/src/users/dto/find-user.dto';
import { IsBoolean } from 'class-validator';

// 更新只有要不要刪除
export class UpdateUserDto extends PartialType(FindUserDto) {
  @IsBoolean()
  isDeleted: boolean;
}

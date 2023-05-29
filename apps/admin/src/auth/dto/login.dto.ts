import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: '用戶郵箱',
    default: 'Taoister39@outlook.com',
    required: true,
  })
  @IsString()
  readonly email: string;

  @ApiProperty({
    description: '用戶密碼',
    default: '123456',
    required: true,
  })
  @IsString()
  readonly password: string;
}

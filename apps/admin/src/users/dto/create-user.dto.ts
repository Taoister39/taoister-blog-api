import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    title: '密碼',
    required: true,
  })
  readonly password: string;

  @IsString()
  @ApiProperty({
    title: '郵箱',
    default: 'Taoister39@outlook.com',
    required: true,
  })
  readonly email: string;

  @IsString()
  @ApiProperty({
    title: '頭像',
    default: 'https://i.hd-r.cn/d31d6cdbb8b63820512a3ac67adce5df.png',
    required: true,
  })
  readonly avatar: string;
}

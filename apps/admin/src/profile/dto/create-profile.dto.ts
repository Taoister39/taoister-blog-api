import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    title: '作者',
    required: false,
  })
  readonly author?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    title: '個性簽名',
    required: false,
  })
  readonly slogan?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    title: '郵箱地址',
    required: false,
  })
  readonly email?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    title: '個人網站',
    required: false,
  })
  readonly site?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    title: 'github地址',
  })
  readonly github?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    title: 'twitter地址',
  })
  readonly twitter?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    title: '選擇的圖片名稱',
  })
  readonly avatar?: string;
}

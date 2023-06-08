import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreatePostTagDto {
  @IsString()
  @ApiProperty({ description: '文章分類', required: true })
  readonly name: string;

  @IsOptional()
  @ApiProperty({ description: '文章分類描述', required: false })
  readonly description?: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @ApiProperty({ title: '文章標題', required: true })
  readonly title: string;

  @IsOptional()
  @ApiProperty({ title: '文章簡介', required: false })
  readonly description?: string;

  @IsString()
  @ApiProperty({ title: '文章的主體', required: true })
  readonly content: string;

  @IsOptional()
  @IsString({ each: true }) // string []
  @ApiProperty({ title: '文章的分類', required: false })
  readonly categories?: string[];

  @IsOptional()
  @IsString({ each: true })
  @ApiProperty({ title: '文章的標籤', required: false })
  readonly tags?: string[];
}

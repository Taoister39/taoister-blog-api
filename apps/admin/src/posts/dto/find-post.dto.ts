import {
  IS_DELETED_ENUM,
  IS_PUBLISHED_ENUM,
  POST_TYPE_ENUM,
} from '@libs/common/constants/enum';
import { PostSortPaginationDto } from '@libs/common/dto/sort-pagination.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class FindPostDto extends PostSortPaginationDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ title: '文章id', required: false })
  readonly id?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ title: '文章標題', required: false })
  readonly title?: string;

  @IsOptional()
  @IsEnum(POST_TYPE_ENUM)
  @ApiProperty({
    title: '文章的類型',
    required: false,
    enum: [
      POST_TYPE_ENUM.ORIGINAL,
      POST_TYPE_ENUM.TRANSLATION,
      POST_TYPE_ENUM.TRANSSHIPMENT,
    ],
  })
  readonly type?: POST_TYPE_ENUM;

  @IsOptional()
  @IsEnum(IS_PUBLISHED_ENUM)
  @ApiProperty({
    default: IS_PUBLISHED_ENUM.NO,
    description: '文章是否發佈，不發佈先存儲到數據庫當中（數據就是錢）',
    required: false,
    enum: [IS_PUBLISHED_ENUM.NO, IS_PUBLISHED_ENUM.YES],
  })
  readonly isPublished?: IS_PUBLISHED_ENUM;

  @IsOptional()
  @IsEnum(IS_DELETED_ENUM)
  @ApiProperty({
    default: IS_DELETED_ENUM.NO,
    description: '文章是否被軟刪除了',
    enum: [IS_DELETED_ENUM.NO, IS_DELETED_ENUM.YES],
  })
  readonly isDeleted?: IS_DELETED_ENUM;
}

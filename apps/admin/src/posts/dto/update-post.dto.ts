import {
  IS_DELETED_ENUM,
  IS_PUBLISHED_ENUM,
} from '@libs/common/constants/enum';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePostDto } from 'apps/admin/src/posts/dto/create-post.dto';
import { IsEnum, IsOptional } from 'class-validator';

/**
 * 相當於在創建文章dto中加入兩個字段
 *
 * 但是，比如content，也許是不需要的
 */
export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsOptional()
  @IsEnum(IS_PUBLISHED_ENUM)
  @ApiProperty({
    title: '是否發佈',
    default: IS_DELETED_ENUM.NO,
    required: false,
    enum: [IS_PUBLISHED_ENUM.NO, IS_PUBLISHED_ENUM.YES],
  })
  readonly isPublished?: IS_PUBLISHED_ENUM;

  @IsOptional()
  @IsEnum(IS_DELETED_ENUM)
  @ApiProperty({
    title: '是否軟刪除',
    default: IS_DELETED_ENUM.NO,
    required: false,
    enum: [IS_DELETED_ENUM.NO, IS_DELETED_ENUM.YES],
  })
  readonly isDeleted?: IS_DELETED_ENUM;
}

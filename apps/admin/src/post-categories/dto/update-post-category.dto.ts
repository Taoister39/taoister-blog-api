import { IS_DELETED_ENUM } from '@libs/common/constants/enum';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePostCategoryDto } from 'apps/admin/src/post-categories/dto/create-post-category.dto';
import { IsEnum, IsOptional } from 'class-validator';

export class UpdatePostCategoryDto extends PartialType(CreatePostCategoryDto) {
  @IsOptional()
  @IsEnum(IS_DELETED_ENUM)
  @ApiProperty({
    title: '軟刪除',
    default: IS_DELETED_ENUM.NO,
  })
  isDeleted?: number;
}

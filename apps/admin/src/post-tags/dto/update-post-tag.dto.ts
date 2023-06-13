import { IS_DELETED_ENUM } from '@libs/common/constants/enum';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePostTagDto } from 'apps/admin/src/post-tags/dto/create-post-tag.dto';
import { IsEnum, IsOptional } from 'class-validator';

export class UpdatePostTagDto extends PartialType(CreatePostTagDto) {
  @IsOptional()
  @IsEnum(IS_DELETED_ENUM)
  @ApiProperty({ title: '是否軟刪除', default: IS_DELETED_ENUM.NO })
  isDeleted?: number;
}

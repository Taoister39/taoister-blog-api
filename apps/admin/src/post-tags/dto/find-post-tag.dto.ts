import { IS_DELETED_ENUM } from '@libs/common/constants/enum';
import { SortPaginationDto } from '@libs/common/dto/sort-pagination.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class FindPostTagDto extends SortPaginationDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ description: '文章標籤id', required: false })
  readonly id?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: '文章標籤', required: false })
  readonly name?: string;

  @IsOptional()
  @IsEnum(IS_DELETED_ENUM)
  @ApiProperty({
    description: '是否要軟刪除',
    required: false,
    default: IS_DELETED_ENUM.NO,
  })
  readonly isDeleted?: number;
}

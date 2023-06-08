import { IS_DELETED_ENUM } from '@libs/common/constants/enum';
import { SortPaginationDto } from '@libs/common/dto/sort-pagination.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class FindPostCategoryDto extends SortPaginationDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ description: '文章分類id', required: false })
  readonly id?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: '文章分類', required: false })
  readonly name?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: '是否需要軟刪除', required: false })
  readonly isDeleted?: IS_DELETED_ENUM;
}

import { SortPaginationDto } from '@libs/common/dto/sort-pagination.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class FindPostCategoryDto extends SortPaginationDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ title: '文章分類id' })
  readonly id?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ title: '文章分類名字' })
  readonly name?: string;
}

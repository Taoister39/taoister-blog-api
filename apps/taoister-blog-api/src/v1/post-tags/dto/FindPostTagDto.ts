import { SortPaginationDto } from '@libs/common/dto/sort-pagination.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class FindPostTagDto extends SortPaginationDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ title: '標籤id' })
  readonly id?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ title: '標籤名字' })
  readonly name?: string;
}

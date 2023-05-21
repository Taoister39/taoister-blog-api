import { PostSortPaginationDto } from '@libs/common/dto/sort-pagination.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class FindPostDto extends PostSortPaginationDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly id?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly title?: string;
}

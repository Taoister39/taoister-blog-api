import { SortPaginationDto } from '@libs/common/dto/sort-pagination.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

// 因爲不需要查詢單個人，都是按頁的DTO
export class FindUserDto extends SortPaginationDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    title: '郵箱',
  })
  readonly email?: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    title: '是否刪除',
  })
  readonly isDeleted?: boolean;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: '用戶id',
    required: false,
  })
  readonly id?: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsOptional, IsEnum } from 'class-validator';

// 排序
export enum SORT_BY_ENUM {
  CREATED_TIME = 'CREATED_TIME',
  UPDATED_TIME = 'UPDATED_TIME',
}
// 排序
export enum POST_SORT_BY_ENUM {
  CREATED_TIME = 'CREATED_TIME',
  UPDATED_TIME = 'UPDATED_TIME',
  PUBLISHED_TIME = 'PUBLISHED_TIME',
}

export class SortDto {
  @IsOptional()
  @IsEnum(SORT_BY_ENUM)
  @ApiProperty({
    description: '按什麼類型排序，默認是createTime',
    default: SORT_BY_ENUM.CREATED_TIME,
    required: false,
    enum: SORT_BY_ENUM,
  })
  readonly sortBy?: SORT_BY_ENUM;

  @IsOptional()
  @IsEnum(Prisma.SortOrder)
  @ApiProperty({
    description: '正序倒序，默認desc',
    default: Prisma.SortOrder.desc,
    required: false,
    enum: Prisma.SortOrder,
  })
  readonly order?: Prisma.SortOrder;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'limit; 默認爲10',
    default: 10,
    required: false,
  })
  readonly limit?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'offset; 默認爲0',
    default: 0,
    required: false,
  })
  readonly offset?: number;
}

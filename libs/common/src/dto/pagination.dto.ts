import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty({})
  readonly limit?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({})
  readonly offset?: number;
}

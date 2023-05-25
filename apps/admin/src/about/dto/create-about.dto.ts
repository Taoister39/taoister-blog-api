import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAboutDto {
  @IsString()
  @ApiProperty({ description: 'markdown內容', required: true })
  readonly content: string;
}

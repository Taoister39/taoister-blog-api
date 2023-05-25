import { PickType } from '@nestjs/swagger';
import { CreateAboutDto } from 'apps/admin/src/about/dto/create-about.dto';

export class UpdateAboutDto extends PickType(CreateAboutDto, ['content']) {}

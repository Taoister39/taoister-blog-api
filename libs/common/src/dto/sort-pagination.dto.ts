import { PaginationDto } from '@libs/common/dto/pagination.dto';
import { IntersectionType } from '@nestjs/swagger';

export class PostSortPaginationDto extends IntersectionType(PaginationDto) {}

export class SortPaginationDto extends IntersectionType(PaginationDto) {}

import { PaginationDto } from '@libs/common/dto/pagination.dto';
import { PostSortDto, SortDto } from '@libs/common/dto/sort.dto';
import { IntersectionType } from '@nestjs/swagger';

// 合併爲一個類
// 文章排序分頁
export class PostSortPaginationDto extends IntersectionType(
  PostSortDto,
  PaginationDto,
) {}

// 合併爲一個類
// 排序分頁
export class SortPaginationDto extends IntersectionType(
  SortDto,
  PaginationDto,
) {}

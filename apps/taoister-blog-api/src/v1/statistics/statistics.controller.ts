import { Controller, Get } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('v1/statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get('count')
  @ApiOperation({ summary: '獲取文章、標籤、分類，都未刪除的數量' })
  getCount() {
    return this.statisticsService.getCount();
  }
}

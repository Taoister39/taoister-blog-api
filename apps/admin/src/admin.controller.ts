import { Controller, Get, Res } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Response } from 'express';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getHello(@Res() response: Response) {
    return response.status(200).json(this.adminService.getHello());
  }
}

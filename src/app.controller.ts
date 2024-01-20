import {
  BadRequestException,
  Controller,
  Get,
  InternalServerErrorException,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('four')
  four(): string {
    throw new BadRequestException();
  }

  @Get('five')
  five(): string {
    throw new InternalServerErrorException();
  }
}

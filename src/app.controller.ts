import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';
import { DbManagerService } from './db-manager/db-manager.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbManager: DbManagerService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hallo')
  getHelloAleman(): string {
    return this.appService.getHelloAleman();
  }

  @Get('bonjour')
  getHelloFrances(): string {
    return this.appService.getHelloFrances();
  }

  @Get('espanol')
  getHelloEspanol(): string {
    return this.appService.getHelloEspanol();
  }

  @Get('user')
  getUser(@Query('id') id: string) {
    const idNum = Number(id);
    if (!id || isNaN(idNum)) {
      throw new BadRequestException('ID debe ser un número válido');
    }
    return this.dbManager.getUser(idNum);
  }
}

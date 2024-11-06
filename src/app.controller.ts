import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//Controllers são responsáveis por receber requisições HTTP e retornar respostas HTTP. HTTP == Client!
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

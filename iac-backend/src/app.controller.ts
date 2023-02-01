import { Controller, Get, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  status() {
    return {
      statusCoce: HttpStatus.OK,
      message: 'API Rest IAC en ejecución.',
    };
  }
}

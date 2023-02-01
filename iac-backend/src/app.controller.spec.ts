import { HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "API Rest IAC en ejecución."', () => {
      expect(appController.status()).toEqual({
        statusCoce: HttpStatus.OK,
        message: 'API Rest IAC en ejecución.',
      });
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!!"', () => {
      expect(appController.getHello()).toBe('Hello World!!');
    });
    it('should return "Hola Mundo!!"', () => {
      expect(appController.getHelloEspanol()).toBe('Hola Mundo!!');
    });
    it('should return "mi mensaje de pruebas"', () => {
      expect(appController.getHelloFrances()).toBe('mi mensaje de pruebas');
    });
    it('should return "Hallo Welt"', () => {
      expect(appController.getHelloAleman()).toBe('Hallo Welt');
    });
  });
});

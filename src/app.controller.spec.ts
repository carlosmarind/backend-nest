import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbManagerService } from './db-manager/db-manager.service';

describe('AppController', () => {
  let appController: AppController;
  let mockDbService: { getUser: jest.Mock };

  beforeEach(async () => {
    mockDbService = {
      getUser: jest.fn().mockReturnValue({ id: 1, nombre: 'Loreto' }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        { provide: DbManagerService, useValue: mockDbService },
      ],
    }).compile();

    appController = module.get<AppController>(AppController);
  });

  it('debería estar definido', () => {
    expect(appController).toBeDefined();
  });

  it('getHello debería retornar "Hello World!!"', () => {
    expect(appController.getHello()).toBe('Hello World!!');
  });

  it('getHelloAleman debería retornar "Hallo Welt"', () => {
    expect(appController.getHelloAleman()).toBe('Hallo Welt');
  });

  it('getHelloFrances debería retornar "mi mensaje de pruebas"', () => {
    expect(appController.getHelloFrances()).toBe('mi mensaje de pruebas');
  });

  it('getHelloEspanol debería retornar "Hola Mundo!!"', () => {
    expect(appController.getHelloEspanol()).toBe('Hola Mundo!!');
  });

  it('getUser debería retornar un usuario por id', () => {
    const userId = 2342;
    expect(appController.getUser(userId)).toEqual({ id: 1, nombre: 'Loreto' });
    expect(mockDbService.getUser).toHaveBeenCalledWith(userId);
  });
});

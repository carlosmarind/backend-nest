import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, BadRequestException, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbManagerService } from './db-manager/db-manager.service';

describe('AppController (unit + e2e)', () => {
  let appController: AppController;
  let app: INestApplication;

  let mockDbService: { getUser: jest.Mock };

  beforeAll(async () => {
    mockDbService = {
      getUser: jest.fn().mockReturnValue({ id: 1, nombre: 'Loreto' }),
    };

    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        { provide: DbManagerService, useValue: mockDbService },
      ],
    }).compile();

    appController = moduleRef.get<AppController>(AppController);

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  // Unit tests - métodos directos
  describe('Unitario - métodos AppController', () => {
    it('GET / → getHello', () => {
      expect(appController.getHello()).toBe('Hello World!!');
    });

    it('GET /hallo → getHelloAleman', () => {
      expect(appController.getHelloAleman()).toBe('Hallo Welt');
    });

    it('GET /bonjour → getHelloFrances', () => {
      expect(appController.getHelloFrances()).toBe('mi mensaje de pruebas');
    });

    it('GET /espanol → getHelloEspanol', () => {
      expect(appController.getHelloEspanol()).toBe('Hola Mundo!!');
    });

    it('GET /user con id válido llama DbManagerService', () => {
      const id = '2342';
      expect(appController.getUser(id)).toEqual({ id: 1, nombre: 'Loreto' });
      expect(mockDbService.getUser).toHaveBeenLastCalledWith(Number(id));
    });

    it('GET /user con id inválido lanza error', () => {
      expect(() => appController.getUser('abc')).toThrow(BadRequestException);
      expect(() => appController.getUser('')).toThrow(BadRequestException);
      expect(() => appController.getUser(null as any)).toThrow(BadRequestException);
      expect(() => appController.getUser(undefined as any)).toThrow(BadRequestException);
    });
  });

  // Integration tests - via HTTP
  describe('Integración HTTP - AppController endpoints', () => {
    it('GET / → debe retornar Hello World!!', () => {
      return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect('Hello World!!');
    });

    it('GET /hallo → debe retornar Hallo Welt', () => {
      return request(app.getHttpServer())
        .get('/hallo')
        .expect(200)
        .expect('Hallo Welt');
    });

    it('GET /bonjour → debe retornar mi mensaje de pruebas', () => {
      return request(app.getHttpServer())
        .get('/bonjour')
        .expect(200)
        .expect('mi mensaje de pruebas');
    });

    it('GET /espanol → debe retornar Hola Mundo!!', () => {
      return request(app.getHttpServer())
        .get('/espanol')
        .expect(200)
        .expect('Hola Mundo!!');
    });

    it('GET /user?id=123 → debe retornar usuario mockeado', () => {
      return request(app.getHttpServer())
        .get('/user?id=123')
        .expect(200)
        .expect({ id: 1, nombre: 'Loreto' });
    });

    it('GET /user?id=abc → debe retornar error 400', () => {
      return request(app.getHttpServer())
        .get('/user?id=abc')
        .expect(400);
    });

    it('GET /user sin id → debe retornar error 400', () => {
      return request(app.getHttpServer())
        .get('/user')
        .expect(400);
    });
  });
});

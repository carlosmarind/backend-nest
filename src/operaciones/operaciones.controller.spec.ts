import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { OperacionesController } from './operaciones.controller';
import { OperacionesService } from './operaciones.service';

describe('OperacionesController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [OperacionesController],
      providers: [OperacionesService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/operaciones (GET)', () => {
    it('debería responder con resultado correcto para suma', async () => {
      const response = await request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'suma', a: 10, b: 20 });

      expect(response.status).toBe(200);
      expect(response.body.resultado).toBe(30);
      expect(response.body.mensaje).toBe('operacion exitosa');
    });

    it('debería fallar con operación no válida', async () => {
      const response = await request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'noexiste', a: 10, b: 20 });

      expect(response.status).toBe(502);
      expect(response.body.resultado).toBeNull();
      expect(response.body.mensaje).toBe('Operación no soportada');
    });

    it('debería lanzar error si falta un parámetro', async () => {
      const response = await request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'suma', a: 10 });

      expect(response.status).toBe(502);
      expect(response.body.resultado).toBeNull();
    });

    it('debería calcular factorial correctamente (sin b)', async () => {
      const response = await request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'factorial', a: 5 });

      expect(response.status).toBe(200);
      expect(response.body.resultado).toBe(120);
    });

    it('debería lanzar error por dividir por 0', async () => {
      const response = await request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'division', a: 10, b: 0 });

      expect(response.status).toBe(502);
      expect(response.body.resultado).toBeNull();
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, BadRequestException, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { OperacionesService } from './operaciones.service';
import { OperacionesController } from './operaciones.controller';

describe('OperacionesService + OperacionesController (unit + e2e)', () => {
  let service: OperacionesService;
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [OperacionesController],
      providers: [OperacionesService],
    }).compile();

    service = moduleRef.get<OperacionesService>(OperacionesService);
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  // ---------- Tests Unitarios ----------
  describe('Unidad - OperacionesService', () => {
    describe('operar()', () => {
      it('debe realizar suma correctamente', () => {
        expect(service.operar('suma', 1, 2)).toBe(3);
      });

      it('debe realizar resta correctamente', () => {
        expect(service.operar('resta', 5, 3)).toBe(2);
      });

      it('debe realizar multiplicar correctamente', () => {
        expect(service.operar('multiplicar', 3, 4)).toBe(12);
      });

      it('debe realizar dividir correctamente', () => {
        expect(service.operar('dividir', 10, 2)).toBe(5);
      });

      it('debe realizar potencia correctamente', () => {
        expect(service.operar('potencia', 2, 3)).toBe(8);
      });

      it('debe lanzar BadRequestException para operación no soportada', () => {
        expect(() => service.operar('invalida', 1, 1)).toThrow(BadRequestException);
      });

      it('debe lanzar BadRequestException si parámetros inválidos', () => {
        expect(() => service.operar('suma', null as any, 1)).toThrow(BadRequestException);
        expect(() => service.operar('resta', 1, undefined as any)).toThrow(BadRequestException);
      });
    });

    describe('validarNumeros()', () => {
      it('debe lanzar BadRequestException si algún parámetro es null o undefined', () => {
        expect(() => (service as any).validarNumeros(null)).toThrow(BadRequestException);
        expect(() => (service as any).validarNumeros(undefined)).toThrow(BadRequestException);
      });

      it('debe lanzar BadRequestException si algún parámetro no es número', () => {
        expect(() => (service as any).validarNumeros('texto')).toThrow(BadRequestException);
        expect(() => (service as any).validarNumeros(NaN)).toThrow(BadRequestException);
      });

      it('no lanza si todos los parámetros son números válidos', () => {
        expect(() => (service as any).validarNumeros(1, 2, 3.5)).not.toThrow();
      });
    });

    describe('sumar', () => {
      it('debe sumar dos números', () => {
        expect(service.sumar(2, 3)).toBe(5);
      });

      it('debe lanzar BadRequestException con null o undefined', () => {
        expect(() => service.sumar(null as any, 3)).toThrow(BadRequestException);
        expect(() => service.sumar(undefined as any, 3)).toThrow(BadRequestException);
      });
    });

    describe('restar', () => {
      it('debe restar dos números', () => {
        expect(service.restar(5, 2)).toBe(3);
      });
    });

    describe('multiplicar', () => {
      it('debe multiplicar correctamente', () => {
        expect(service.multiplicar(4, 5)).toBe(20);
      });
    });

    describe('dividir', () => {
      it('debe dividir correctamente', () => {
        expect(service.dividir(10, 2)).toBe(5);
      });

      it('debe lanzar error al dividir por 0', () => {
        expect(() => service.dividir(10, 0)).toThrow(BadRequestException);
      });
    });

    describe('potencia', () => {
      it('debe calcular potencia', () => {
        expect(service.potencia(2, 3)).toBe(8);
      });
    });

    describe('factorial', () => {
      it('debe calcular factorial de 5', () => {
        expect(service.factorial(5)).toBe(120);
      });

      it('debe lanzar error con negativos', () => {
        expect(() => service.factorial(-1)).toThrow(BadRequestException);
      });

      it('debe lanzar error con decimales', () => {
        expect(() => service.factorial(3.5)).toThrow(BadRequestException);
      });

      it('debe lanzar error con nulo o indefinido', () => {
        expect(() => service.factorial(null as any)).toThrow(BadRequestException);
        expect(() => service.factorial(undefined as any)).toThrow(BadRequestException);
      });
    });
  });

  // ---------- Tests Integración ----------
  describe('Integración HTTP - /operaciones', () => {
    it('GET /operaciones (operar) con suma → 2+3 = 5', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'suma', a: 2, b: 3 })
        .expect(200)
        .expect(res => {
          expect(res.body.resultado).toBe(5);
          expect(res.body.mensaje).toBe('operacion exitosa');
        });
    });

    it('GET /operaciones (operar) con operación inválida devuelve 400', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'invalida', a: 2, b: 3 })
        .expect(400);
    });

    it('GET /operaciones/sumar → 2+3 = 5', () => {
      return request(app.getHttpServer())
        .get('/operaciones/sumar')
        .query({ a: 2, b: 3 })
        .expect(200)
        .expect('5');
    });

    it('GET /operaciones/restar → 4-1 = 3', () => {
      return request(app.getHttpServer())
        .get('/operaciones/restar')
        .query({ a: 4, b: 1 })
        .expect(200)
        .expect('3');
    });

    it('GET /operaciones/multiplicar → 2*3 = 6', () => {
      return request(app.getHttpServer())
        .get('/operaciones/multiplicar')
        .query({ a: 2, b: 3 })
        .expect(200)
        .expect('6');
    });

    it('GET /operaciones/dividir → 10/2 = 5', () => {
      return request(app.getHttpServer())
        .get('/operaciones/dividir')
        .query({ a: 10, b: 2 })
        .expect(200)
        .expect('5');
    });

    it('GET /operaciones/dividir → división por 0 da 400', () => {
      return request(app.getHttpServer())
        .get('/operaciones/dividir')
        .query({ a: 10, b: 0 })
        .expect(400);
    });

    it('GET /operaciones/potencia → 2^3 = 8', () => {
      return request(app.getHttpServer())
        .get('/operaciones/potencia')
        .query({ base: 2, exponente: 3 })
        .expect(200)
        .expect('8');
    });

    it('GET /operaciones/factorial?n=5 → 120', () => {
      return request(app.getHttpServer())
        .get('/operaciones/factorial')
        .query({ n: 5 })
        .expect(200)
        .expect('120');
    });

    it('GET /operaciones/factorial?n=-1 → error 400', () => {
      return request(app.getHttpServer())
        .get('/operaciones/factorial')
        .query({ n: -1 })
        .expect(400);
    });

    it('GET /operaciones/factorial?n=3.5 → error 400', () => {
      return request(app.getHttpServer())
        .get('/operaciones/factorial')
        .query({ n: 3.5 })
        .expect(400);
    });
  });
});

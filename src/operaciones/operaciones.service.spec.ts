import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';


describe('OperacionesController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  // SUMA
  it('/operaciones/suma (GET) OK', () => {
    return request(app.getHttpServer())
      .get('/operaciones/suma?a=5&b=3')
      .expect(200)
      .expect('8');
  });

  it('/operaciones/suma (GET) error por valor no numérico', () => {
    return request(app.getHttpServer())
      .get('/operaciones/suma?a=hola&b=3')
      .expect(400);
  });

  // RESTA
  it('/operaciones/resta (GET) OK', () => {
    return request(app.getHttpServer())
      .get('/operaciones/resta?a=10&b=4')
      .expect(200)
      .expect('6');
  });

  // MULTIPLICACIÓN
  it('/operaciones/multiplicacion (GET) OK', () => {
    return request(app.getHttpServer())
      .get('/operaciones/multiplicacion?a=3&b=4')
      .expect(200)
      .expect('12');
  });

  // DIVISIÓN
  it('/operaciones/division (GET) OK', () => {
    return request(app.getHttpServer())
      .get('/operaciones/division?a=10&b=2')
      .expect(200)
      .expect('5');
  });

  it('/operaciones/division (GET) error por división por 0', () => {
    return request(app.getHttpServer())
      .get('/operaciones/division?a=10&b=0')
      .expect(400);
  });

  // POTENCIA
  it('/operaciones/potencia (GET) OK', () => {
    return request(app.getHttpServer())
      .get('/operaciones/potencia?base=2&exponente=4')
      .expect(200)
      .expect('16');
  });

  it('/operaciones/potencia (GET) error por valor inválido', () => {
    return request(app.getHttpServer())
      .get('/operaciones/potencia?base=2&exponente=hola')
      .expect(400);
  });

  // FACTORIAL
  it('/operaciones/factorial (GET) OK', () => {
    return request(app.getHttpServer())
      .get('/operaciones/factorial?n=5')
      .expect(200)
      .expect('120');
  });

  it('/operaciones/factorial (GET) error por número negativo', () => {
    return request(app.getHttpServer())
      .get('/operaciones/factorial?n=-3')
      .expect(400);
  });

  it('/operaciones/factorial (GET) error por número no entero', () => {
    return request(app.getHttpServer())
      .get('/operaciones/factorial?n=2.5')
      .expect(400);
  });

  it('/operaciones/factorial (GET) error por string', () => {
    return request(app.getHttpServer())
      .get('/operaciones/factorial?n=abc')
      .expect(400);
  });
});

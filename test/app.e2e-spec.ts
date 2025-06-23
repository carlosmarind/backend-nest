import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!!');
  });

  // pruebas integracion sumas 
  it('operacion suma deberia sumar', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'suma', a: 10, b: 30 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(40);
      });
  });

  it('operacion suma deberia sumar numeros negativos', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'suma', a: -10, b: -5 })
      .expect(200)
      .then(response => {
        expect(response.body.resultado).toBe(-15);
      });
  });

  it('operacion suma deberia manejar numeros decimales', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'suma', a: 3.14, b: 2.86 })
      .expect(200)
      .then(response => {
        expect(response.body.resultado).toBeCloseTo(6.0);
      });
  });

  it('operacion suma deberia retonar error con parametros invalidos', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'suma', a: 'no-es-numero', b: 10 })
      .expect(502);
  });

  // pruebas integracion restas
  it('operacion resta deberia restar dos numeros', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'resta', a: 30, b: 10 })
      .expect(200)
      .then(response => {
        expect(response.body.resultado).toBe(20);
      });
  });

  it('operacion resta deberia restar numeros negativos', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'resta', a: -10, b: -5 })
      .expect(200)
      .then(response => {
        expect(response.body.resultado).toBe(-5);
      });
  });

  it('operacion resta deberia poder reconocer el cero', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'resta', a: 0, b: 5 })
      .expect(200)
      .then(response => {
        expect(response.body.resultado).toBe(-5);
      });
  });

  //pruebas integracion multiplicacion
  it('operacion multiplicacion deberia multiplicar dos numeros', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'multiplicacion', a: 5, b: 4 })
      .expect(200)
      .then(response => {
        expect(response.body.resultado).toBe(20);
      });
  });

  it('operacion multiplicacion deberia multiplicar por cero', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'multiplicacion', a: 0, b: 5 })
      .expect(200)
      .then(response => {
        expect(response.body.resultado).toBe(0);
      });
  });

  it('operacion multiplicacion deberia manejar numeros con numero negativo', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'multiplicacion', a: -3, b: 2 })
      .expect(200)
      .then(response => {
        expect(response.body.resultado).toBe(-6);
      });
  });

  //pruebas integracion division
  it('operacion division deberia dividir dos numeros', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'division', a: 10, b: 2 })
      .expect(200)
      .then(response => {
        expect(response.body.resultado).toBe(5);
      });
  });

  it('operacion division deberia manejar división por cero', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'division', a: 10, b: 0 })
      .expect(200)
      .then(response => {
        expect(response.body.resultado).toBe('Infinito');
      });
  });

  it('operacion division deberia manejar numeros decimales', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'division', a: 5, b: 2 })
      .expect(200)
      .then(response => {
        expect(response.body.resultado).toBe(2.5);
      });
  });

  //pruebas integracion potencia
  it('operacion integracion deberia calcular potencias', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'potencia', a: 2, b: 3 })
      .expect(200)
      .then(response => {
        expect(response.body.resultado).toBe(8);
      });
  });

  it('operacion integracion deberia calcular potencias con numero negativo', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'potencia', a: 2, b: -1 })
      .expect(200)
      .then(response => {
        expect(response.body.resultado).toBe(0.5);
      });
  });

  it('operacion integracion deberia manejar exponente cero', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'potencia', a: 5, b: 0 })
      .expect(200)
      .then(response => {
        expect(response.body.resultado).toBe(1);
      });
  });

  //pruebas integracion factorial

  it('operacion factorial deberia calcular factorial', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'factorial', a: 5 })
      .expect(200)
      .then(response => {
        expect(response.body.resultado).toBe(120);
      });
  });

  it('operacion factorial deberia retornar 1 para factorial de cero', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'factorial', a: 0 })
      .expect(200)
      .then(response => {
        expect(response.body.resultado).toBe(1);
      });
  });

  it('operacion factorial deberia manejar numero negativo', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'factorial', a: -5 })
      .expect(200)
      .then(response => {
        expect(response.body.resultado).toBe(-1);
      });
  });
});

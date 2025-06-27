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

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'suma', a: 10, b: 30 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(40);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'suma', a: 100, b: 100 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(200);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'suma', a: "a", b: 100 })
      .expect(502);
  });
   // Test para la ruta /operaciones "RESTA"
  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'resta', a: 30, b: 10 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(20);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'resta', a: 100, b: 100 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(0);
      });
  });

  // Test para la ruta /operaciones "RESTA" con error
  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'resta', a: "a", b: 100 })
      .expect(502);
  });

  // Test para la ruta /operaciones "MULTIPLICAR"
  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'multiplicar', a: 10, b: 30 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(300);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'multiplicar', a: 100, b: 100 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(10000);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'multiplicar', a: "a", b: 100 })
      .expect(502);
  });

  // Test para la ruta /operaciones "DIVIDIR"
  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'dividir', a: 30, b: 10 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(3);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'dividir', a: 100, b: 100 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(1);
      });
  });
  // Test para la ruta /operaciones "DIVIDIR" con error
  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'dividir', a: "a", b: 100 })
      .expect(502);
  });

  // Test para la ruta /operaciones "POTENCIA"
  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'potencia', a: 2, b: 3 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(8);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'potencia', a: 5, b: 0 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(1);
      });
  });
  // Test para la ruta /operaciones "POTENCIA" con error
  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'potencia', a: "a", b: 2 })
      .expect(502);
  });

  // Test para la ruta /operaciones "FACTORIAL"
  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'factorial', a: 5 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(120);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'factorial', a: 0 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(1);
      });
  });

  // Test para la ruta /operaciones "FACTORIAL" con error
  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'factorial', a: "a" })
      .expect(502);
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../app.module';

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
        .query({ operacion: 'suma', a: "a", b: 100 })
        .expect(502);
    });
  
    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'suma', a: null, b: 100 })
        .expect(502);
    });
  
    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'suma', a: undefined, b: 100 })
        .expect(502);
    });
  
    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'resta', a: 10, b: 30 })
        .expect(200)
        .expect('Content-type', /application\/json/)
        .then((response) => {
          expect(response.body.resultado).toBe(-20);
        });
    });
  
    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'resta', a: "a", b: 30 })
        .expect(502);
    });
  
    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'resta', a: false, b: 30 })
        .expect(502);
    });
  
    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'resta', a: undefined, b: 30 })
        .expect(502);
    });
  
    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'multiplicacion', a: 10, b: 30 })
        .expect(200)
        .expect('Content-type', /application\/json/)
        .then((response) => {
          expect(response.body.resultado).toBe(300);
        });
    });
  
    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'multiplicacion', a: "a", b: 30 })
        .expect(502);
    });
  
    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'multiplicacion', a: true, b: 30 })
        .expect(502);
    });
  
    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'multiplicacion', a: undefined, b: 30 })
        .expect(502);
    });
  
    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'division', a: 10, b: 2 })
        .expect(200)
        .expect('Content-type', /application\/json/)
        .then((response) => {
          expect(response.body.resultado).toBe(5);
        });
    });
  
    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'division', a: "a", b: 2 })
        .expect(502);
    });
  
    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'division', a: true, b: 2 })
        .expect(502);
    });
  
    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'division', a: undefined, b: 2 })
        .expect(502);
    });
  
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
        .query({ operacion: 'potencia', a: "a", b: 3 })
        .expect(502);
    });
  
    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'potencia', a: true, b: 3 })
        .expect(502);
    });
  
    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'potencia', a: undefined, b: 3 })
        .expect(502);
    });
  
  
    it('/operaciones (GET)', () => {
        return request(app.getHttpServer())
          .get('/operaciones')
          .query({ operacion: 'factorial', a: 5, b: 3 })
          .expect(200)
          .expect('Content-type', /application\/json/)
          .then((response) => {
            expect(response.body.resultado).toBe(120);
          });
      });
    
      it('/operaciones (GET)', () => {
        return request(app.getHttpServer())
          .get('/operaciones')
          .query({ operacion: 'factorial', a: "5", b: 3 })
          .expect(502);
      });
    
      it('/operaciones (GET)', () => {
        return request(app.getHttpServer())
          .get('/operaciones')
          .query({ operacion: 'factorial', a: true, b: 3 })
          .expect(502);
      });
    
      it('/operaciones (GET)', () => {
        return request(app.getHttpServer())
          .get('/operaciones')
          .query({ operacion: 'factorial', a: undefined, b: 3 })
          .expect(502);
      });
});

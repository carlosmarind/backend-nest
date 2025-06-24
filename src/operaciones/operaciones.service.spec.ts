import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesService } from './operaciones.service';

describe('OperacionesService', () => {
  let service: OperacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperacionesService],
    }).compile();

    service = module.get<OperacionesService>(OperacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('operacion deberia sumar', () => {
    let a: any = 10;
    let b: any = 30;

    expect(service.operar('suma', a, b)).toBe(40);

    a = -10;
    b = 50;
    expect(service.operar('suma', a, b)).toBe(40);

    a = -10;
    b = -50;
    expect(service.operar('suma', a, b)).not.toBe(-100);

    a = Math.PI;
    b = 30;
    expect(service.operar('suma', a, b)).toBeCloseTo(33.14, 2);

    a = null;
    b = 50;
    expect(service.operar('suma', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('suma', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('suma', a, b);
    }).toThrow('No se puede llamar con números indefinidos.');
  });

  it('operacion deberia restar', () => {
    let a: any = 50;
    let b: any = 30;

    expect(service.operar('resta', a, b)).toBe(20);

    a = -10;
    b = 50;
    expect(service.operar('resta', a, b)).toBe(-60);

    a = -10;
    b = -50;
    expect(service.operar('resta', a, b)).toBe(40);

    a = Math.PI;
    b = 1;
    expect(service.operar('resta', a, b)).toBeCloseTo(2.14, 2);

    a = null;
    b = 50;
    expect(service.operar('resta', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('resta', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('resta', a, b);
    }).toThrow('No se puede llamar con números indefinidos.');

    a = undefined;
    b = undefined;
    expect(() => {
      service.operar('resta', a, b);
    }).toThrow('No se puede llamar con números indefinidos.');
  });

  it('operacion deberia multiplicar', () => {
    let a: any = 5;
    let b = 4;

    expect(service.operar('multiplicacion', a, b)).toBe(20);

    a = -5;
    b = 4;
    expect(service.operar('multiplicacion', a, b)).toBe(-20);

    a = -5;
    b = -4;
    expect(service.operar('multiplicacion', a, b)).toBe(20);

    a = Math.PI;
    b = 2;
    expect(service.operar('multiplicacion', a, b)).toBeCloseTo(6.28, 2);

    a = null;
    b = 50;
    expect(service.operar('multiplicacion', a, b)).toBeNaN();

    a = '10';
    b = 5;
    expect(service.operar('multiplicacion', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('multiplicacion', a, b);
    }).toThrow('No se puede llamar con números indefinidos.');
  });

  it('operacion deberia dividir', () => {
    let a: any = 10;
    let b = 2;

    expect(service.operar('division', a, b)).toBe(5);

    a = -10;
    b = 2;
    expect(service.operar('division', a, b)).toBe(-5);

    a = 10;
    b = -2;
    expect(service.operar('division', a, b)).toBe(-5);

    a = Math.PI;
    b = 2;
    expect(service.operar('division', a, b)).toBeCloseTo(1.57, 2);

    a = null;
    b = 5;
    expect(service.operar('division', a, b)).toBeNaN();

    a = '10';
    b = 5;
    expect(service.operar('division', a, b)).toBeNaN();

    a = 10;
    b = 0;
    expect(() => {
      service.operar('division', a, b);
    }).toThrow('No se puede dividir por cero.');

    a = undefined;
    b = 5;
    expect(() => {
      service.operar('division', a, b);
    }).toThrow('No se puede llamar con números indefinidos.');
  });

  it('operacion deberia calcular potencia', () => {
    let a: any = 2;
    let b = 3;

    expect(service.operar('potencia', a, b)).toBe(8);

    a = 5;
    b = 0;
    expect(service.operar('potencia', a, b)).toBe(1);

    a = 2;
    b = -2;
    expect(service.operar('potencia', a, b)).toBeCloseTo(0.25, 2);

    a = null;
    b = 3;
    expect(service.operar('potencia', a, b)).toBeNaN();

    a = '2';
    b = 3;
    expect(service.operar('potencia', a, b)).toBeNaN();

    a = undefined;
    b = 3;
    expect(() => {
      service.operar('potencia', a, b);
    }).toThrow('No se puede llamar con números indefinidos.');
  });

  it('operacion deberia calcular factorial', () => {
  let a: any = 6;
  expect(service.operar('factorial', a, NaN)).toBe(720); // 6! = 720

  a = 0;
  expect(service.operar('factorial', a, NaN)).toBe(1); // 0! = 1

  a = 2;
  expect(service.operar('factorial', a, NaN)).toBe(2); // 2! = 2

  a = 4;
  expect(service.operar('factorial', a, NaN)).toBe(24); // 4! = 24

  a = -3;
  expect(() => {
    service.operar('factorial', a, NaN);
  }).toThrow('No existe factorial de números negativos.');

  a = 7.1;
  expect(() => {
    service.operar('factorial', a, NaN);
  }).toThrow('El factorial solo está definido para números enteros.');

  a = null;
  expect(service.operar('factorial', a, NaN)).toBeNaN();

  a = '6';
  expect(service.operar('factorial', a, NaN)).toBeNaN();

  a = undefined;
  expect(() => {
    service.operar('factorial', a, NaN);
  }).toThrow('No se puede llamar con número indefinido.');
});


  it('operacion deberia retornar NaN para operaciones no soportadas', () => {
    const a = 10;
    const b = 20;
    expect(service.operar('modulo', a, b)).toBeNaN();
    expect(service.operar('raiz', a, b)).toBeNaN();
    expect(service.operar('logaritmo', a, b)).toBeNaN();
  });

  });


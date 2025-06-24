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
    let b = 30;

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
    let b = 30;
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
  });

  it('operacion deberia multiplicar', () => {
  let a: any = 5;
  let b = 4;
  expect(service.operar('multiplicacion', a, b)).toBe(20);

  a = -10;
  b = 3;
  expect(service.operar('multiplicacion', a, b)).toBe(-30);

  a = -2;
  b = -8;
  expect(service.operar('multiplicacion', a, b)).toBe(16);

  a = Math.PI;
  b = 2;
  expect(service.operar('multiplicacion', a, b)).toBeCloseTo(6.28, 2);

  a = null;
  b = 5;
  expect(service.operar('multiplicacion', a, b)).toBeNaN();

  a = '10';
  b = 2;
  expect(service.operar('multiplicacion', a, b)).toBeNaN();

  a = undefined;
  b = 4;
  expect(() => {
    service.operar('multiplicacion', a, b);
  }).toThrow('No se puede llamar con números indefinidos.');
});

it('operacion deberia dividir', () => {
  let a: any = 20;
  let b = 4;
  expect(service.operar('division', a, b)).toBe(5);

  a = -30;
  b = 3;
  expect(service.operar('division', a, b)).toBe(-10);

  a = -40;
  b = -5;
  expect(service.operar('division', a, b)).toBe(8);

  a = Math.PI;
  b = 2;
  expect(service.operar('division', a, b)).toBeCloseTo(1.57, 2);

  a = null;
  b = 10;
  expect(service.operar('division', a, b)).toBeNaN();

  a = '100';
  b = 4;
  expect(service.operar('division', a, b)).toBeNaN();

  a = undefined;
  b = 2;
  expect(() => {
    service.operar('division', a, b);
  }).toThrow('No se puede llamar con números indefinidos.');
});

it('operacion deberia calcular potencia', () => {
  let base: any = 3;
  let exponente = 2;

  // Casos válidos
  expect(service.operar('potencia', base, exponente)).toBe(9); // 3^2 = 9

  base = 10;
  exponente = 0;
  expect(service.operar('potencia', base, exponente)).toBe(1); // 10^0 = 1

  base = 9;
  exponente = 0.5;
  expect(service.operar('potencia', base, exponente)).toBe(3); // √9 = 3

  base = 4;
  exponente = -1;
  expect(service.operar('potencia', base, exponente)).toBe(0.25); // 4^-1 = 0.25

  base = Math.PI;
  exponente = 2;
  expect(service.operar('potencia', base, exponente)).toBeCloseTo(9.87, 2); // π² ≈ 9.87

  // Casos con valores no numéricos
  base = null;
  exponente = 3;
  expect(service.operar('potencia', base, exponente)).toBeNaN();

  base = '4';
  exponente = 2;
  expect(service.operar('potencia', base, exponente)).toBeNaN();

  // Caso con undefined
  base = undefined;
  exponente = 3;
  expect(() => {
    service.operar('potencia', base, exponente);
  }).toThrow('No se puede llamar con números indefinidos.');

  // Casos especiales
  base = 0;
  exponente = 0;
  expect(service.operar('potencia', base, exponente)).toBe(1); // 0^0 = 1

  base = 1;
  exponente = Infinity;
  expect(service.operar('potencia', base, exponente)).toBe(1); // 1^∞ = 1
});

it('operacion deberia calcular factorial', () => {
  let a: any = 5;
  expect(service.operar('factorial', a, NaN)).toBe(120); // 5! = 120

  a = 0;
  expect(service.operar('factorial', a, NaN)).toBe(1); // 0! = 1

  a = 1;
  expect(service.operar('factorial', a, NaN)).toBe(1); // 1! = 1

  a = 3;
  expect(service.operar('factorial', a, NaN)).toBe(6); // 3! = 6

  a = -2;
  expect(() => {
    service.operar('factorial', a, NaN);
  }).toThrow('No se puede calcular el factorial de un número negativo.');

  a = 3.5;
  expect(() => {
    service.operar('factorial', a, NaN);
  }).toThrow('El factorial solo está definido para números enteros no negativos.');

  a = null;
  expect(service.operar('factorial', a, NaN)).toBeNaN();

  a = '5';
  expect(service.operar('factorial', a, NaN)).toBeNaN();

  a = undefined;
  expect(() => {
    service.operar('factorial', a, NaN);
  }).toThrow('No se puede llamar con números indefinidos.');
});

  it('operacion deberia retornar NaN para operaciones no soportadas', () => {
    const a = 10;
    const b = 20;
    expect(service.operar('modulo', a, b)).toBeNaN();
    expect(service.operar('raiz', a, b)).toBeNaN();
    expect(service.operar('logaritmo', a, b)).toBeNaN();
  });


});

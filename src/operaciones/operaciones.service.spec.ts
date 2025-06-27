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

  //Test de operacion para sumar
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
    }).toThrow('No se puede llamar con numeros indefinidos');
  });


  // Test para operacion de restar
  it('operacion deberia restar', () => {
    let a: any = 30;
    let b: any = 10;
    expect(service.operar('resta', a, b)).toBe(20);

    a = -10;
    b = 50;
    expect(service.operar('resta', a, b)).toBe(-60);

    a = -10;
    b = -50;
    expect(service.operar('resta', a, b)).not.toBe(-50);

    a = null;
    b = 20;
    expect(service.operar('resta', a, b)).toBeNaN();

    a = '10';
    b = 20;
    expect(service.operar('resta', a, b)).toBeNaN();

    a = undefined;
    b = 1;
    expect(() => {
      service.operar('resta', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos');
  });

  // Test para operacion de dividir
  it('operacion deberia dividir', () => {
    let a: any = 30;
    let b: any = 10;
    expect(service.operar('dividir', a, b)).toBe(3);

    a = 50;
    b = 50;
    expect(service.operar('dividir', a, b)).toBe(1);

    a = -150;
    b = 15;
    expect(service.operar('dividir', a, b)).toBe(-10);

    a = null;
    b = 20;
    expect(service.operar('dividir', a, b)).toBeNaN();

    a = '10';
    b = 20;
    expect(service.operar('dividir', a, b)).toBeNaN();

    a = undefined;
    b = 1;
    expect(() => {
      service.operar('dividir', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos');

    a = 10;
    b = 0;
    expect(() => {
      service.operar('dividir', a, b);
    }).toThrow('No se puede dividir por cero');
  });

    // Test para operacion de multiplicar
  it('operacion deberia multiplicar', () => {
    let a: any = 10;
    let b: any = 10;
    expect(service.operar('multiplicar', a, b)).toBe(100);

    a = 5;
    b = 2;
    expect(service.operar('multiplicar', a, b)).toBe(10);

    a = -10;
    b = 5;
    expect(service.operar('multiplicar', a, b)).toBe(-50);

    a = null;
    b = 10;
    expect(service.operar('multiplicar', a, b)).toBeNaN();

    a = '10';
    b = 10;
    expect(service.operar('multiplicar', a, b)).toBeNaN();

    a = undefined;
    b = 1;
    expect(() => {
      service.operar('multiplicar', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos');
  });

  // Test para operacion de potencia
  it('operacion deberia calcular potencia', () => {
    let a: any = 2;
    let b: any = 3;
    expect(service.operar('potencia', a, b)).toBe(8);

    a = 5;
    b = 0;
    expect(service.operar('potencia', a, b)).toBe(1);

    a = -2;
    b = 3;
    expect(service.operar('potencia', a, b)).toBe(-8);

    a = null;
    b = 2;
    expect(service.operar('potencia', a, b)).toBeNaN();

    a = '2';
    b = 3;
    expect(service.operar('potencia', a, b)).toBeNaN();

    a = undefined;
    b = 1;
    expect(() => {
      service.operar('potencia', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos');
  });

  // Test para operacion de factorial
  it('operacion deberia calcular factorial', () => {
    let a: any = 5;
    expect(service.operar('factorial', a)).toBe(120);

    a = 0;
    expect(service.operar('factorial', a)).toBe(1);

    a = 1;
    expect(service.operar('factorial', a)).toBe(1);

    a = -5;
    expect(service.operar('factorial', a)).toBeNaN();

    a = null;
    expect(service.operar('factorial', a)).toBeNaN();

    a = undefined;
    expect(() => {
      service.operar('factorial', a);
    }).toThrow('No se puede llamar con numeros indefinidos');

    a = '5';
    expect(service.operar('factorial', a)).toBeNaN();
  });
});

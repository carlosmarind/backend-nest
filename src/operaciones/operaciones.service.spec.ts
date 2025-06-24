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
    }).toThrow('No se puede llamar con numeros indefinidos.');

  });

  it('Selector de Operaciones -> /operaciones/operacion', () => {
    
    let a: any = 10;
    let b = 30;
    expect(service.operar('suma', a, b)).toBe(40);

    a = 15;
    b = 50;
    expect(service.operar('resta', a, b)).toBe(-35);

    a = -10;
    b = -50;
    expect(service.operar('multiplicacion', a, b)).toBe(500);

    a = 1200;
    b = 30;
    expect(service.operar('division', a, b)).toBe(40);

    a = 5;
    b = 5;
    expect(service.operar('potencia', a, b)).toBe(3125);

    a = 5;
    expect(service.operar('factorial', a, b)).toBe(120);

    expect(service.operar('', a, b)).toBeNull();

  });

  it('operacion deberia Sumar -> /operaciones/Suma', () => {

    let a: any = 10;
    let b = 30;
    expect(service.suma(a, b)).toBe(40);

    a = -10;
    b = 50;
    expect(service.suma(a, b)).toBe(40);

    a = -10;
    b = -50;
    expect(service.suma(a, b)).not.toBe(-100);

    a = Math.PI;
    b = 30;
    expect(service.suma(a, b)).toBeCloseTo(33.14, 2);

    a = null;
    b = 50;
    expect(service.suma(a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.suma(a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.suma(a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');

  });

  it('Operación deberia Restar -> /operaciones/Resta', () => {

    let a: any = 30;
    let b = 10;
    expect(service.resta(a, b)).toBe(20);

    a = -10;
    b = 50;
    expect(service.resta(a, b)).toBe(-60);

    a = -10;
    b = -50;
    expect(service.resta(a, b)).not.toBe(-100);

    a = Math.PI;
    b = 30;
    expect(service.resta(a, b)).toBeCloseTo(-26.86, 2);

    a = null;
    b = 50;
    expect(service.resta(a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.resta(a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.resta(a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');

  });

  it('Operación deberia Multiplicar -> /operaciones/Multiplicar', () => {

    let a: any = 10;
    let b = 30;
    expect(service.multiplicacion(a, b)).toBe(300);

    a = -10;
    b = 25;
    expect(service.multiplicacion(a, b)).toBe(-250);

    a = -10;
    b = -50;
    expect(service.multiplicacion(a, b)).not.toBe(-100);

    a = Math.PI;
    b = 30;
    expect(service.multiplicacion(a, b)).toBeCloseTo(94.2477);

    a = null;
    b = 50;
    expect(service.multiplicacion(a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.multiplicacion(a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.multiplicacion(a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  it('Operación deberia Dividir -> /operaciones/Dividir', () => {

    let a: any = 30;
    let b = 10;
    expect(service.division(a, b)).toBe(3);

    a = -125;
    b = 5;
    expect(service.division(a, b)).toBe(-25);

    a = -10;
    b = -50;
    expect(service.division(a, b)).not.toBe(-60);

    a = Math.PI;
    b = 30;
    expect(service.division(a, b)).toBeCloseTo(0.10, 2);

    a = null;
    b = 50;
    expect(service.division(a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.division(a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.division(a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  it('Operación deberia calcular la Potencia de un N° -> /operaciones/Potencia', () => {

    let a: any = 10;
    let b = 3;
    expect(service.potencia(a, b)).toBe(1000);

    a = 3;
    b = 5;
    expect(service.potencia(a, b)).toBe(243);

    a = 5;
    b = 8;
    expect(service.potencia(a, b)).not.toBe(-100);

    a = Math.PI;
    b = 2;
    expect(service.potencia(a, b)).toBeCloseTo(9.87, 2);

    a = null;
    b = 50;
    expect(service.potencia(a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.potencia(a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.potencia(a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  it('Operación deberia Factorizar -> /operaciones/Factor', () => {

    let a: any = 10;
    expect(service.factorial(a)).toBe(3628800);

    a = 5;
    expect(service.factorial(a)).not.toBe(25);

    a = Math.PI;
    expect(service.factorial(a)).toBeNaN();

    a = null;
    expect(service.factorial(a)).toBeNaN();

    a = '10';
    expect(service.factorial(a)).toBeNaN();

    a = undefined;
    expect(() => {
      service.factorial(a);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

});

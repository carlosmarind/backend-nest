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
  //pruebas unitarias sumas
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
  //pruebas unitarias restas
  it('operacion deberia restar', () => {
    let a: any;

    expect(service.operar('resta', 30, 10)).toBe(20);

    expect(service.operar('resta', -10, -5)).toBe(-5);

    expect(service.operar('resta', -10, 50)).toBe(-60);

    expect(service.operar('resta', Math.PI, 1)).toBeCloseTo(2.14, 2);

    expect(service.operar('resta', '10' as any, 5)).toBeNaN();
    expect(service.operar('resta', null as any, 5)).toBeNaN();
    a = undefined;
    expect(() => service.operar('resta', a, 5)).toThrow('No se puede llamar con numeros indefinidos.');

  });
  //pruebas unitarias multiplicar
  it('operacion deberia multiplicar', () => {
    let a : any;
    expect(service.operar('multiplicacion', 5, 4)).toBe(20);
    expect(service.operar('multiplicacion', -3, -2)).toBe(6);
    expect(service.operar('multiplicacion', -3, 2)).toBe(-6);
    expect(service.operar('multiplicacion', 2.5, 4)).toBe(10);
    expect(service.operar('multiplicacion', '10' as any, 5)).toBeNaN();
    expect(service.operar('multiplicacion', null as any, 5)).toBeNaN(); 
    a = undefined;
    expect(() => service.operar('multiplicacion', a, 5)).toThrow('No se puede llamar con numeros indefinidos.');

  });
  //pruebas unitarias dividir
  it('operacion deberia dividir', () => {
    let a: any;
    expect(service.operar('division', 10, 2)).toBe(5);
    expect(service.operar('division', -10, -2)).toBe(5);
    expect(service.operar('division', -10, 2)).toBe(-5);
    expect(service.operar('division', 5, 2)).toBe(2.5);
    expect(service.operar('division', '10' as any, 2)).toBeNaN();
    expect(service.operar('division', null as any, 2)).toBeNaN();
    a = undefined;
    expect(() => service.operar('division', a, 2)).toThrow('No se puede llamar con numeros indefinidos.');
    expect(service.operar('division', 10, 0)).toBe(Infinity);

  });
  //pruebas unitarias potenciar
  it('operacion deberia potenciar', () => {
    let a: any;
    expect(service.operar('potencia', 2, 3)).toBe(8);
    expect(service.operar('potencia', 2, -1)).toBe(0.5);
    expect(service.operar('potencia', 0, 5)).toBe(0);
    expect(service.operar('potencia', 5, 0)).toBe(1);
    expect(service.operar('potencia', 4, 0.5)).toBe(2);
    expect(service.operar('potencia', '2' as any, 3)).toBeNaN();
    expect(service.operar('potencia', null as any, 3)).toBeNaN();
    a = undefined;
    expect(() => service.operar('potencia', a, 3)).toThrow('No se puede llamar con numeros indefinidos.');

  });
  //pruebas unistarias factorizar
  it('operacion deberia factorizar', () => {
    let a: any;
    expect(service.operar('factorial', 5)).toBe(120);
    expect(service.operar('factorial', 0)).toBe(1);
    expect(service.operar('factorial', -5)).toBe(-1);
    expect(service.operar('factorial', '5' as any)).toBeNaN();
    expect(service.operar('factorial', null as any)).toBeNaN();
    a = undefined;
    expect(() => service.operar('factorial', a)).toThrow('No se puede llamar con numeros indefinidos.');
    expect(service.operar('operacion_invalida' as any, 1, 2)).toBeUndefined();

  });
});

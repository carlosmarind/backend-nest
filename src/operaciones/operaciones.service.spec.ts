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

  it('operacion deberia restar', () => { 
    let primernumero = 70;
    let segundonumero: any = 20;

    expect(service.operar('resta', primernumero, segundonumero)).toBe(50);

    primernumero = -10;
    segundonumero = -50;
    expect(service.operar('resta', primernumero, segundonumero)).toBe(40);

    primernumero = -10;
    segundonumero = 50;
    expect(service.operar('resta', primernumero, segundonumero)).not.toBe(-100);

    primernumero = Math.PI;
    segundonumero = 60;
    expect(service.operar('resta', primernumero, segundonumero)).toBeCloseTo(-56.86, 2);

    primernumero = 10;
    segundonumero = null;
    expect(service.operar('resta', primernumero, segundonumero)).toBeNaN();

    primernumero = 800;
    segundonumero = true;
    expect(service.operar('resta', primernumero, segundonumero)).toBeNaN();

    primernumero = 5;
    segundonumero = undefined;
    expect(() => {
      service.operar('resta', primernumero, segundonumero);
    }).toThrow('No se puede llamar con números indefinidos.');
  });

  it('operacion debería multiplicar', () => {

    let numero: any = 12;
    let numero2: any = 7

    expect(service.operar('multiplicacion', numero, numero2)).toBe(84);

    numero = -7;
    numero2 = 6;

    expect(service.operar('multiplicacion', numero, numero2)).toBe(-42);

    numero = 7;
    numero2 = -6;

    expect(service.operar('multiplicacion', numero, numero2)).toBe(-42);

    numero = -7;
    numero2 = -6;

    expect(service.operar('multiplicacion', numero, numero2)).toBe(42);

    numero = Math.PI;
    numero2 = 7;

    expect(service.operar('multiplicacion', numero, numero2)).toBeCloseTo(21.99, 2);

    numero = 8;
    numero2 = null;

    expect(service.operar('multiplicacion', numero, numero2)).toBeNaN();

    numero = 5;
    numero2 = [];

    expect(service.operar('multiplicacion', numero, numero2)).toBeNaN();

    numero = undefined;
    numero2 = undefined;

    expect(() => {
      service.operar('multiplicacion', numero, numero2);
    }).toThrow('No se puede llamar con números indefinidos.');
  });

  it('deberia dividir', () => {
    let numero1: any = 81;
    let numero2: any = 9;

    expect(service.operar('division', numero1, numero2)).toBe(9);

    numero1 = -72;
    numero2 = 8;

    expect(service.operar('division', numero1, numero2)).toBe(-9);

    numero1 = 72;
    numero2 = -8;

    expect(service.operar('division', numero1, numero2)).toBe(-9);

    numero1 = -72;
    numero2 = -8;

    expect(service.operar('division', numero1, numero2)).toBe(9);

    numero1 = Math.PI;
    numero2 = 2;

    expect(service.operar('division', numero1, numero2)).toBeCloseTo(1.57, 2);

    numero1 = 8;
    numero2 = null;

    expect(service.operar('division', numero1, numero2)).toBeNaN();

    numero1 = true;
    numero2 = 5;

    expect(service.operar('division', numero1, numero2)).toBeNaN();
    
    numero1 = undefined;
    numero2 = 5;

    expect(() => {
      service.operar('division', numero1, numero2);
    }).toThrow('No se puede llamar con números indefinidos.');

  });

  it('deberia calcular potencias', () => {

    let numero1: any = 4;
    let numero2: any = 3;

    expect(service.operar('potencia', numero1, numero2)).toBe(64);

    numero1 = -2;
    numero2 = 3;

    expect(service.operar('potencia', numero1, numero2)).toBe(-8);

    numero1 = 4;
    numero2 = 2;

    expect(service.operar('potencia', numero1, numero2)).not.toBe(160);

    numero1 = 4;
    numero2 = -3;

    expect(service.operar('potencia', numero1, numero2)).toBeCloseTo(0.015625, 5);

    numero1 = -4;
    numero2 = -3;

    expect(service.operar('potencia', numero1, numero2)).toBeCloseTo(-0.015625, 5);

    numero1 = null;
    numero2 = 3;

    expect(service.operar('potencia', numero1, numero2)).toBeNaN();

    numero1 = 5;
    numero2 = 'prueba';

    expect(service.operar('potencia', numero1, numero2)).toBeNaN();

    numero1 = undefined;
    numero2 = 3;

    expect(() => {
      service.operar('potencia', numero1, numero2);
    }).toThrow('No se puede llamar con números indefinidos.');
  });

  it('calcular factorial', () => {

    let numerofactorial: any = 5;

    expect(service.operar('factorial', numerofactorial, 0)).toBe(120);

    numerofactorial = 0;

    expect(service.operar('factorial', numerofactorial, 0)).toBe(0);

    numerofactorial = 7;

    expect(service.operar('factorial', numerofactorial, 0)).not.toBe(10);

    numerofactorial = 'prueba';

    expect(service.operar('factorial', numerofactorial, 0)).toBeNaN();

    numerofactorial = false;

    expect(service.operar('factorial', numerofactorial, 0)).toBeNaN();

    numerofactorial = null;

    expect(service.operar('factorial', numerofactorial, 0)).toBeNaN();

    numerofactorial = undefined;

    expect(() => {
      service.operar('factorial', numerofactorial, 0);
    }).toThrow('No se puede llamar con números indefinidos.');
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesService } from './operaciones.service';
import { OperacionesController } from './operaciones.controller';

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

  describe('SUMA', () => {
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
    it('debería devolver NaN si los argumentos de suma no son números válidos', () => {
      expect(service.operar('suma', 'abc' as any, 5)).toBeNaN();
    });
  })

  describe('RESTA', () => {
    it('operacion deberia restar', () => {
      let a = 0;
      let b = 0;
      a = 50;
      b = 30;
      expect(service.operar('resta', a, b)).toBe(20);
    });
    it('debería devolver NaN si los argumentos de resta no son números válidos', () => {
      expect(service.operar('resta', 'djdgjd' as any, 5)).toBeNaN();
    });
    it('debería lanzar error si A es undefined en resta', () => {
      expect(() => {
        service.operar('resta', undefined as any, 10);
      }).toThrow('No se puede llamar con numeros indefinidos.');
    });
  })

  describe('MULTIPLICAR', () => {
    it('operacion debe multiplicar', () => {
      let a = 0;
      let b = 0;
      a = 5;
      b = 3;
      expect(service.operar('multiplicar', a, b)).toBe(15);
    });
    it('debería devolver NaN si los argumentos de multiplicar no son números válidos', () => {
      expect(service.operar('multiplicar', 'djdgjd' as any, 5)).toBeNaN();
    });
    it('debería lanzar error si A es undefined en multiplicar', () => {
      expect(() => {
        service.operar('multiplicar', undefined as any, 10);
      }).toThrow('No se puede llamar con numeros indefinidos.');
    });
  })

  describe('DIVIDIR', () => {
    it('operacion debe dividir', () => {
      let a = 0;
      let b = 0;
      a = 15;
      b = 3;
      expect(service.operar('dividir', a, b)).toBe(5);
    });
    it('debería devolver NaN si los argumentos de dividir no son números válidos', () => {
      expect(service.operar('dividir', 'djdgjd' as any, 5)).toBeNaN();
    });
    it('debería lanzar error si A es undefined en dividir', () => {
      expect(() => {
        service.operar('dividir', undefined as any, 10);
      }).toThrow('No se puede llamar con numeros indefinidos.');
    });
  })

  describe('POTENCIAS', () => {
    it('operacion debe elevar un número a otro', () => {
      expect(service.operar('potencia', 5, 3)).toBe(125);
    });
    it('debería devolver NaN si los argumentos de operacion potencia no son números válidos', () => {
      expect(service.operar('potencia', 'djdgjd' as any, 5)).toBeNaN();
    });
    it('debería lanzar error si A es undefined en potencia', () => {
      expect(() => { service.operar('potencia', undefined as any, 10) }).toThrow('No se puede llamar con numeros indefinidos.');
    });
  })

  describe('FACTORIAL', () => {
    it('operacion debe dar el resultado de multiplicar todos los numeros desde el 1 a otro número', () => {
      expect(service.operar('factorial', 5, 0)).toBe(120);
    });
    it('debería devolver NaN si los argumentos de operacion factorial no son números válidos', () => {
      expect(service.operar('factorial', 'djdgjd' as any, 5)).toBeNaN();
    });
    it('operacion factorial debería retornar 1 si A === 0', () => {
      expect(service.operar('factorial', 0, 10)).toBe(1);
    });
  })

  describe('GENERAL', () => {
    it('debería retornar null si no se declara una operacion', () => {
      expect(service.operar('', 10, 10)).toBeNull();
    });
    it('debería retornar null si no se pasa el argumento operacion', () => {
      expect(service.operar(undefined as any, 10, 10)).toBeNull();
    });

  })

  describe('CONTROLADOR', () => {
    it('debe retornar 502 si la operación es inválida', () => {
      const mockService = {
        operar: () => undefined,
      };

      let statusCode = 0;
      let jsonBody = null;

      const mockRes = {
        status: (code: number) => {
          statusCode = code;
          return {
            json: (body: any) => {
              jsonBody = body;
            },
          };
        },
      };

      const controller = new OperacionesController(mockService as any);

      controller.operar(mockRes as any, 'invalida', 10 as any, 20 as any);

      expect(statusCode).toBe(502);
      expect(jsonBody).toEqual({
        resultado: NaN,
        mensaje: 'operacion no pudo ser calculada',
      });
    });

    it('debe retornar 200 y el resultado si la operación es válida', () => {
      const mockService = {
        operar: () => 50,
      };

      let statusCode = 0;
      let jsonBody = null;

      const mockRes = {
        status: (code: number) => {
          statusCode = code;
          return {
            json: (body: any) => {
              jsonBody = body;
            },
          };
        },
      };

      const controller = new OperacionesController(mockService as any);

      controller.operar(mockRes as any, 'suma', 10 as any, 40 as any);

      expect(statusCode).toBe(200);
      expect(jsonBody).toEqual({
        resultado: 50,
        mensaje: 'operacion exitosa',
      });
    });
  });
});

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

  describe('Operaciones aritméticas básicas', () => {
    it('debería sumar correctamente', () => {
      expect(service.operar('suma', 10, 20)).toBe(30);
    });

    it('debería restar correctamente', () => {
      expect(service.operar('resta', 10, 5)).toBe(5);
    });

    it('debería multiplicar correctamente', () => {
      expect(service.operar('multiplicacion', 4, 5)).toBe(20);
    });

    it('debería dividir correctamente', () => {
      expect(service.operar('division', 20, 5)).toBe(4);
    });

    it('debería calcular potencias', () => {
      expect(service.operar('potencia', 2, 3)).toBe(8);
    });

    it('debería calcular factorial correctamente', () => {
      expect(service.operar('factorial', 5)).toBe(120);
    });
  });

  describe('Errores de validación', () => {
    it('debería lanzar error por división por cero', () => {
      expect(() => service.operar('division', 10, 0)).toThrow('No se puede dividir por cero.');
    });

    it('debería lanzar error por factorial negativo', () => {
      expect(() => service.operar('factorial', -3)).toThrow(
        'El factorial solo está definido para enteros no negativos.'
      );
    });

    it('debería lanzar error por factorial no entero', () => {
      expect(() => service.operar('factorial', 4.5)).toThrow(
        'El factorial solo está definido para enteros no negativos.'
      );
    });

    it('debería lanzar error por número indefinido', () => {
      expect(() => service.operar('suma', undefined, 10)).toThrow('El número es requerido.');
    });

    it('debería lanzar error por valor no numérico', () => {
      expect(() => service.operar('suma', '10' as any, 5)).toThrow('El valor debe ser un número válido.');
    });

    it('debería lanzar error por operación no soportada', () => {
      expect(() => service.operar('logaritmo', 10, 2)).toThrow('Operación no soportada');
    });
  });

  describe('Casos con valores especiales', () => {
    it('debería aceptar números negativos en suma', () => {
      expect(service.operar('suma', -10, -5)).toBe(-15);
    });

    it('debería sumar correctamente valores con decimales', () => {
      expect(service.operar('suma', Math.PI, 2)).toBeCloseTo(5.14, 2);
    });
  });
});

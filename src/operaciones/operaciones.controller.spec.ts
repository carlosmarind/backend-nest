import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesController } from './operaciones.controller';
import { OperacionesService } from './operaciones.service';
import { Response } from 'express';

describe('OperacionesController', () => {
  let controller: OperacionesController;

  const mockResponse = () => {
    const res: Partial<Response> = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res as Response;
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperacionesController],
      providers: [OperacionesService],
    }).compile();

    controller = module.get<OperacionesController>(OperacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('/operaciones - operar suma (caso exitoso)', () => {
    const res = mockResponse();
    controller.operar(res, 'suma', 10, 30);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      resultado: 40,
      mensaje: 'operacion exitosa',
    });
  });

  it('/operaciones/Suma - suma (caso exitoso)', () => {
    const res = mockResponse();
    controller.suma(res, 10, 30);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      resultado: 40,
      mensaje: 'Operación Realizada Correctamente.',
    });
  });

  it('/operaciones/Resta - resta (caso exitoso)', () => {
    const res = mockResponse();
    controller.resta(res, 50, 10);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      resultado: 40,
      mensaje: 'Operación Realizada Correctamente.',
    });
  });

  it('/operaciones/Multiplicar - multiplicacion (caso exitoso)', () => {
    const res = mockResponse();
    controller.multiplicacion(res, 5, 8);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      resultado: 40,
      mensaje: 'Operación Realizada Correctamente.',
    });
  });

  it('/operaciones/Dividir - division (caso exitoso)', () => {
    const res = mockResponse();
    controller.division(res, 80, 2);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      resultado: 40,
      mensaje: 'Operación Realizada Correctamente.',
    });
  });

  it('/operaciones/Potencia - potencia (caso exitoso)', () => {
    const res = mockResponse();
    controller.potencia(res, 2, 5);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      resultado: 32,
      mensaje: 'Operación Realizada Correctamente.',
    });
  });

  it('/operaciones/Factor - factorial (caso exitoso)', () => {
    const res = mockResponse();
    controller.factorial(res, 5);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      resultado: 120,
      mensaje: 'Operación Realizada Correctamente.',
    });
  });

});

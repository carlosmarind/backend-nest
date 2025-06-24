import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesController } from './operaciones.controller';
import { OperacionesService } from './operaciones.service';
import { Response } from 'express';

describe('OperacionesController', () => {
  let controller: OperacionesController;
  let operacionesService: OperacionesService;
  let mockResponse: Partial<Response>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperacionesController],
      providers: [
        {
          provide: OperacionesService,
          useValue: {
            operar: jest.fn()
          }
        }
      ]
    }).compile();

    controller = module.get<OperacionesController>(OperacionesController);
    operacionesService = module.get<OperacionesService>(OperacionesService);
    
    // Mock de Response
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /operaciones', () => {
    it('debería retornar 200 con resultado cuando la operación es exitosa', async () => {
      const mockResult = 50;
      jest.spyOn(operacionesService, 'operar').mockReturnValue(mockResult);

      await controller.operar(
        mockResponse as Response,
        'suma',
        10,
        40
      );

      expect(operacionesService.operar).toHaveBeenCalledWith('suma', 10, 40);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({
        resultado: mockResult,
        mensaje: 'operacion exitosa'
      });
    });

    it('debería retornar 502 cuando la operación falla', async () => {
      jest.spyOn(operacionesService, 'operar').mockReturnValue(NaN);

      await controller.operar(
        mockResponse as Response,
        'operacion_invalida',
        10,
        40
      );

      expect(mockResponse.status).toHaveBeenCalledWith(502);
      expect(mockResponse.json).toHaveBeenCalledWith({
        resultado: NaN,
        mensaje: 'operacion no pudo ser calculada'
      });
    });

    it('debería manejar parámetros como strings y convertirlos a números', async () => {
      const mockResult = 30;
      jest.spyOn(operacionesService, 'operar').mockReturnValue(mockResult);

      await controller.operar(
        mockResponse as Response,
        'resta',
        '50' as any, // Simulamos que viene como string desde el query
        '20' as any
      );

      expect(operacionesService.operar).toHaveBeenCalledWith('resta', 50, 20);
    });

    it('debería retornar el mensaje de error del servicio', async () => {
      const errorMessage = 'Error personalizado del servicio';
      jest.spyOn(operacionesService, 'operar').mockImplementation(() => {
        throw new Error(errorMessage);
      });

      await controller.operar(
        mockResponse as Response,
        'division',
        10,
        0
      );
      expect(mockResponse.status).toHaveBeenCalledWith(502);
      expect(mockResponse.json).toHaveBeenCalledWith({
        resultado: NaN,
        mensaje: errorMessage
      });

    });
  });
});

import { Controller, Get, Query, Res } from '@nestjs/common';
import { OperacionesService } from './operaciones.service';
import { Response } from 'express';

@Controller('operaciones')
export class OperacionesController {
  constructor(private readonly operService: OperacionesService) {}

  @Get()
  async operar(
    @Res() res: Response,
    @Query('operacion') operacion: string,
    @Query('a') a: number,
    @Query('b') b: number,
  ) {
    try {
      const calculo = this.operService.operar(operacion, +a, +b);

      if (isNaN(calculo)) {
        return res
          .status(502)
          .json({ resultado: NaN, mensaje: 'operacion no pudo ser calculada' });
      }

      return res
        .status(200)
        .json({ resultado: calculo, mensaje: 'operacion exitosa' });
    } catch (error) {
      return res
        .status(502)
        .json({ resultado: NaN, mensaje: error.message || 'operacion no pudo ser calculada' });
    }
  }
}
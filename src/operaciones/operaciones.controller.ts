import { Controller, Get, Query, Res } from '@nestjs/common';
import { OperacionesService } from './operaciones.service';
import { Response } from 'express';

@Controller('operaciones')
export class OperacionesController {
  constructor(private readonly operService: OperacionesService) {}

  @Get()
  operar(
    @Res() res: Response,
    @Query('operacion') operacion: string,
    @Query('a') a: number,
    @Query('b') b: number,
  ) {
    const calculo = this.operService.operar(operacion, +a, +b);

    if (calculo) {
      return res
        .status(200)
        .json({ resultado: calculo, mensaje: 'operacion exitosa' });
    }

    return res
      .status(502)
      .json({ resultado: NaN, mensaje: 'operacion no pudo ser calculada' });
  }

    @Get('sumar')
  sumar(@Query('a') a: string, @Query('b') b: string) {
    return this.operService.sumar(Number(a), Number(b));
  }

  @Get('restar')
  restar(@Query('a') a: string, @Query('b') b: string) {
    return this.operService.restar(Number(a), Number(b));
  }

  @Get('multiplicar')
  multiplicar(@Query('a') a: string, @Query('b') b: string) {
    return this.operService.multiplicar(Number(a), Number(b));
  }

  @Get('dividir')
  dividir(@Query('a') a: string, @Query('b') b: string) {
    return this.operService.dividir(Number(a), Number(b));
  }

  @Get('potencia')
  potencia(@Query('base') base: string, @Query('exponente') exponente: string) {
    return this.operService.potencia(Number(base), Number(exponente));
  }

  @Get('factorial')
  factorial(@Query('n') n: string) {
    return this.operService.factorial(Number(n));
  }
}

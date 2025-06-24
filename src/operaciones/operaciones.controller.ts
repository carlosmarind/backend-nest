import { Controller, Get, Query, Res } from '@nestjs/common';
import { OperacionesService } from './operaciones.service';
import { Response } from 'express';

@Controller('operaciones')
export class OperacionesController {
  constructor(private readonly operService: OperacionesService) { }

  // localhost:3001/operaciones
  // ?operacion= suma|resta|multiplicacion|division|potencia|factorial 
  // &a= 1 
  // &b= 1
  @Get()
  operar(@Res() res: Response, @Query('operacion') operacion: string, @Query('a') a: number, @Query('b') b: number) {
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


  // localhost:3001/operaciones/Suma?a=1&b=2
  @Get('Suma')
  suma(@Res() res: Response, @Query('a') a: number, @Query('b') b: number) {

    const sumar = this.operService.suma(+a, +b);

    if (sumar !== undefined && sumar !== null && !isNaN(sumar)) {
      return res.status(200).json({
        resultado: sumar,
        mensaje: 'Operación Realizada Correctamente.'
      })

    } else {
      return res.status(502).json({
        resultado: NaN,
        mensaje: 'No se puede realizar esta Operación.'
      })
    }
  }

  // localhost:3001/operaciones/Resta?a=1&b=1
  @Get('Resta')
  resta(@Res() res: Response, @Query('a') a: number, @Query('b') b: number) {

    const rest = this.operService.resta(+a, +b);

    if (rest !== undefined && rest !== null && !isNaN(rest)) {
      return res.status(200).json({
        resultado: rest,
        mensaje: 'Operación Realizada Correctamente.'
      })

    } else {
      return res.status(502).json({
        resultado: NaN,
        mensaje: 'No se puede realizar esta Operación.'
      })
    }
  }

  // localhost:3001/operaciones/Multiplicar?a=1&b=2
  @Get('Multiplicar')
  multiplicacion(@Res() res: Response, @Query('a') a: number, @Query('b') b: number) {

    const prod = this.operService.multiplicacion(+a, +b);

    if (prod !== undefined && prod !== null && !isNaN(prod)) {
      return res.status(200).json({
        resultado: prod,
        mensaje: 'Operación Realizada Correctamente.'
      })

    } else {
      return res.status(502).json({
        resultado: NaN,
        mensaje: 'No se puede realizar esta Operación.'
      })
    }
  }

  // localhost:3001/operaciones/Dividir?a=1&b=2
  @Get('Dividir')
  division(@Res() res: Response, @Query('a') a: number, @Query('b') b: number) {

    const div = this.operService.division(+a, +b);

    if (div !== undefined && div !== null && !isNaN(div)) {
      return res.status(200).json({
        resultado: div,
        mensaje: 'Operación Realizada Correctamente.'
      })

    } else {
      return res.status(502).json({
        resultado: NaN,
        mensaje: 'No se puede realizar esta Operación.'
      })
    }
  }

  // localhost:3001/operaciones/Potencia?a=1&b=2
  @Get('Potencia')
  potencia(@Res() res: Response, @Query('a') a: number, @Query('b') b: number) {

    const pot = this.operService.potencia(+a, +b);

    if (pot !== undefined && pot !== null && !isNaN(pot)) {
      return res.status(200).json({
        resultado: pot,
        mensaje: 'Operación Realizada Correctamente.'
      })

    } else {
      return res.status(502).json({
        resultado: NaN,
        mensaje: 'No se puede realizar esta Operación.'
      })
    }
  }

  // localhost:3001/operaciones/Factor?a=1
  @Get('Factor')
  factorial(@Res() res: Response, @Query('a') a: number) {
    const factor = this.operService.factorial(+a);

    if (factor !== undefined && factor !== null && !isNaN(factor)) {
      return res.status(200).json({
        resultado: factor,
        mensaje: 'Operación Realizada Correctamente.'
      })

    } else {
      return res.status(502).json({
        resultado: NaN,
        mensaje: 'No se puede realizar esta Operación.'
      })
    }
  }


}

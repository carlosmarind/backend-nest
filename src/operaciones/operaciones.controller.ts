import { Controller, Get, Query, Res, BadRequestException } from '@nestjs/common';
import { OperacionesService } from './operaciones.service';
import { Response } from 'express';

@Controller('operaciones')
export class OperacionesController {
  constructor(private readonly operService: OperacionesService) { }

  private validarNumero(param: string, nombre: string): number {
    const valor = Number(param);
    if (param === undefined || param === null || param.trim() === '' || isNaN(valor)) {
      throw new BadRequestException(`El parámetro "${nombre}" es inválido`);
    }
    return valor;
  }


  @Get('suma')
  sumar(@Query('a') a: string, @Query('b') b: string) {
    const numA = this.validarNumero(a, 'a');
    const numB = this.validarNumero(b, 'b');
    return this.operService.sumar(numA, numB);
  }

  @Get('resta')
  restar(@Query('a') a: string, @Query('b') b: string) {
    const numA = this.validarNumero(a, 'a');
    const numB = this.validarNumero(b, 'b');
    return this.operService.restar(numA, numB);
  }

  @Get('multiplicacion')
  multiplicar(@Query('a') a: string, @Query('b') b: string) {
    const numA = this.validarNumero(a, 'a');
    const numB = this.validarNumero(b, 'b');
    return this.operService.multiplicar(numA, numB);
  }

  @Get('division')
  dividir(@Query('a') a: string, @Query('b') b: string) {
    const numA = this.validarNumero(a, 'a');
    const numB = this.validarNumero(b, 'b');
    return this.operService.dividir(numA, numB);
  }

  @Get('potencia')
  potencia(@Query('base') base: string, @Query('exponente') exponente: string) {
    const numBase = this.validarNumero(base, 'base');
    const numExponente = this.validarNumero(exponente, 'exponente');
    return this.operService.potencia(numBase, numExponente);
  }

  @Get('factorial')
  factorial(@Query('n') n: string) {
    const numN = this.validarNumero(n, 'n');
    return this.operService.factorial(numN);
  }
}

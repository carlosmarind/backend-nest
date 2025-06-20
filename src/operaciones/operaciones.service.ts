import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class OperacionesService {

  sumar(a: number, b: number): number {
    return a + b;
  }

  restar(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    if (b === 0) throw new BadRequestException('No se puede dividir por cero');
    return a / b;
  }

  potencia(base: number, exponente: number): number {
    return Math.pow(base, exponente);
  }

  factorial(n: number): number {
    if (n < 0) throw new BadRequestException('El número debe ser >= 0');
    if (!Number.isInteger(n)) throw new BadRequestException('Debe ser entero');
    let resultado = 1;
    for (let i = 2; i <= n; i++) resultado *= i;
    return resultado;
  }
}

import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class OperacionesService {
  operar(operacion: string = '', a: number, b: number) {
    switch (operacion) {
      case 'suma':
        return this.sumar(a, b);
      case 'resta':
        return this.restar(a, b);
      case 'multiplicar':
        return this.multiplicar(a, b);
      case 'dividir':
        return this.dividir(a, b);
      case 'potencia':
        return this.potencia(a, b);
      default:
        throw new BadRequestException(`Operación '${operacion}' no soportada`);
    }
  }

  private validarNumeros(...nums: any[]) {
    for (const num of nums) {
      if (num === undefined || num === null) {
        throw new BadRequestException('Parámetros indefinidos o nulos no permitidos');
      }
      if (typeof num !== 'number' || isNaN(num)) {
        throw new BadRequestException('Parámetros deben ser números válidos');
      }
    }
  }

  sumar(a: number, b: number): number {
    this.validarNumeros(a, b);
    return a + b;
  }

  restar(a: number, b: number): number {
    this.validarNumeros(a, b);
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    this.validarNumeros(a, b);
    return a * b;
  }

  dividir(a: number, b: number): number {
    this.validarNumeros(a, b);
    if (b === 0) {
      throw new BadRequestException('No se puede dividir por cero');
    }
    return a / b;
  }

  potencia(base: number, exponente: number): number {
    this.validarNumeros(base, exponente);
    return Math.pow(base, exponente);
  }

  factorial(n: number): number {
    if (n === undefined || n === null) {
      throw new BadRequestException('Parámetro indefinido o nulo');
    }
    if (!Number.isInteger(n) || n < 0) {
      throw new BadRequestException('El número debe ser un entero no negativo');
    }

    if (n === 0 || n === 1) return 1;

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
}

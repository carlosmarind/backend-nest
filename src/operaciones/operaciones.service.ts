import { Injectable } from '@nestjs/common';

@Injectable()
export class OperacionesService {
  operar(operacion: string = '', a: number, b: number) {
    switch (operacion) {
      case 'suma':
        return this.#suma(a, b);

      case 'resta':
        return this.#resta(a, b);

      case 'multiplicar':
        return this.#multiplicar(a, b);

      case 'dividir':
        return this.#dividir(a, b);

      case 'potencia':
        return this.#potencia(a, b);

      case 'factorial':
        return this.#factorial(a);

      default:
        return null;
    }
  }

  #suma(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a + b;
  }

  #resta(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a - b;
  }

  #multiplicar(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a * b;
  }

  #dividir(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a / b;
  }

  #potencia(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return Math.pow(a, b)
  }

  #factorial(a: number) {
    if (a < 0 || !Number.isInteger(a)) {
      return NaN;
    }

    if (a === 0 || a === 1) return 1

    let resultado = 1
    for (let i = 2; i <= a; i++) {
      resultado *= i
    }
    return resultado
  }

}

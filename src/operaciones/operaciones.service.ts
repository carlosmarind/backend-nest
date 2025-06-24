import { Injectable } from '@nestjs/common';

@Injectable()
export class OperacionesService {

  operar(operacion: string = '', a: number, b: number) {
    switch (operacion) {
      case 'suma':
        return this.suma(a, b);

      case 'resta':
        return this.resta(a, b);

      case 'multiplicacion':
        return this.multiplicacion(a, b);

      case 'division':
        return this.division(a, b);

      case 'potencia':
        return this.potencia(a, b);

      case 'factorial':
        return this.factorial(a);

      default:
        return null;
    }

  }

  suma(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a + b;
  }

  resta(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }

    return a - b;
  }

  multiplicacion(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a * b;
  }

  division(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a / b;
  }

  potencia(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a ** b;
  }


  factorial(a: number) {
    if (a === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (a < 1 || typeof a !== 'number') return NaN;
    
    if (a === 1) {
      return 1;
    }

    return a * this.factorial(a - 1);
  }


}


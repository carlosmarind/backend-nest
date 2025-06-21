import { Injectable } from '@nestjs/common';

@Injectable()
export class OperacionesService {
  operar(operacion: string = '', a?: number, b?: number) {
    this.#validarOperacion(operacion, a, b);
    return this.#ejecutarOperacion(operacion, a!, b!);
  }

  #ejecutarOperacion(operacion: string, a: number, b: number) {
    switch (operacion) {
      case 'suma':
        return this.#suma(a, b);
      case 'resta':
        return this.#resta(a, b);
      case 'multiplicacion':
        return this.#multiplicacion(a, b);
      case 'division':
        return this.#division(a, b);
      case 'potencia':
        return this.#potencia(a, b);
      case 'factorial':
        return this.#factorial(a);
    }
  }

  #validarOperacion(operacion: string, a?: number, b?: number) {
    switch (operacion) {
      case 'suma':
      case 'resta':
      case 'multiplicacion':
      case 'potencia':
        this.#validarNumeros(a, b);
        break;

      case 'division':
        this.#validarNumeros(a, b);
        if (b === 0) 
          throw new Error('No se puede dividir por cero.');
        break;

      case 'factorial':
        this.#validarNumeros(a);
        if (a! < 0 || !Number.isInteger(a)) {
          throw new Error('El factorial solo está definido para enteros no negativos.');
        }
        break;

      default:
        throw new Error('Operación no soportada');
    }
  }

  // OPERACIONES
  #suma(a: number, b: number) {
    return a + b;
  }

  #resta(a: number, b: number) {
    return a - b;
  }

  #multiplicacion(a: number, b: number) {
    return a * b;
  }

  #division(a: number, b: number) {
    return a / b;
  }

  #potencia(a: number, b: number) {
    return Math.pow(a, b);
  }

  #factorial(n: number) {
    return this.#calcularFactorial(n);
  }

  #calcularFactorial(n: number): number {
    if(n <= 1){
      return 1;
    }else{
      return n * this.#calcularFactorial(n - 1);
    }
  }

  #validarNumeros(...nums: (number | undefined)[]) {
    nums.forEach((num) => {
      if (num === undefined || num === null) {
        throw new Error('El número es requerido.');
      }
      if (typeof num !== 'number' || isNaN(num)) {
        throw new Error('El valor debe ser un número válido.');
      }
    });
  }
}
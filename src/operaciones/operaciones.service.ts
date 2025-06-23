import { Injectable } from '@nestjs/common';

@Injectable()
export class OperacionesService {
  operar(operacion: string = '', a: number, b?: number) {
    if (operacion === 'suma') {
      return this.#suma(a, b!);
    } else if (operacion === 'resta') {
      return this.#resta(a, b!);
    }else if (operacion === 'multiplicacion'){
      return this.#multiplicacion(a, b!);
    }
    else if (operacion === 'division'){
      return  this.#division(a, b!);
    }
    else if (operacion === 'potencia'){
      return  this.#potencia(a, b!);
    }else if (operacion === 'factorial'){
      return  this.#factorial(a);
    }
  }

  //operacion sumar
  #suma(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a + b;
  }
  //operacion resta
  #resta(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a - b;
  }
  //opeacion multiplicar
  #multiplicacion(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }

    if (a === 0 || b === 0){
      return a * b;
    }
    return a * b;
  }
  //operacion division
  #division(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }

    if (a === 0 ||  b === 0){
      return 'Infinito';
    }
    else{
    return a / b;
    }

  }
  //operacion potencia
  #potencia(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return Math.pow(a,b);
  }
  //operacion factorizar
  #factorial(a: number) {
    if (a === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' ) {
      return NaN;
    }

     if (a < 0) {
        return -1;
      }
      let resultado = 1;
      for (let i = 2; i <= a; i++) {
        resultado *= i;
      }
      return resultado;

  }

}

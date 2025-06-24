import { Injectable } from '@nestjs/common';

@Injectable()
export class OperacionesService {
  operar(operacion: string = '', a: number, b: number) {
    if (operacion === 'suma') {
      return this.#suma(a, b);
    }
    if(operacion === 'resta'){
      return this.#resta(a, b);
    }
    if(operacion === 'multiplicacion'){
      return this.#multiplicacion(a, b);
    }
    if(operacion === 'division'){
      return this.#division(a, b);
    }
    if(operacion === 'potencia'){
      return this.#potencia(a, b);
    }
    if(operacion === 'factorial'){
      return this.#factorial(a);
    }
    else{
      throw new Error('operacion no pudo ser calculada');
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

  #resta(a: number, b:number){
    if(a === undefined || b === undefined){
      throw new Error('No se puede llamar con números indefinidos.');
    }

    if(typeof a !== 'number' || typeof b !== 'number'){
      return NaN;
    }
    return a - b;
  }

  #multiplicacion(a: number, b:number){
    if(a === undefined || b === undefined){
      throw new Error('No se puede llamar con números indefinidos.');
    }

    if(typeof a !== 'number' || typeof b !== 'number'){
      return NaN;
    }
    return a * b;
  }

  #division(a: number, b:number){
    if(a === undefined || b === undefined){
      throw new Error('No se puede llamar con números indefinidos.');
    }

    if(typeof a !== 'number' || typeof b !== 'number'){
      return NaN;
    }

    return a / b;
  }

  #potencia(base: number, exponente: number){
    if(base === undefined || exponente === undefined){
      throw new Error('No se puede llamar con números indefinidos.');
    }

    if(typeof base !== 'number' || typeof exponente !== 'number'){
      return NaN;
    }
    return Math.pow(base, exponente);
  }

  #factorial(numero: number){
    if(numero === undefined)
    {
      throw new Error('No se puede llamar con números indefinidos.');
    }

    if(typeof numero !== 'number'){
      return NaN;
    }

    if(numero === 0)
      return 0;

    let resultado = 1;

    for(let i = 2; i <= numero; i++){
      resultado *= i;
    }

    return resultado;
  }
}

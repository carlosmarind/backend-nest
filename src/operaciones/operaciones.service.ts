import { Injectable } from '@nestjs/common';

@Injectable()
export class OperacionesService {
  operar(operacion: string = '', a: number, b: number) {
    if (operacion === 'suma') {
      return this.#suma(a, b);
    } else if (operacion === 'resta') {
      return this.#resta(a, b);
    } else if (operacion === 'multiplicacion') {
      return this.#multiplicacion(a, b);
    } else if (operacion === 'division') {
      return this.#division(a, b);
    } else if (operacion === 'potencia') {
      return this.#potencia(a, b);
    } else if (operacion === 'factorial') {
      return this.#factorial(a);
    }else{
      return NaN
    }
  }

  #suma(a: number, b: number) {
    const validacion = this.#validarNumeros(a, b);
    if (validacion !== undefined) return validacion;
    return a + b;
  }

  #resta(a: number, b: number) {
    const validacion = this.#validarNumeros(a, b);
    if (validacion !== undefined) return validacion;
    return a - b;
  }

  #multiplicacion(a: number, b: number) {
    const validacion = this.#validarNumeros(a, b);
    if (validacion !== undefined) return validacion;
    return a * b;
  }

  #division(a: number, b: number) {
    const validacion = this.#validarNumeros(a, b);
    if (validacion !== undefined) return validacion;
    
    if (b === 0) {
      throw new Error('No se puede dividir por cero.');
    }
    return a / b;
  }

 #potencia(base: number, exponente: number) {
    // Caso especial: 1^Infinity = 1
    if (base === 1 && exponente === Infinity) {
      return 1;
    }
    
    const validacion = this.#validarNumeros(base, exponente);
    if (validacion !== undefined) return validacion;
    return Math.pow(base, exponente);
  }

  #factorial(n: number) {
    if (n === undefined) {
      throw new Error('No se puede llamar con números indefinidos.');
    }
    
    if (n === null || typeof n !== 'number') {
      return NaN;
    }
    
    if (n < 0) {
      throw new Error('No se puede calcular el factorial de un número negativo.');
    }
    
    if (!Number.isInteger(n)) {
      throw new Error('El factorial solo está definido para números enteros no negativos.');
    }
    
    if (n === 0 || n === 1) {
      return 1;
    }
    
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }

  #validarNumeros(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con números indefinidos.'); 
    }

    if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return undefined;
  }

  
}
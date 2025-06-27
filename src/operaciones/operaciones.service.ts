import { Injectable } from '@nestjs/common';

@Injectable()
export class OperacionesService {
    operar(operacion: string = '', a: number, b?: number){
            switch (operacion.toLowerCase()) {
        case 'suma':
            return this.#suma(a, b!);
        case 'resta':
            return this.#resta(a, b!);
        case 'multiplicar':
            return this.#multiplicar(a, b!);
        case 'dividir':
            return this.#dividir(a, b!);
        case 'potencia':
            return this.#potencia(a, b!);
        case 'factorial':
            return this.#factorial(a);
        default:
            throw new Error(`Operación "${operacion}" no reconocida`);
            }
    }

    #suma(a: number, b: number){
        if (a === undefined || b === undefined) {
            throw new Error('No se puede llamar con numeros indefinidos');
        }
        if (typeof a !== 'number' || typeof b !== 'number') {
            return NaN;
        }
        return a + b;
    }

    #resta(a: number, b: number){
        if (a === undefined || b === undefined) {
            throw new Error('No se puede llamar con numeros indefinidos');
        }
        if (typeof a !== 'number' || typeof b !== 'number') {
            return NaN;
        }
        return a - b;
    }

    #dividir(a: number, b: number){
        if (a === undefined || b === undefined) {
            throw new Error('No se puede llamar con numeros indefinidos');
        }
        if (typeof a !== 'number' || typeof b !== 'number') {
            return NaN;
        }
        if (b === 0) {
            throw new Error('No se puede dividir por cero');
        }
        return a / b;
    }

    #multiplicar(a: number, b: number){
        if (a === undefined || b === undefined) {
            throw new Error('No se puede llamar con numeros indefinidos');
        }
        if (typeof a !== 'number' || typeof b !== 'number') {
            return NaN;
        }
        return a * b;
    }   

    #potencia(a: number, b: number){
        if (a === undefined || b === undefined) {
            throw new Error('No se puede llamar con numeros indefinidos');
        }
        if (typeof a !== 'number' || typeof b !== 'number') {
            return NaN;
        }
        return Math.pow(a, b);
    }

    #factorial(a: number){
        if (a === undefined) {
            throw new Error('No se puede llamar con numeros indefinidos');
        }
        if (typeof a !== 'number' || a < 0) {
            return NaN;
        }
        if (a === 0 || a === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= a; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

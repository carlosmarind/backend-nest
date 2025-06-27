import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!';
  }

  getHelloAleman(): string {
    return 'Hallo Welt';
  }

  getHelloFrances(): string {
    return 'mi mensaje de pruebas';
  }

  getHelloEspanol(): string {
    return 'Hola Mundo!!';
  }

    getSimba(): string {
    return 'Hakuna Matata, una forma de ser';
  }

  getStich(): string {
    return 'Ohana significa familia, y la familia nunca te abandona';
  }

  getStarWars(): string {
    return 'Que la fuerza te acompañe';
  }
}

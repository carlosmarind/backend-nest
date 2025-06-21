import { Test, TestingModule } from '@nestjs/testing';
import { DbManagerService } from './db-manager.service';

describe('DbManagerService', () => {
  let service: DbManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbManagerService],
    }).compile();

    service = module.get<DbManagerService>(DbManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('debería retornar un usuario con el ID correcto', () => {
    const result = service.getUser(5);
    expect(result).toEqual({ id: 5, nombre: 'Josefa' });
  });

  it('debería retornar un usuario con tipo correcto', () => {
    const result = service.getUser(42);
    expect(typeof result).toBe('object');
    expect(typeof result.id).toBe('number');
    expect(typeof result.nombre).toBe('string');
    expect(result.nombre).toBe('Josefa');
  });
});

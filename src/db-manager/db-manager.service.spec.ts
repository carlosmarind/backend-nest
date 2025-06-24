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

  it('getUser debe retornar un usuario con nombre y id', () => {
    const id = 123;
    const result = service.getUser(id);
    expect(result).toEqual({ id, nombre: 'Josefa' });
  });
});

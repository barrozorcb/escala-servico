import CreateUserService from './CreateUserService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeCacheProvider from "@shared/container/providers/CacheProvider/fakes/FakeCaheProvider";
import AppError from "@shared/errors/AppError";

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let fakeCacheProvider: FakeCacheProvider;
let createUserService: CreateUserService;

describe('CreateUser', () => {

  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    fakeCacheProvider = new FakeCacheProvider();
    createUserService = new CreateUserService(fakeUsersRepository, fakeHashProvider, fakeCacheProvider);
  });

  it('should be able to create a new user', async () => {
    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123123'
    });

    expect(user).toHaveProperty('id');
  });
  it('should not be able to create a new user with an existing email', async () => {
    await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123123'
    });

    await expect(createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123123'
    })).rejects.toBeInstanceOf(AppError);
  });

});

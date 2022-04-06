import CreatePostoServicoService from './CreatePostoServicoService';
import FakePostoServicoRepository from '@modules/escala/repositories/fakes/FakePostoServicoRepository';
// import AppError from "@shared/errors/AppError";

let createPostoServicoService: CreatePostoServicoService;
let fakePostoServicoRepository: FakePostoServicoRepository;

describe('CreateUser', () => {

  beforeEach(() => {
    fakePostoServicoRepository = new FakePostoServicoRepository();
    createPostoServicoService = new CreatePostoServicoService(fakePostoServicoRepository);
  });

  it('should be able to create a new PostoServico', async () => {
    const postoServico = await createPostoServicoService.execute({
      nmPostoServico: 'Sentinela Posto 1',
      qtdPessoaDia: 3,
      stAtivo: true,
      idPeriodoServico: 1
    });

    expect(postoServico).toHaveProperty('id');
  });
  // it('should not be able to create a new PostoServico with a empty nmPostoServico', async () => {
  //   await expect(createPostoServicoService.execute({
  //     nmPostoServico: '',
  //     qtdPessoaDia: 3,
  //     stAtivo: true
  //   })).rejects.toBeInstanceOf(AppError);
  // });

});

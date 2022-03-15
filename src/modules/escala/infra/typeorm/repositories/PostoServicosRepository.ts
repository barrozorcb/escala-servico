import { getRepository, Not, Repository } from 'typeorm';

import Escala from '../entities/Escalas';
import IPostoServicosRepository from '@modules/escala/repositories/IPostoServicosRepository';
import ICreateEscalaDTO from '@modules/escala/dtos/ICreateEscalaDTO';
import PostoServico from '../entities/PostoServico';
import ICreatePostoServicoDTO from '@modules/escala/dtos/ICreatePostoServicoDTO';

class PostoServicosRepository implements IPostoServicosRepository {

  private ormRepository: Repository<PostoServico>;

  constructor() {
    this.ormRepository = getRepository(PostoServico);
  }
  findById (id: number): Promise<PostoServico> {
    throw new Error('Method not implemented.');
  }
  public async create (postoServicoData: ICreatePostoServicoDTO): Promise<PostoServico> {
    const postoServico = this.ormRepository.create(postoServicoData);

    await this.ormRepository.save(postoServico);

    return postoServico;
  }
  // public async findByEmail(email: string): Promise<User | undefined> {

  //   const user = await this.ormRepository.findOne({ where: { email } });

  //   return user;

  // }
  // public async findById(id: string): Promise<User | undefined> {

  //   const user = await this.ormRepository.findOne(id);

  //   return user;
  // }

  // public async findAllProviders({ except_user_id }: IFindAllProvidersDTO): Promise<User[]> {
  //   let users: User[];

  //   if (except_user_id) {
  //     users = await this.ormRepository.find({
  //       where: {
  //         id: Not(except_user_id)
  //       }
  //     });
  //   } else {
  //     users = await this.ormRepository.find();
  //   }

  //   return users;

  // }

  // public async save(user: User): Promise<User> {
  //   return this.ormRepository.save(user);

  // }
}
export default PostoServicosRepository;

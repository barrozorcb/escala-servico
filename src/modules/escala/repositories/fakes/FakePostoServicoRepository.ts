import IPostoServicosRepository from "../IPostoServicosRepository";
import PostoServico from "@modules/escala/infra/typeorm/entities/PostoServico";
import ICreatePostoServicoDTO from "@modules/escala/dtos/ICreatePostoServicoDTO";

class PostoServicoRepository implements IPostoServicosRepository {

  private postoServico: PostoServico[] = [];

  public async create (postoServicoData: ICreatePostoServicoDTO): Promise<PostoServico> {

    const postoServico = new PostoServico();

    Object.assign(postoServico, { id: Math.floor(Math.random() * 10) }, postoServicoData);

    this.postoServico.push(postoServico);

    return postoServico;
  }
  // public async findByEmail(email: string): Promise<User | undefined> {

  //   const findUser = this.users.find(user => user.email === email);

  //   return findUser;

  // }
  // public async findById(id: string): Promise<User | undefined> {

  //   const findUser = this.users.find(user => user.id === id);

  //   return findUser;
  // }
  // public async save(user: User): Promise<User> {

  //   const findUserIndex = this.users.findIndex(findUser => findUser.id === user.id);

  //   this.users[findUserIndex] = user;

  //   return user;

  // }

  // public async findAllProviders({ except_user_id }: IFindAllProvidersDTO): Promise<User[]> {
  //   let users = this.users;

  //   if (except_user_id) {
  //     users = this.users.filter(user => user.id !== except_user_id);
  //   }

  //   return users;
  // }
}
export default PostoServicoRepository;

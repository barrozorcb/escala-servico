import PostoServico from "../infra/typeorm/entities/PostoServico";
import ICreatePostoServicoDTO from "../dtos/ICreatePostoServicoDTO";

export default interface IPostoServicosRepository {
  findById (id: number): Promise<PostoServico>;
  create (data: ICreatePostoServicoDTO): Promise<PostoServico>;
}

export default interface ICreatePostoServicoDTO {
  idPostoServico?: number;
  nmPostoServico: string;
  qtdPessoaDia: number;
  stAtivo: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

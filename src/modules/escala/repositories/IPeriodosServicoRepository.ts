import PeriodoServico from "../infra/typeorm/entities/PeriodoServico";

export default interface IPeriodosServicoRepository {
  findAll (): Promise<PeriodoServico[]>;
}

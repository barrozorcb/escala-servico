import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTMilitarServico1652981534941 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
            new Table({
                name: 'T_MILITAR_SERVICO',
                columns: [
                    {
                        name: 'id_militar_servico',
                        type: 'int',
                        isPrimary: true,
                        isUnique: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'nr_ordem',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'st_ativo',
                        type: 'boolean',
                        isNullable: false,
                        default: true
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('T_MILITAR_SERVICO');
    }

}

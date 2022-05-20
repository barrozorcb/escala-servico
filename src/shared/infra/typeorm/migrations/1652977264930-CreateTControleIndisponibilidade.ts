import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTControleIndisponibilidade1652977264930 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.createTable(
            new Table({
                name: 'T_CONTROLE_INDISPONIBILIDADE',
                columns: [
                    {
                        name: 'id_controle_indisponibilidade',
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
                        name: 'dt_inicio',
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'dt_fim',
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'mtv_indisponibilidade',
                        type: 'varchar',
                        isNullable: false
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('T_CONTROLE_INDISPONIBILIDADE');
    }

}

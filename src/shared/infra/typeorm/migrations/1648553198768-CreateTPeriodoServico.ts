import { MigrationInterface, QueryRunner, Table, QueryBuilder } from "typeorm";

export class CreateTPeriodoServico1648553198768 implements MigrationInterface {

    public async up (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'T_PERIODO_SERVICO',
                columns: [
                    {
                        name: 'id_periodo_servico',
                        type: 'int',
                        isPrimary: true,
                        isUnique: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'tp_periodo_servico',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        );

        await queryRunner.manager.query(`INSERT INTO "T_PERIODO_SERVICO"(tp_periodo_servico) VALUES ('6H')`);
        await queryRunner.manager.query(`INSERT INTO "T_PERIODO_SERVICO"(tp_periodo_servico) VALUES ('8H')`);
        await queryRunner.manager.query(`INSERT INTO "T_PERIODO_SERVICO"(tp_periodo_servico) VALUES ('12H')`);
        await queryRunner.manager.query(`INSERT INTO "T_PERIODO_SERVICO"(tp_periodo_servico) VALUES ('24H')`);
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.manager.query(`DELETE "T_PERIODO_SERVICO" WHERE tp_periodo_servico = '6'`);
        await queryRunner.dropTable('T_PERIODO_SERVICO');
    }

}

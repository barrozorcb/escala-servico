import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTTipoEscala1648741334727 implements MigrationInterface {

    public async up (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'T_TIPO_ESCALA',
                columns: [
                    {
                        name: 'id_tipo_escala',
                        type: 'int',
                        isPrimary: true,
                        isUnique: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'tp_escala',
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

        await queryRunner.manager.query(`INSERT INTO "T_TIPO_ESCALA"(tp_escala) VALUES ('PRETA')`);
        await queryRunner.manager.query(`INSERT INTO "T_TIPO_ESCALA"(tp_escala) VALUES ('VERMELHA')`);
        await queryRunner.manager.query(`INSERT INTO "T_TIPO_ESCALA"(tp_escala) VALUES ('ROXA')`);
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.manager.query(`DELETE "T_PERIODO_SERVICO" WHERE tp_periodo_servico = '6'`);
        await queryRunner.dropTable('T_TIPO_ESCALA');
    }

}

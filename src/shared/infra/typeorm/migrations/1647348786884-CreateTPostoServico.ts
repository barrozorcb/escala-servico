import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTPostoServico1647348786884 implements MigrationInterface {

    public async up (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'T_POSTO_SERVICO',
                columns: [
                    {
                        name: 'id_posto_servico',
                        type: 'int',
                        isPrimary: true,
                        isUnique: true,
                        generationStrategy: 'increment',
                        default: 0
                    },
                    {
                        name: 'nm_posto_servico',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'qtd_pessoa_dia',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'st_ativo',
                        type: 'boolean',
                        isNullable: false,
                        default: true
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
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('T_POSTO_SERVICO');
    }

}

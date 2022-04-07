import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTControleServico1649346994177 implements MigrationInterface {

    public async up (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'T_CONTROLE_SERVICO',
                columns: [
                    {
                        name: 'id_controle_servico',
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
                        name: 'dt_servico',
                        type: 'date',
                        isNullable: false
                    }
                ]
            })
        );
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('T_CONTROLE_SERVICO');
    }

}

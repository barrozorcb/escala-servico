import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTServicoOM1652979981920 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
            new Table({
                name: 'T_SERVICO_OM',
                columns: [
                    {
                        name: 'id_servico_om',
                        type: 'int',
                        isPrimary: true,
                        isUnique: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'cd_org',
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
      await queryRunner.dropTable('T_SERVICO_OM');
    }

}

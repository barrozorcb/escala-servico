import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddIdPeriodoServicoToTPostoServico1648742611171 implements MigrationInterface {

    public async up (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('T_POSTO_SERVICO', new TableColumn({
            name: 'id_periodo_servico',
            type: 'int',
            isNullable: true
        }));

        await queryRunner.createForeignKey('T_POSTO_SERVICO', new TableForeignKey({
            name: 'IdPeriodoServico',
            columnNames: ['id_periodo_servico'],
            referencedColumnNames: ['id_periodo_servico'],
            referencedTableName: 'T_PERIODO_SERVICO',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('T_POSTO_SERVICO', 'IdPeriodoServico');

        await queryRunner.dropColumn('T_POSTO_SERVICO', 'id_periodo_servico');

    }

}

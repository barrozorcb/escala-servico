import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddIdPostoServicoToTControleServico1649347493912 implements MigrationInterface {

    public async up (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('T_CONTROLE_SERVICO', new TableColumn({
            name: 'id_posto_servico',
            type: 'int',
            isNullable: true
        }));

        await queryRunner.createForeignKey('T_CONTROLE_SERVICO', new TableForeignKey({
            name: 'IdPostoServico',
            columnNames: ['id_posto_servico'],
            referencedColumnNames: ['id_posto_servico'],
            referencedTableName: 'T_POSTO_SERVICO',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('T_CONTROLE_SERVICO', 'IdPostoServico');

        await queryRunner.dropColumn('T_CONTROLE_SERVICO', 'id_posto_servico');

    }

}

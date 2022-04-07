import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddIdTipoEscalaToTControleServico1649347860406 implements MigrationInterface {

    public async up (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('T_CONTROLE_SERVICO', new TableColumn({
            name: 'id_tipo_escala',
            type: 'int',
            isNullable: true
        }));

        await queryRunner.createForeignKey('T_CONTROLE_SERVICO', new TableForeignKey({
            name: 'IdTipoEscala',
            columnNames: ['id_tipo_escala'],
            referencedColumnNames: ['id_tipo_escala'],
            referencedTableName: 'T_TIPO_ESCALA',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('T_CONTROLE_SERVICO', 'IdTipoEscala');

        await queryRunner.dropColumn('T_CONTROLE_SERVICO', 'id_tipo_escala');

    }

}

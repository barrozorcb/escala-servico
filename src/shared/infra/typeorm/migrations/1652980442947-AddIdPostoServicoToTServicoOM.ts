import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddIdPostoServicoToTServicoOM1652980442947 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('T_SERVICO_OM', new TableColumn({
            name: 'id_posto_servico',
            type: 'int',
            isNullable: true
        }));

      await queryRunner.createForeignKey('T_SERVICO_OM', new TableForeignKey({
          name: 'IdPostoServico',
          columnNames: ['id_posto_servico'],
          referencedColumnNames: ['id_posto_servico'],
          referencedTableName: 'T_POSTO_SERVICO',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('T_SERVICO_OM', 'IdPostoServico');

      await queryRunner.dropColumn('T_SERVICO_OM', 'id_posto_servico');
    }

}

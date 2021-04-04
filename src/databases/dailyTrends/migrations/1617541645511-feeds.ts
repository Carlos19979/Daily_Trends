/* eslint-disable max-lines-per-function */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Feeds1617541645511 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'feeds',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true
        },
        {
          name: 'tittle',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'description',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'image',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'source',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'newspaper',
          type: 'varchar',
          isNullable: true
        }
      ]
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('feeds', true);
  }

}

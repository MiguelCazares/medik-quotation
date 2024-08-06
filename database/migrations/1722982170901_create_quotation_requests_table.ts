import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'quotation_requests';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id');

      table.bigInteger('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.double('total').notNullable();
      table.string('status').notNullable();
      table.string('reference').notNullable().unique();
      table.timestamp('last_update').notNullable();
      table.bigInteger('auhorizes_id').unsigned();
      table.string('type_quotation').notNullable();

      table.timestamp('created_at');
      table.timestamp('updated_at');
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}

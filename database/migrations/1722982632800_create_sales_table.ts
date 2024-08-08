import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'sales';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.bigInteger('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table
        .bigInteger('quotation_request_id')
        .unsigned()
        .references('id')
        .inTable('quotation_requests')
        .onDelete('CASCADE');
      table.string('status').notNullable();
      table.double('total').notNullable();
      table.string('payment_method').notNullable();
      table.timestamp('transaction_date').notNullable();
      table.float('payment_percentage').notNullable();
      table.double('payment_amount').notNullable();
      table.double('payment_total').notNullable();
      table.string('commission_status').notNullable();

      table.timestamp('created_at');
      table.timestamp('updated_at');
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}

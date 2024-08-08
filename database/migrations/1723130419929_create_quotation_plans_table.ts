import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'quotation_plans';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.integer('quotation_request_id').unsigned().references('id').inTable('quotations').onDelete('CASCADE');
      table.integer('facturatech_plan_id').notNullable();
      table.double('price').notNullable();
      table.integer('quantity').notNullable();
      table.double('total').notNullable();
      table.string('plan_name').notNullable();
      table.bigInteger('facturatech_sale_id').nullable();
      table.string('status').defaultTo('pending');

      table.timestamp('created_at');
      table.timestamp('updated_at');
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}

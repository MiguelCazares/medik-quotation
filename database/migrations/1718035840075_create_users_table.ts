import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'users';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable();

      table.bigInteger('facturatech_id').nullable();
      table.bigInteger('facturatech_dealer_id').nullable();
      table.bigInteger('medik_dealer_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.string('username').notNullable().unique();
      table.string('nit').notNullable().unique();
      table.string('email').notNullable().unique();
      table.string('user_type').notNullable();
      table.string('name').notNullable();
      table.string('phone').notNullable();
      table.string('status').notNullable();
      table.boolean('is_dealer').notNullable();
      table.string('password').notNullable();

      table.timestamp('created_at').notNullable();
      table.timestamp('updated_at').nullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}

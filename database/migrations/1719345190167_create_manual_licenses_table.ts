import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'manual_licenses';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id');
      table.integer('platform_user_id').notNullable();
      table.uuid('track_id').unique().notNullable();
      table.string('email').notNullable();
      table.string('key').notNullable();
      table.string('code').notNullable();
      table.string('payment_mean').notNullable();
      table.string('period').notNullable();
      table.double('price').notNullable();
      table.dateTime('valid_from').notNullable();
      table.dateTime('valid_to').notNullable();

      table.timestamp('created_at');
      table.timestamp('updated_at');
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}

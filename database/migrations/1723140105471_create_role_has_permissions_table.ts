import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'role_has_permissions';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('permission_id').unsigned().references('id').inTable('permissions').onDelete('CASCADE');
      table.integer('model_id').unsigned().references('id').inTable('roles').onDelete('CASCADE');
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}

import { BaseSeeder } from '@adonisjs/lucid/seeders';
import { UserFactory } from '#database/factories/user_factory';

export default class extends BaseSeeder {
  public async run() {
    await UserFactory.merge({
      email: 'admin@example.com',
    }).create();
  }
}

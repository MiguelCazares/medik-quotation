import factory from '@adonisjs/lucid/factories';
import User from '#models/user';

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      username: faker.number.bigInt().toString(),
      nit: faker.number.bigInt().toString(),
      email: faker.internet.email(),
      user_type: 'admin',
      name: faker.person.fullName(),
      phone: faker.phone.number(),
      status: 'active',
      is_dealer: false,
      password: 'password',
    };
  })
  .build();

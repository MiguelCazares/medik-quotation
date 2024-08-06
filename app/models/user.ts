import { AccessToken, DbAccessTokensProvider } from '@adonisjs/auth/access_tokens';
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid';
import { compose } from '@adonisjs/core/helpers';
import hash from '@adonisjs/core/services/hash';
import { BaseModel, column } from '@adonisjs/lucid/orm';
import { DateTime } from 'luxon';

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
});

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  public declare id: number;

  @column({ columnName: 'facturatech_id' })
  public declare facturatechId: number | null;

  @column({ columnName: 'facturatech_dealer_id' })
  public declare facturatechDealerId: number | null;

  @column({ columnName: 'medik_dealer_id' })
  public declare medikDealerId: number | null;

  @column()
  public declare username: string;

  @column()
  public declare nit: string;

  @column()
  public declare email: string;

  @column({ columnName: 'user_type' })
  public declare userType: string;

  @column()
  public declare name: string;

  @column()
  public declare phone: string;

  @column()
  public declare status: string;

  @column({ columnName: 'is_dealer' })
  public declare isDealer: boolean;

  @column({ serializeAs: null })
  public declare password: string;

  @column.dateTime({ autoCreate: true })
  public declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public declare updatedAt: DateTime | null;

  public static accessTokens = DbAccessTokensProvider.forModel(User);

  public static currentAccessToken?: AccessToken;
}

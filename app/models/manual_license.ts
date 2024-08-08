import { BaseModel, column } from '@adonisjs/lucid/orm';
import { DateTime } from 'luxon';
import { type PaymentMean } from '../constants/payment_means.js';
import { type PlanCode } from '../constants/plan_codes.js';
import { type PlanPeriod } from '../constants/plan_periods.js';

export default class ManualLicense extends BaseModel {
  @column({ isPrimary: true })
  public declare id: bigint;

  @column()
  public declare platformUserId: number;

  @column()
  public declare trackId: string;

  @column()
  public declare email: string;

  @column()
  public declare key: string;

  @column()
  public declare code: PlanCode;

  @column()
  public declare period: PlanPeriod;

  @column()
  public declare paymentMean: PaymentMean;

  @column()
  public declare price: number;

  @column.dateTime({ autoCreate: false, autoUpdate: false })
  public declare validFrom: DateTime;

  @column.dateTime({ autoCreate: false, autoUpdate: false })
  public declare validTo: DateTime;

  @column.dateTime({ autoCreate: true })
  public declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public declare updatedAt: DateTime;
}

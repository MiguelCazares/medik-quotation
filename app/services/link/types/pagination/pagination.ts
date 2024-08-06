import { type Meta } from './meta.js';

export interface Pagination<T> {
  meta: Meta;
  records: T[];
}

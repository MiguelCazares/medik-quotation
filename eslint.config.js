// @ts-check
import { nodecfdiConfig } from '@nodecfdi/eslint-config';
import { defineFlatConfig } from 'eslint-define-config';
// my other imports...

export default defineFlatConfig([
  ...nodecfdiConfig({
    adonisjs: true,
  }),
  // my other configurations
]);

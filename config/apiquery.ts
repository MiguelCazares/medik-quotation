import { defineConfig } from '@eienjs/adonis-api-query';

export default defineConfig({
  parameters: {
    include: 'include',
    filter: 'filter',
    sort: 'sort',
    fields: 'fields',
    append: 'append',
  },
  countSuffix: 'Count',
  existsSuffix: 'Exists',
  disableInvalidFilterQueryException: false,
  disableInvalidSortQueryException: false,
  disableInvalidIncludesQueryException: false,
  convertRelationNamesToSnakeCasePlural: false,
});

import { defineConfig } from 'adonis-lucid-permission';

export default defineConfig({
  tableNames: {
    roles: 'roles',
    permissions: 'permissions',
    roleHasPermissions: 'role_has_permissions',
  },
});

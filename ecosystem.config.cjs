module.exports = {
  apps: [
    {
      name: 'medik-cotizador',
      script: './build/bin/server.js',
      instances: '4',
      exec_mode: 'cluster',
      merge_logs: true,
      autorestart: true,
    },
  ],
};

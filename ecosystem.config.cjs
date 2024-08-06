module.exports = {
  apps: [
    {
      name: 'link-backoffice',
      script: './build/bin/server.js',
      instances: '4',
      exec_mode: 'cluster',
      merge_logs: true,
      autorestart: true,
    },
  ],
};

module.exports = {
  apps: [
    {
      name: 'motion-agency',
      script: 'node',
      args: '.next/standalone/server.js',
      cwd: '/var/www/motion-agency/next-app',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      // Restart on crash, limit memory
      max_memory_restart: '512M',
      // Log file locations
      out_file: '/var/log/pm2/motion-agency-out.log',
      error_file: '/var/log/pm2/motion-agency-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],
};

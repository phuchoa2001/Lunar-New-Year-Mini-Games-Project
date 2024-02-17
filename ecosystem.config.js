module.exports = {
  apps: [
    {
      name: 'Lunar-New-Year-Mini-Games-Project',
      exec_mode: 'cluster',
      instances: 1, // Chỉ chạy một instance
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 443'
    }
  ]
}
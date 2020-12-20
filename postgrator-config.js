'use strict';
require('dotenv').config();

module.exports = {
  migrationDirectory: 'migrations',
  driver: 'pg',
  connectionString:
    process.env.NODE_ENV === 'test'
      ? process.env.TEST_DB_URL
      : process.env.DATABASE_URL,
  host: process.env.MIGRATION_DB_HOST,
  port: process.env.MIGRATION_DB_PORT,
  database: process.env.MIGRATION_DB_NAME,
  username: process.env.MIGRATION_DB_USER,
  password: process.env.MIGRATION_DB_PASS,
};

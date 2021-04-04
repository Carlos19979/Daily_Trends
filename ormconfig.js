'use strict';

require('dotenv').config();

const config = [
  {
    type: 'postgres',
    name: 'daily_trends',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    migrations: [
      process.env.MIGRATIONS_PATH_FOR_DAILY_TRENDS
    ],
    cli: {
      migrationsDir: process.env.MIGRATIONS_PATH_FOR_DAILY_TRENDS
    },
    migrationsRun: false,
    synchronize: false,
    logging: true,
    entities: [
      process.env.ENTITIES_PATH_FOR_DAILY_TRENDS
    ]
  },
  {
    type: 'postgres',
    name: 'seeds-daily_trends',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    migrations: [
      process.env.SEEDS_PATH_FOR_DAILY_TRENDS
    ],
    cli: {
      migrationsDir: process.env.SEEDS_PATH_FOR_DAILY_TRENDS
    },
    migrationsRun: false,
    synchronize: false,
    logging: true,
    entities: [
      process.env.ENTITIES_PATH_FOR_DAILY_TRENDS
    ]
  }
];

module.exports = config;

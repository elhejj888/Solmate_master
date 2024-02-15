import { ConnectionOptions } from 'typeorm';

const ormconfig: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'default2',
  synchronize: true,
  logging: true,
  entities: ['src/entity/Transactions.ts'], // Adjust the path as needed
  migrations: ['src/migrations/**/*.ts'], // Adjust the path as needed
  subscribers: ['src/subscribers/**/*.ts'], // Adjust the path as needed
};

export = ormconfig;

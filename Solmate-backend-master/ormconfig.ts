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
  entities: ['src/entity/Transactions.ts'], 
};

export = ormconfig;

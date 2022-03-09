import mongoose from 'mongoose';
import { Connection, createConnection } from 'typeorm';
import { Endpoint } from '../configs/endpoint';
import ormConfig from './ormConfig'
import { createDatabase } from "typeorm-extension";

class Database {
  connectMongoDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      mongoose.connect(
        Endpoint.DATABASE_URL,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (error) => {
          if (error) reject(error);
          resolve();
        }
      );
    });
  }

  async connectMysql(): Promise<Connection | null> {
    // await createDatabase({ ifNotExist: true });
    const conn = await createConnection(ormConfig);
    return null;
  }
}

const database = new Database();

export default database;

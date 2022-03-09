import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  name: "default",
  type: "mysql",
  host: "localhost", //localhost
  port: 3306,
  username: "root",
  password: "Siin123?",
  database: "QuizDB",
  synchronize: true,
  logging: false,
  // dropSchema: true,
  entities: ["src/entities/**/*.ts", "build/src/entities/**/*.js"],
  migrations: ["src/migrations/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations",
    subscribersDir: "src/subscriber",
  },
};

export = config;

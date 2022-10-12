import dotenv from "dotenv";
dotenv.config();

export const rounds: number = parseInt(process.env.SALT_ROUNDS) || 10;
export const JWT_SECRET: string = process.env.JWT_SECRET;
export const port: number = parseInt(process.env.PORT) || 3000;
export const JWT_TTL: number =
  parseInt(process.env.JWT_TTL) || 1000 * 60 * 60 * 24 * 7;
export const REDIS_URI: string = process.env.REDIS_URI;
export const REDIS_TTL: number = parseInt(process.env.REDIS_TTL) || 60 * 60;

export const TYPEORM_CONNECTION: string = process.env.TYPEORM_CONNECTION;
export const TYPEORM_HOST: string = process.env.TYPEORM_HOST;
export const TYPEORM_USERNAME: string = process.env.TYPEORM_USERNAME;
export const TYPEORM_PASSWORD: string = process.env.TYPEORM_PASSWORD;
export const TYPEORM_DATABASE: string = process.env.TYPEORM_DATABASE;
export const TYPEORM_PORT: number = parseInt(process.env.TYPEORM_PORT);
export const TYPEORM_SYNCHRONIZE: boolean = Boolean(
  process.env.TYPEORM_SYNCHRONIZE
).valueOf();
export const TYPEORM_LOGGING: boolean = Boolean(
  process.env.TYPEORM_LOGGING
).valueOf();
export const TYPEORM_ENTITIES: string = process.env.TYPEORM_ENTITIES;
export const TYPEORM_MIGRATIONS: string = process.env.TYPEORM_MIGRATIONS;
export const TYPEORM_SUBSCRIBERS: string = process.env.TYPEORM_SUBSCRIBERS;
export const TYPEORM_ENTITIES_DIR: string = process.env.TYPEORM_ENTITIES_DIR;
export const TYPEORM_MIGRATIONS_DIR: string =
  process.env.TYPEORM_MIGRATIONS_DIR;
export const TYPEORM_SUBSCRIBERS_DIR: string =
  process.env.TYPEORM_SUBSCRIBERS_DIR;

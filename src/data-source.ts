import { DataSource } from "typeorm";

import {
  TYPEORM_CONNECTION,
  TYPEORM_HOST,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE,
  TYPEORM_PORT,
  TYPEORM_SYNCHRONIZE,
  TYPEORM_LOGGING,
  TYPEORM_ENTITIES,
  TYPEORM_MIGRATIONS,
  TYPEORM_SUBSCRIBERS,
  TYPEORM_ENTITIES_DIR,
  TYPEORM_MIGRATIONS_DIR,
  TYPEORM_SUBSCRIBERS_DIR,
} from "./constants/env.constants";
import { Admin, Tenant, Kin, Apartment, Cash, Rent } from "./db/entity";

export default new DataSource({
  type: TYPEORM_CONNECTION as any,
  host: TYPEORM_HOST,
  port: TYPEORM_PORT,
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE,
  synchronize: TYPEORM_SYNCHRONIZE,
  logging: TYPEORM_LOGGING,
  entities: [Admin, Tenant, Kin, Apartment, Cash, Rent],
  subscribers: [],
  migrations: [],
});

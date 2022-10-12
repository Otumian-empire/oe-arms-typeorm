import "reflect-metadata";

import app from "./app";
import AppDataSource from "./data-source";
import logger from "./loggers/winston.logger";
import { port } from "./constants/env.constants";

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      logger.debug(`Listening on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
    logger.error(error.message);
  });

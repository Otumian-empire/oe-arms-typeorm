import "reflect-metadata";

import { port } from "./constants/env.constants";
import app from "./app";
import logger from "./loggers/winston.logger";

app.listen(port, () => {
  logger.debug(`Listening on http://localhost:${port}`);
});

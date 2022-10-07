import "reflect-metadata";

import { port } from "./constants/env.constants";
import app from "./app";

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

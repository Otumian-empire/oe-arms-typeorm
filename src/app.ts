import express from "express";
import { Application } from "express";
import cors from "cors";

import httpLogger from "./loggers/morgan.logger";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(httpLogger);

export default app;

import morgan from "morgan";
import morganJson from "morgan-json";

import winstonLogger from "./winston.logger";

const format = morganJson({
  method: ":method",
  url: ":url",
  status: ":status",
  contentLength: ":res[content-length]",
  responseTime: ":response-time",
});

const stream = {
  write: (message: any) => {
    const { method, url, status, contentLength, responseTime } =
      JSON.parse(message);

    winstonLogger.info("HTTP Log", {
      timestamp: new Date().toString(),
      method,
      url,
      status: Number(status),
      contentLength,
      responseTime: Number(responseTime),
    });
  },
};

export default morgan(format, { stream });

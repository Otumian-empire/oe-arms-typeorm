import Joi from "joi";

import { AMOUNT_REQUIRED } from "../constants/api.messages";

export const cashCreateRequestBody = Joi.object().keys({
  amount: Joi.number()
    .integer()
    .rule({
      message: AMOUNT_REQUIRED,
    })
    .required(),
});

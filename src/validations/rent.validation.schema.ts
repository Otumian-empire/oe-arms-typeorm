import Joi from "joi";

import { ID_PARAMETER_REQUIRED } from "../constants/api.messages";

export const rentCreateRequestBody = Joi.object().keys({
  apartmentId: Joi.string()
    .alphanum()
    .rule({
      message: ID_PARAMETER_REQUIRED,
    })
    .required(),
  cashId: Joi.string()
    .alphanum()
    .rule({
      message: ID_PARAMETER_REQUIRED,
    })
    .required(),
});

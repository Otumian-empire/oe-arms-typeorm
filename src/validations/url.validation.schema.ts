import Joi from "joi";

import { ID_PARAMETER_REQUIRED } from "../constants/api.messages";
import { PAGINATION } from "../constants/app.constants";

export const idRequestParams = Joi.object().keys({
  id: Joi.string()
    .alphanum()
    .rule({
      message: ID_PARAMETER_REQUIRED,
    })
    .required(),
});

export const paginationQuery = Joi.object().keys({
  page: Joi.number().integer().positive().default(PAGINATION.PAGE),
  pageSize: Joi.number().integer().positive().default(PAGINATION.PAGE_SIZE),
});

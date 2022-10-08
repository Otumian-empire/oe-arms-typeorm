import Joi from "joi";

import {
  EMAIL_REQUIRED,
  FULL_NAME_REQUIRED,
  PHONE_REQUIRED,
} from "../constants/api.messages";

export const kinCreateRequestBody = Joi.object().keys({
  fullName: Joi.string()
    .trim()
    .rule({
      message: `Kin's ${FULL_NAME_REQUIRED}`,
    })
    .required(),
  email: Joi.string()
    .email()
    .trim()
    .rule({
      message: `Kin's ${EMAIL_REQUIRED}`,
    })
    .required(),
  phone: Joi.string()
    .trim()
    .rule({
      message: `Kin's ${PHONE_REQUIRED}`,
    })
    .required(),
});

export const kinUpdateRequestBody = Joi.object().keys({
  email: Joi.string().email().trim(),
  phone: Joi.string().trim(),
});

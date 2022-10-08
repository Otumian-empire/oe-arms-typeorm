import Joi from "joi";

import {
  PRICE_REQUIRED,
  ROOM_NUMBER_REQUIRED,
} from "../constants/api.messages";

export const apartmentCreateRequestBody = Joi.object().keys({
  roomNumber: Joi.string()
    .token()
    .trim()
    .rule({
      message: ROOM_NUMBER_REQUIRED,
    })
    .required(),
  description: Joi.string().trim().required(),
  price: Joi.number()
    .integer()
    .rule({
      message: PRICE_REQUIRED,
    })
    .required(),
});

export const apartmentUpdateRequestBody = Joi.object().keys({
  roomNumber: Joi.string().token().trim(),
  description: Joi.string().trim(),
  price: Joi.number().integer(),
});

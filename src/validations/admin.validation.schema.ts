import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";

import {
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  USERNAME_REQUIRED,
} from "../constants/api.messages";
import { MINIMUM_PASSWORD_SIZE, ONE } from "../constants/app.constants";

const joiPassword = Joi.extend(joiPasswordExtendCore);

export const adminSignupRequestBody = Joi.object().keys({
  username: Joi.string()
    .trim()
    .rule({
      message: USERNAME_REQUIRED,
    })
    .required(),
  password: joiPassword
    .string()
    .min(MINIMUM_PASSWORD_SIZE)
    .rule({
      message: PASSWORD_REQUIRED,
    })
    .minOfLowercase(ONE)
    .rule({
      message: PASSWORD_REQUIRED,
    })
    .minOfUppercase(ONE)
    .rule({
      message: PASSWORD_REQUIRED,
    })
    .minOfNumeric(ONE)
    .rule({
      message: PASSWORD_REQUIRED,
    })
    .required(),
  email: Joi.string()
    .email()
    .trim()
    .rule({
      message: EMAIL_REQUIRED,
    })
    .required(),
});

export const adminUpdateRequestBody = Joi.object().keys({
  email: Joi.string().email().trim(),
});

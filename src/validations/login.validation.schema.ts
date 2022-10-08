import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";

const joiPassword = Joi.extend(joiPasswordExtendCore);

import { INVALID_CREDENTIALS } from "../constants/api.messages";
import { MINIMUM_PASSWORD_SIZE, ONE } from "../constants/app.constants";

export const loginRequestBody = Joi.object().keys({
  username: Joi.string()
    .trim()
    .rule({
      message: INVALID_CREDENTIALS,
    })
    .required(),
  password: joiPassword
    .string()
    .min(MINIMUM_PASSWORD_SIZE)
    .rule({
      message: INVALID_CREDENTIALS,
    })
    .minOfLowercase(ONE)
    .rule({
      message: INVALID_CREDENTIALS,
    })
    .minOfUppercase(ONE)
    .rule({
      message: INVALID_CREDENTIALS,
    })
    .minOfNumeric(ONE)
    .rule({
      message: INVALID_CREDENTIALS,
    })
    .required(),
});

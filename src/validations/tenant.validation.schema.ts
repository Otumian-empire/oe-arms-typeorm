import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";

const joiPassword = Joi.extend(joiPasswordExtendCore);

import {
  DOB_REQUIRED,
  EMAIL_REQUIRED,
  FULL_NAME_REQUIRED,
  PASSWORD_REQUIRED,
  PHONE_REQUIRED,
  PREVIOUS_ADDRESS_REQUIRED,
  USERNAME_REQUIRED,
} from "../constants/api.messages";
import { MINIMUM_PASSWORD_SIZE, ONE } from "../constants/app.constants";

export const tenantCreateRequestBody = Joi.object().keys({
  fullName: Joi.string()
    .trim()
    .rule({
      message: FULL_NAME_REQUIRED,
    })
    .required(),
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
  phone: Joi.string()
    .trim()
    .rule({
      message: PHONE_REQUIRED,
    })
    .required(),
  dob: Joi.string()
    .trim()
    .rule({
      message: DOB_REQUIRED,
    })
    .required(),
  prevResidenceAddress: Joi.string()
    .trim()
    .rule({
      message: PREVIOUS_ADDRESS_REQUIRED,
    })
    .required(),
  kinFullName: Joi.string()
    .trim()
    .rule({
      message: `Kin's ${FULL_NAME_REQUIRED}`,
    })
    .required(),
  kinEmail: Joi.string()
    .email()
    .trim()
    .rule({
      message: `Kin's ${EMAIL_REQUIRED}`,
    })
    .required(),
  kinPhone: Joi.string()
    .trim()
    .rule({
      message: `Kin's ${PHONE_REQUIRED}`,
    })
    .required(),
});

export const tenantUpdateRequestBody = Joi.object().keys({
  email: Joi.string().email().trim(),
  phone: Joi.string().trim(),
  kinEmail: Joi.string().email().trim(),
  kinPhone: Joi.string().trim(),
});

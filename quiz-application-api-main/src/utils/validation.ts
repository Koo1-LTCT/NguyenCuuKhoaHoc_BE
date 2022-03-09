import * as yup from 'yup';
import { Constant } from '../constants/constant';
import en from '../locales/en';

export const firstNameSchema = yup
  .string()
  .matches(Constant.NAME_PATTERN, en.first_name_general)
  .min(Constant.FIRST_NAME_MIN_LENGTH, en.first_name_min_length)
  .max(Constant.FIRST_NAME_MAX_LENGTH, en.first_name_max_length)
  .required(en.first_name_required);

export const lastNameSchema = yup
  .string()
  .matches(Constant.NAME_PATTERN, en.last_name_general)
  .min(Constant.LAST_NAME_MIN_LENGTH, en.last_name_min_length)
  .max(Constant.LAST_NAME_MAX_LENGTH, en.last_name_max_length)
  .required(en.last_name_required);

export const emailSchema = yup
  .string()
  .email(en.email_address_invalid)
  .required(en.email_address_required);

export const phoneSchema = yup
  .string()
  .matches(Constant.NUMBER_PATTERN, en.phone_number_invalid)
  .min(Constant.PHONE_NUMBER_MIN_LENGTH, en.phone_number_min_length)
  .max(Constant.PHONE_NUMBER_MAX_LENGTH, en.phone_number_max_length)
  .required(en.phone_number_required);

export const passwordSchema = yup
  .string()
  .matches(
    Constant.UPPERCASE_CHARACTER_PATTERN,
    en.password_require_uppercase_character
  )
  .matches(
    Constant.LOWERCASE_CHARACTER_PATTERN,
    en.password_require_lowercase_character
  )
  .matches(Constant.NUMBER_PATTERN, en.password_require_number)
  .matches(
    Constant.SPECIAL_CHARACTER_PATTERN,
    en.password_require_special_character
  )
  .min(6, en.password_min_length)
  .max(20, en.password_max_length)
  .required(en.password_required);

export const confirmPasswordSchema = yup
  .string()
  .oneOf([yup.ref('password')], en.password_not_match)
  .required(en.confirm_password_required);

export const dateOfBirthSchema = yup
  .date()
  .typeError(en.date_of_birth_invalid)
  .nullable()
  .required(en.date_of_birth_required)
  .test({
    exclusive: false,
    test: function (value: Date) {
      if (!value) {
        return true;
      }

      const { path, createError } = this;
      const currentDate = new Date();

      const minTime = new Date().setFullYear(
        currentDate.getFullYear() - Constant.MAX_AGE
      );

      if (value.getTime() < minTime) {
        return createError({
          path,
          message: en.date_of_birth_max_age,
        });
      }

      const maxTime = new Date().setFullYear(
        currentDate.getFullYear() - Constant.MIN_AGE
      );

      if (value.getTime() > maxTime) {
        return createError({
          path,
          message: en.date_of_birth_min_age,
        });
      }

      return true;
    },
  });

export const signInSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});

export const signUpSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
  firstName: firstNameSchema,
  lastName: lastNameSchema,
});

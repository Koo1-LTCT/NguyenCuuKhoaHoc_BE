import { Constant } from '../constants/constant';

const en = {
  logo: 'logo',
  sign_in: 'sign in',
  sign_up: 'sign up',
  sign_out: 'sign out',
  forgot_password: 'forgot password',
  reset_password: 'reset password',
  account_setting: 'account setting',
  dashboard: 'dashboard',
  home: 'home',

  profile: 'profile',
  first_name: 'first name',
  last_name: 'last name',
  email_address: 'email address',
  phone_number: 'phone number',
  password: 'password',
  confirm_password: 'confirm password',
  current_password: 'current password',
  avatar: 'avatar',
  date_of_birth: 'date of birth',
  term_of_service: 'term of service',
  privacy_policy: 'privacy policy',
  home_id: 'home id',

  save: 'save',

  // Message
  dont_have_an_account: "Don't have an account?",
  already_have_an_account: 'Already have an account?',
  by_clicking_sign_up_you_agree_to_our: 'By clicking sign up, you agree to our',
  and: 'and',
  copyright_by: 'Copyright © {{year}} by {{author}}',
  success: 'Success',
  failure: 'Failure',

  // Validate first name
  first_name_general:
    'first name must start with a capital letter and must not contain special characters',
  first_name_min_length: `first name must contain at least ${Constant.FIRST_NAME_MIN_LENGTH} characters`,
  first_name_max_length: `first name must contain at most ${Constant.FIRST_NAME_MAX_LENGTH} characters`,
  first_name_required: 'first name is required',

  // Validate last name
  last_name_general:
    'last name must start with a capital letter and must not contain special characters',
  last_name_min_length: `last name must contain at least ${Constant.LAST_NAME_MIN_LENGTH} characters`,
  last_name_max_length: `last name contain at most ${Constant.LAST_NAME_MAX_LENGTH} characters`,
  last_name_required: 'last name is required',

  // Validate email address
  email_address_invalid: 'email address is invalid',
  email_address_required: 'email address is required',

  // Validate phone number
  phone_number_invalid: 'phone number is invalid',
  phone_number_min_length: `phone number must contain at least ${Constant.PHONE_NUMBER_MIN_LENGTH} numbers`,
  phone_number_max_length: `phone number contain at most ${Constant.PHONE_NUMBER_MAX_LENGTH} numbers`,
  phone_number_required: 'phone number is required',

  // Validate password
  password_require_uppercase_character:
    'password must contain at least an uppercase character',
  password_require_lowercase_character:
    'password must contain at least a lowercase character',
  password_require_number: 'must contain at least a number',
  password_require_special_character:
    'password must contain at least a special character',
  password_min_length: `password must contain at least ${Constant.PASSWORD_MIN_LENGTH} characters`,
  password_max_length: `password must contain at most ${Constant.PASSWORD_MAX_LENGTH} characters`,
  password_required: 'password is required',
  confirm_password_required: 'confirm password is required',
  password_not_match: 'confirm password does not match with password',
  password_not_one_of:
    'new password must be different from the current password',

  // Validate date of birth
  date_of_birth_invalid: 'date of birth is invalid',
  date_of_birth_min_age: `age must be more than ${Constant.MIN_AGE}`,
  date_of_birth_max_age: `age must be less than ${Constant.MAX_AGE}`,
  date_of_birth_required: 'date of birth is required',

  // Validate home id
  home_id_required: 'home id is required',
};

export default en;

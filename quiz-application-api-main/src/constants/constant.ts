export class Constant {
  static readonly DATE_FORMAT = 'dd/MM/yyyy';
  static readonly TIME_FORMAT = 'H:mm a';
  static readonly DEFAULT_LANGUAGE = 'en';
  static readonly LANGUAGE_EN = 'en';
  static readonly LANGUAGE_VI = 'vi';

  static readonly NAME_PATTERN = /^['A-Z][A-Za-z'\-()& ]{1,20}$/;
  static readonly UPPERCASE_CHARACTER_PATTERN = /.*[A-Z]/;
  static readonly LOWERCASE_CHARACTER_PATTERN = /.*[a-z]/;
  static readonly SPECIAL_CHARACTER_PATTERN = /.*[-_!@#$%^&*.,?]/;
  static readonly NUMBER_PATTERN = /.*\d/;

  static readonly FIRST_NAME_MIN_LENGTH = 2;
  static readonly FIRST_NAME_MAX_LENGTH = 40;
  static readonly LAST_NAME_MIN_LENGTH = 2;
  static readonly LAST_NAME_MAX_LENGTH = 40;
  static readonly PHONE_NUMBER_MIN_LENGTH = 10;
  static readonly PHONE_NUMBER_MAX_LENGTH = 11;
  static readonly PASSWORD_MIN_LENGTH = 6;
  static readonly PASSWORD_MAX_LENGTH = 256;
  static readonly MIN_AGE = 18;
  static readonly MAX_AGE = 100;
}

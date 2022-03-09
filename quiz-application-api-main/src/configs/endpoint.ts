export class Endpoint {
  static readonly DATABASE_URL = 'mongodb+srv://admin:admin%40%23@quiz-cluster-0.bzigt.mongodb.net/QuizDB';
  static readonly BASE = '/';
  static readonly AUTH = '/auth';
  static readonly USERS = '/users';
  static readonly SIGN_IN = '/sign-in';
  static readonly SIGN_UP = '/sign-up';
  static readonly SIGN_OUT = '/sign-out';
  static readonly ME = '/me';
  static readonly FORGOT_PASSWORD = '/forgot-password';
  static readonly UPDATE_PROFILE = '/update-profile';
  static readonly CHANGE_PASSWORD = '/change-password';
  static readonly CATEGORY = '/category';
  static readonly CATEGORY_CREATE_QUESTION = '/:id/question';
  static readonly QUESTION = '/questions';
  static readonly ANSWER = '/answer';
  static readonly SUBMIT_ANSWER = '/submit';
}

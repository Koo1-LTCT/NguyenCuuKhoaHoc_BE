import { Token } from '../token';
import { BaseResponse } from './base';

export interface SignInResponse extends BaseResponse {
  data: Token;
}

export interface SignUpResponse extends BaseResponse {
  data: Token;
}

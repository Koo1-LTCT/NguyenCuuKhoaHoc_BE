import { UserDocument } from '../user';
import { BaseResponse } from './base';

export interface GetUsersResponse extends BaseResponse {
  data: UserDocument[];
}

export interface PostUserResponse extends BaseResponse {}

export interface PutUserResponse extends BaseResponse {}

export interface DeleteUserResponse extends BaseResponse {}

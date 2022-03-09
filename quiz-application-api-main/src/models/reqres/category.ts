import { Category } from 'src/entities/category/category.entity';
import { BaseResponse } from './base';

export interface GetCategoryResponse extends BaseResponse {
  data: Category[];
}

export interface CreateCategoryResponse extends BaseResponse {
  data: Category;
}
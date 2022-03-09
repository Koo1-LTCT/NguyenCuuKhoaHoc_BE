import { Question } from '../../entities/question/question.entity';
import { BaseResponse } from './base';

export interface GetQuestionResponse extends BaseResponse {
  data: Question[];
  categoryId: number | undefined
}
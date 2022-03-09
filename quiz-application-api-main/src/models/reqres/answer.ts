import { Answer } from '../../entities/answer/answer.entity';
import { Question } from '../../entities/question/question.entity';
import { BaseResponse } from './base';

export interface SubmitAnswerResponse extends BaseResponse {
  data: Answer | undefined;
}
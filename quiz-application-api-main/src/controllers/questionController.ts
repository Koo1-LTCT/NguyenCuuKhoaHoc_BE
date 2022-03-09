import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Status } from '../constants/status';
import { BaseResponse } from '../models/reqres/base';
import { Question } from '../entities/question/question.entity';
import { GetQuestionResponse } from 'src/models/reqres/question';
import { User } from '../entities/users/user.entity';

class QuestionController {
  async getQuestions(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const currentUserData = req.user;
      const userRepository = getRepository(User);
      const questionRepository = getRepository(Question);
      const user = await userRepository.findOne({
        join: {
          alias: "user", leftJoinAndSelect: {
            category: "user.category",
          }
        }, where: { id: currentUserData.id }
      });
      const questions = await questionRepository.find({
        join: {
          alias: "question", leftJoinAndSelect: {
            answers: "question.answers"
          }
        }, where: { category: user?.category?.id }
      })

      const response: GetQuestionResponse = {
        status: Status.OK,
        data: questions,
        categoryId: user?.category?.id
      };

      return res.status(Status.OK).json(response);
    } catch (error) {
      const response: BaseResponse = {
        status: Status.INTERNAL_SERVER_ERROR,
        message: error.message,
      };

      return res.status(Status.INTERNAL_SERVER_ERROR).json(response);
    }
  }
}

const questionController = new QuestionController();

export default questionController;

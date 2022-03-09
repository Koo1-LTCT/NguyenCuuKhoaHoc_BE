import { NextFunction, Request, Response } from 'express';
import { MESSAGE } from '../constants/message';
import { Category } from '../entities/category/category.entity';
import { getConnection, getManager, getRepository, LessThanOrEqual, MoreThan, MoreThanOrEqual } from 'typeorm';
import { Status } from '../constants/status';
import { BaseResponse } from '../models/reqres/base';
import { Question } from '../entities/question/question.entity';
import { Answer } from '../entities/answer/answer.entity';
import { User } from '../entities/users/user.entity';
import { SubmitAnswerResponse } from 'src/models/reqres/answer';

class AnswerController {
  async submitAllAnswer(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const data: { questionId: number, answerId: number }[] = req.body;
      const currentUserData = req.user;
      const userRepository = getRepository(User);
      const answerRepository = getRepository(Answer);
      const categoryRepository = getRepository(Category);

      const minScoreCategory = await categoryRepository.findOne({ where: { minimumScore: 0 } });
      const user = await userRepository.findOne({
        join: {
          alias: "user",
          leftJoinAndSelect: {
            category: "user.category",
          }
        },
        where: { id: currentUserData.id }
      });

      //Delete users_answers
      if (user?.category?.id === minScoreCategory?.id) {
        await getManager().query(`DELETE FROM users_answers_answers WHERE usersId = ${user?.id}`)
      }

      //Add answer to user
      let sumPoint = 0;
      for (let i = 0; i < data.length; i++) {
        const answer = await answerRepository.findOne({
          where: { id: data[i].answerId }
        });

        sumPoint += answer?.point || 0;

        await getConnection()
          .createQueryBuilder()
          .relation(User, "answers")
          .of(user)
          .add(answer);
      }

      //nextCategory for user or reset category if done
      const nextCategory = await categoryRepository.findOne({ where: { minimumScore: LessThanOrEqual(sumPoint), maximumScore: MoreThanOrEqual(sumPoint), id: MoreThan(user?.category?.id) }, order: { minimumScore: 'ASC' } });
      if (nextCategory && user?.category?.id === minScoreCategory?.id) {
        await userRepository.update(currentUserData.id, { category: nextCategory });
      }
      else {
        await userRepository.update(currentUserData.id, { category: minScoreCategory });
      }

      //response
      const response: { status: Status, message: string, sumPoint: number } = {
        status: Status.OK,
        message: MESSAGE.SUBMIT_ANSWER_DONE,
        sumPoint: sumPoint
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

const answerController = new AnswerController();

export default answerController;

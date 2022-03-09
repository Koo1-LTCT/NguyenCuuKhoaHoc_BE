import { NextFunction, Request, Response } from 'express';
import { MESSAGE } from '../constants/message';
import { Category } from '../entities/category/category.entity';
import { CreateCategoryResponse } from 'src/models/reqres/category';
import { getRepository } from 'typeorm';
import { Status } from '../constants/status';
import { BaseResponse } from '../models/reqres/base';
import { Question } from '../entities/question/question.entity';
import { Answer } from '../entities/answer/answer.entity';

class CategoryController {
  async createCategory(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const data = req.body;
      const categoryRepository = getRepository(Category);
      const existedCategory = await categoryRepository.findOne({ where: { name: data.name } });
      if (existedCategory) {
        const response: BaseResponse = {
          status: Status.BAD_REQUEST,
          message: MESSAGE.TAKEN_CATEGORY,
        };
        return res.status(Status.BAD_REQUEST).json(response);
      }

      const category = await categoryRepository.save(data);

      const response: CreateCategoryResponse = {
        status: Status.OK,
        data: category
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

  async createQuestion(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const data = req.body;
      const { id: categoryId } = req.params;
      const questionRepository = getRepository(Question);
      const answerRepository = getRepository(Answer);
      const question = await questionRepository.save({ ...data, category: categoryId });
      if (data.answers?.length > 0) {
        await answerRepository.save(data.answers.map((answer: Answer) => { return { ...answer, question: question.id } }));
      }

      const response: CreateCategoryResponse = {
        status: Status.OK,
        data: question
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

const categoryController = new CategoryController();

export default categoryController;

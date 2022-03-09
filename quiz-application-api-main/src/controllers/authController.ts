import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Config } from "../configs/config";
import { MESSAGE } from "../constants/message";
import { Status } from "../constants/status";
import { BaseResponse } from "../models/reqres/base";
import { SignInResponse, SignUpResponse } from "../models/reqres/auth";
import { getRepository } from "typeorm";
import { User } from "../entities/users/user.entity";
import { Category } from "../entities/category/category.entity";

class AuthController {

  async signIn(req: Request, res: Response, next: NextFunction): Promise<any> {
    const userRepository = getRepository(User);
    try {
      const { email, password } = req.body;
      const user = await userRepository.findOne({ where: { email } });
      if (!user) {
        const response: BaseResponse = {
          status: Status.BAD_REQUEST,
          message: MESSAGE.INCORRECT_EMAIL,
        };
        return res.status(Status.BAD_REQUEST).json(response);
      }

      const compare = await bcrypt.compare(password, user.password);
      if (!compare) {
        const response: BaseResponse = {
          status: Status.BAD_REQUEST,
          message: MESSAGE.INCORRECT_PASSWORD,
        };
        return res.status(Status.BAD_REQUEST).json(response);
      }

      const token = jwt.sign({ id: user.id }, Config.SECRET_TOKEN);
      const data = { token };
      const response: SignInResponse = {
        status: Status.OK,
        data: data,
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

  async signUp(req: Request, res: Response, next: NextFunction): Promise<any> {
    const userRepository = getRepository(User);
    const categoryRepository = getRepository(Category);
    try {
      const { email, password, firstName, lastName } = req.body;

      const user = await userRepository.findOne({ where: { email } });
      if (user) {
        const response: BaseResponse = {
          status: Status.BAD_REQUEST,
          message: MESSAGE.TAKEN_EMAIL,
        };
        return res.status(Status.BAD_REQUEST).json(response);
      }

      let category = await categoryRepository.findOne({ where: { minimumScore: 0 } });

      const hash = await bcrypt.hash(password, 12);
      const newUser = new User();
      newUser.email = email;
      newUser.password = hash;
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.category = category;

      await userRepository.save(newUser);

      const token = jwt.sign({ id: newUser.id }, Config.SECRET_TOKEN);
      const data = { token };
      const response: SignUpResponse = {
        status: Status.OK,
        data: data,
      };

      return res.status(Status.OK).json(response);
    } catch (error) {
      console.error(error);
      const response: BaseResponse = {
        status: Status.INTERNAL_SERVER_ERROR,
        message: error.message,
      };

      return res.status(Status.INTERNAL_SERVER_ERROR).json(response);
    }
  }

  async signOut(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> { }
}

const authController = new AuthController();

export default authController;

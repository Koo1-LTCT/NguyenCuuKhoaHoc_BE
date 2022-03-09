import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ObjectSchema } from "yup";
import TokenUtil from "../utils/token";
import { MESSAGE } from "../constants/message";
import { Status } from "../constants/status";
import { BaseResponse } from "../models/reqres/base";
import { UserDocument } from "src/models/user";

export const validateSchema =
  (schema: ObjectSchema) =>
    async (req: Request, res: Response, next: NextFunction): Promise<any> => {
      try {
        await schema.validate(req.body);
        next();
      } catch (error) {
        const response: BaseResponse = {
          status: Status.BAD_REQUEST,
          message: error.message,
        };
        return res.status(Status.BAD_REQUEST).json(response);
      }
    };

export const authGuard =
  () =>
    async (req: Request, res: Response, next: NextFunction): Promise<any> => {
      try {
        const authHeader = req.header("Authorization");
        const token = authHeader && authHeader.split("Bearer ")[1];

        if (!token) {
          const response: BaseResponse = {
            status: Status.UNAUTHORIZED,
            message: MESSAGE.UNAUTHORIZED,
          };
          return res.status(Status.UNAUTHORIZED).json(response);
        }
        const userDecoded = TokenUtil.decodedToken(token);
        req.user = <UserDocument>userDecoded;

        next();
      } catch (error) {
        // const response: BaseResponse = {
        //   status: Status.FORBIDDEN,
        //   message: error.message,
        // };
        // return res.status(Status.FORBIDDEN).json(response);
        next(error);
      }
    };

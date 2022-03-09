import { NextFunction, Request, Response } from "express";
import { Config } from "../configs/config";
import { Status } from "../constants/status";
import { BaseResponse } from "../models/reqres/base";

class AppController {
  async get(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const response: BaseResponse = {
        status: Status.OK,
        message: Config.APP_NAME,
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

const appController = new AppController();

export default appController;

import jwt from "jsonwebtoken";
import { Config } from "../configs/config";

class TokenUtil {
  static decodedToken(token: string): object | string {
    return jwt.verify(token, Config.SECRET_TOKEN) as object;
  }
}

export default TokenUtil;

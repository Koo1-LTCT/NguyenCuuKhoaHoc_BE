import { Router } from "express";
import { Endpoint } from "../configs/endpoint";
import authController from "../controllers/authController";
import { validateSchema } from "../middleware/auth";
import { signInSchema, signUpSchema } from "../utils/validation";

const router = Router();

router.post(
  Endpoint.SIGN_IN,
  validateSchema(signInSchema),
  authController.signIn
);

router.post(
  Endpoint.SIGN_UP,
  validateSchema(signUpSchema),
  authController.signUp
);

router.post(Endpoint.SIGN_OUT, authController.signOut);

export default router;

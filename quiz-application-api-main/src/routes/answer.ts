import { Router } from "express";
import categoryController from "../controllers/categoryController";
import { Endpoint } from "../configs/endpoint";
import { authGuard } from "../middleware/auth";
import questionController from "../controllers/questionController";
import answerController from "../controllers/answerController";

const router = Router();

router.post(Endpoint.SUBMIT_ANSWER, authGuard(), answerController.submitAllAnswer);

export default router;

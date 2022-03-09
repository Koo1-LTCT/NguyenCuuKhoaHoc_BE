import { Router } from "express";
import categoryController from "../controllers/categoryController";
import { Endpoint } from "../configs/endpoint";
import { authGuard } from "../middleware/auth";
import questionController from "../controllers/questionController";

const router = Router();

router.get(Endpoint.BASE, authGuard(), questionController.getQuestions);

export default router;

import { Router } from "express";
import categoryController from "../controllers/categoryController";
import { Endpoint } from "../configs/endpoint";
import { authGuard } from "../middleware/auth";

const router = Router();

router.post(Endpoint.BASE, authGuard(), categoryController.createCategory);
router.post(Endpoint.CATEGORY_CREATE_QUESTION, authGuard(), categoryController.createQuestion);

export default router;

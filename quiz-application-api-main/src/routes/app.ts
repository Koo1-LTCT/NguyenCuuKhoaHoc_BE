import { Router } from 'express';
import { Endpoint } from '../configs/endpoint';
import appController from '../controllers/appController';

const router = Router();

router.get(Endpoint.BASE, appController.get);

export default router;

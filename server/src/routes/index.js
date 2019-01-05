import { Router } from 'express';
import testRouter from './test';

let router = Router();

router.use('/test', testRouter);

export default router;
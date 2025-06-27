import { Router } from 'express';
import otp from './otp';

const router = Router();

router.use('/otp', otp);

export default router;

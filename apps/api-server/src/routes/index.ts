import { Router } from 'express';
import health from './health';
import auth from './auth';

export const router = Router();

router.use('/health', health);
router.use('/auth', auth);

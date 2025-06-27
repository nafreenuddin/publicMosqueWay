import { Router } from 'express';

const router = Router();

router.post('/', (_req, res) => {
  res.json({ message: 'OTP endpoint' });
});

export default router;

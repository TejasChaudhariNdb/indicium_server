import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.riskReduction));
});

router.get('/:username', (req, res) => {
  return res.send(req.context.models.riskReduction[req.params.username]);
});

export default router;

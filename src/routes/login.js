import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

/* router.get('/:username', (req, res) => {
  return res.send(req.context.models.users[req.params.username]);
});
 */

 router.post()
export default router;

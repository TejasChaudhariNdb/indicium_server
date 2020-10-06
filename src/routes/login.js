import { Router } from 'express';
const models = require('../models')

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

/* router.get('/:username', (req, res) => {
  return res.send(req.context.models.users[req.params.username]);
});
 */

 router.post((req, Res) => {
let username = req.body.username
let password = req.body.password

// Ikde models.users la check jr

if(true){
res.send(true)
} Else{
Res.send(false)
}
})
export default router;

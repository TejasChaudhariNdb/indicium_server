import { Router } from 'express';
const models = require('../models')

const router = Router();


/*
router.post((req, res) => {
let username = req.body.username
let password = req.body.password

// Filter logic
let user = Object.values(models.users).filter(el => el.username === username && el.password === password)

if(user.length != 0){
res.send(true)
}else{
res.send(false)
}


})

*/


router.get('/:login',(req, res) => {
 
  console.log("BABA")
  let username = req.query.username
  let password = req.query.password
  
  // Filter logic
  let user = Object.values(models.users).filter(el => el.username === username && el.password === password)
  
  if(user.length != 0){
  res.send(true)
  }else{
  res.send(false)
  }
  
  })
  

export default router;

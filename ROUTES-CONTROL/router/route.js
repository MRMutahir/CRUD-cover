import express from "express"
import {login,signup} from "../Controler/auth.js";
// import  signup  from "../";

let router = express.Router();
// router.get('/users',(req,res)=>{
//   res.status(200).send('SALAM  login sucsasfuly')

// })
router.get('/users',login)
router.post('/users',signup)
export default router
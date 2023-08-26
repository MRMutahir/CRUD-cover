 import fs from "fs"
 
 let login  = async(req,res)=>{
  res.send('login hogaya hen')
} 
let signup = async (req,res)=>{
    let data = req.body
    // console.log(data);
    fs.writeFile("./index.JSON",JSON.stringify(data),()=>{

    })
    
    res.status(200).send("post api")
}


export {login,signup}
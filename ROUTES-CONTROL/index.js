console.log("SALAM");

import express from 'express'

let app = express();
import router from "./router/route.js";
let port = 8000
app.use(express.json())
app.use('/auth',router)

app.listen(port,()=>{
    console.log('Server start');
})

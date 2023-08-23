console.log("SALAMM");
import { error, log } from "console";
import Express from "express";
import fs from "fs"
let app = Express()
app.use(Express.json())
let userdata = fs.readFileSync("./mutahir.json", 'utf-8');
let convertjson = JSON.parse(userdata)
// console.log(convertjson);


app.post("/api/user", (req, res) => {
    let dta = req.body
    // console.log(dta);
    let data = {
        id: convertjson.user.length + 1,
        ...dta,
    }
    convertjson.user.push(data)
    console.log(data);
// console.log(convertjson);
    fs.writeFile("./mutahir.json", JSON.stringify(convertjson), (error, data) => {
        // console.log(data);
        res.status(200).send(" data  ok")
    })

    // res.status(200).send(convertjson)
});
app.get('/api/user/:id',(req,res)=>{
    let id = req.params.id
    let newfinddaat =  convertjson.user.filter(item => (item.id*1 )== id);
    // console.log(newfinddaat);
    // console.log(id);
    res.status(200).send(newfinddaat)
    

})
app.put('/api/user/:id',(req,res)=>{
    let id = req.params.id * 1;
 
   let filterdata =  convertjson.user.filter(ele => ( ele.id * 1) == id)
let change = req.body
 let  index 
 convertjson.user.forEach((ele,num) => {
    if(ele.id === id){
    index =num
    }
 });

convertjson.user.splice(index,1,change)
console.log(convertjson);
fs.writeFile("./mutahir.json",JSON.stringify(convertjson),()=>{

});



})
app.delete('/api/user',(req,res)=>{
    
})

let port = 8000
app.listen(port, () => {
    console.log(`server chal raha hai ${port}`);
})



























































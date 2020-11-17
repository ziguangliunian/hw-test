const express=require("express")
const fs=require("fs")
const app=express()
app.get("/",function (req,res) {
  fs.readFile("./views/index.html","utf-8",function (error,data) {
    if(!error){
      res.send(data)
    }
  })
})
app.listen(5000,()=>{
  console.log('服务器已开启');
})


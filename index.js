// so jb b ham apna file ko read krta ha tw file memory m store hoti h and support there are lot of user and un sbne file read kri and it is of more size tw ky hoga ki memory m load pd jaiga so we want ki memory m jse file load ho tw ekdam s load n pde tw streams ky krta ha ki us file ka data ko chunks m break krdeta and then vo chunk by chunk browser m bjta ha tkii browser pr load na pde 

const express=require('express')
const app=express();
const fs=require('fs')
const status=require('express-status-monitor')


app.use(status());

app.get('/',(req,res)=>{
    fs.readFile('./sample.txt',(err,data)=>{
        // so here we are converting file in to stream 
        const stream=fs.createReadStream('./sample.txt','utf-8');
        // from here the data is moving chunk to chunk into the file 
        stream.on('data',(chunk)=>{
            res.write(chunk)
        })
        // here we are showing the file
        stream.on('end',()=>res.end());
    })

})



app.listen(4000,()=>{
    console.log("server listing in port 4000")
})
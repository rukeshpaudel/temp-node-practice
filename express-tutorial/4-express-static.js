const express=require('express');
const path =require('path')
const res = require('express/lib/response');
const app = express();

app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })
//Server Side Rendering (SSR)

app.all('*',(req,res)=>{
    res.status(404).send('Resource Not Found')
})

app.listen(5000,()=>{
    console.log('Server created on port 5000');
})
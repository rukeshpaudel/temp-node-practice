const http=require('http')

// const server=http.createServer((req,res)=>{
//     res.end('Welcome')
// })

//Using event emitter API
const server =http.createServer()
//emits request event

server.on('request',(req,res)=>{
    res.end('Welcome')
})

server.listen(5000)
const http=require('http')

const server = http.createServer((req,res)=>{
    console.log('Server Created');

    if(req.url==="/")
    {
        res.end('Homepage')
    }
    if(req.url==="/about")
    {
        //BLOCKING CODE/ SYNCHRONOUS CODES TO BLOCK THE STACK

        for(let i=0;i<1000;i++)
        {
            for(let j=0;j<10;j++)
            {
                console.log(`${i} ${j}`);
            }
        }


        res.end('About Page')
    }
    
        res.end('Sorry Page Not found')
    }
)

server.listen(5000,()=>{
    console.log('Listening to server in port 5000....');
})

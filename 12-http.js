const http=require('http')

const server=http.createServer((req,res)=>{

    if(req.url==='/')
    {
        res.end('Welcome to my homepage')
    }
    if(req.url==='/about')
    {
        res.end('This is our About page')
    }
    res.end(`
    <h1>OOPSIE POOPSIE! </h1>
    <p>
    We dont seem to be finding what you're searching
    </p>
    <br>
    <a href="/"> Wanna go back home?</a>    
    `)
})

server.listen(5000)
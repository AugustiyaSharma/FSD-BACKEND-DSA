const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    if(req.url==='/home'){
        res.end("Welcome to Home Page");
    }
    else if(req.url==='/about'){
        res.end("This is About Page");
    }
    else if(req.url==='/contact'){
        res.end("Contact Us Page");
    }
    else{
        
        res.end("Page not found");
    }
});
server.listen(9002, (err)=>{
    if(err) throw err;
    else
    console.log('Server is running at http://localhost:9002');
})
const http = require('http');

const server = http.createServer(async (req, res) => {
    const data = await fetch("https://dummyjson.com/products");
    const jsonData =await data.json();
    const products = jsonData.products;
    res.writeHead(200,{"content-type": "application/json"});
    const titles=products.map((ele)=>{
        return ele.title;
    });
    res.end(JSON.stringify(titles));

})

server.listen(9000, (err)=>{
    if(err)
        console.log(err);
    console.log('Server is running at http://localhost:9000');
})
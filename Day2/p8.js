const http = require('http');

const server = http.createServer(async (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    try {
        const data = await fetch('https://fakestoreapi.com/products');
        const jsonData = await data.json();

        const myhtml = `
        <html>
        <head>
            <title>Product Store</title>
            <style>
                body {
                    font-family: 'Poppins', sans-serif;
                    background-color: #f8f9fa;
                    margin: 0;
                    padding: 20px;
                    text-align: center;
                }
                h1 {
                    color: #343a40;
                    margin-bottom: 20px;
                    font-size: 2.5rem;
                }
                .container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px;
                }
                .product-card {
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                    width: 300px;
                    transition: transform 0.3s ease-in-out;
                }
                .product-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
                }
                .product-card img {
                    width: 100%;
                    height: 250px;
                    object-fit: contain;
                    border-bottom: 2px solid #dee2e6;
                    margin-bottom: 10px;
                }
                .product-card h2 {
                    color: #007bff;
                    font-size: 18px;
                    margin-bottom: 10px;
                }
                .product-card p {
                    font-size: 14px;
                    color: #495057;
                    margin-bottom: 15px;
                    height: 60px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .product-card .price {
                    font-size: 20px;
                    font-weight: bold;
                    color: #28a745;
                }
            </style>
        </head>
        <body>
            <h1>Online Product Store</h1>
            <div class="container">
                ${
                    jsonData.map(product => `
                    <div class="product-card">
                        <img src="${product.image}" alt="${product.title}">
                        <h2>${product.title}</h2>
                        <p>${product.description}</p>
                        <p class="price">$${product.price}</p>
                    </div>
                    `).join('')
                }
            </div>
        </body>
        </html>
        `;

        res.end(myhtml);
    } catch (error) {
        res.end(`<h1>Error Fetching Products</h1><p>${error.message}</p>`);
    }
});

server.listen(9000, (err) => {
    if (err) throw err;
    console.log('Server is running at http://localhost:9000');
});

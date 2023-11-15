const express = require('express');
const app = express();
const port = 3000

const products = [
  { id: 1, name: "Product A" },
  { id: 1, name: "Product B" },
  { id: 1, name: "Product C" },
];

app.get('/api/products',(req,res)=> {
    res.json(products);
});

app.listen(port, ()=> {
    console.log('Server is running on port${port}');
});
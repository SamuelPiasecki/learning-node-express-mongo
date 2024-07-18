const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API");
});

mongoose
    .connect("mongodb+srv://samupiasecki:RyrHdkfM5gBkqnNE@backenddb.77y3obs.mongodb.net/Node-API-Test?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log("Server is running on 3000");
        })
    })
    .catch(() => {
        console.log("Connection failed!")
    })
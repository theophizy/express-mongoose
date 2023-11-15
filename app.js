const express = require('express');

const {connectToMongoDB} = require('./db');

const bookRoute = require('./routes/book')

require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

//connecting to the MongoDB
connectToMongoDB();

app.use(express.json())

app.use("/books", bookRoute)

app.get('/', (req, res)=>{
    res.status(200).send("Welcome to our Bookstore")
})


app.listen(PORT, ()=>{
    console.log(`Server started on port: http://localhost:${PORT}`)
})
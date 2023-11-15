const express = require('express')

const bookModel = require("../model/book") 

const bookRoute = express.Router()

bookRoute.get("/", (req, res) => {
    bookModel.find({}).then((books)=>{
        res.status(200).send(books)
        
    }).catch((err)=>{
      res.status(500).send(err)  
    })
})

bookRoute.get("/:id", (req, res) => {
    const bookId = req.params.id
    bookModel.findById(bookId)
    .then((book)=>{
        res.status(200).send(book)
    })
    .catch((err)=>{
        res.status(404).send(err)
    })
})

bookRoute.post("/", (req, res) =>{
const book = req.body;
bookModel.create(book)
.then((book)=>{
    res.status(201).send({
        message:"Book added successfully",
        data:book
    })
})
.catch((err)=>{
    res.status(500).send(err.message)
})

})


bookRoute.put("/:id", (req, res) => {
    const bookId = req.params.id
    const book = req.body
    // the third parameter {new : true} returns the new record updated else it will return the old record 
    bookModel.findByIdAndUpdate(bookId, book, { new: true}) 
    .then((book)=>{
        res.status(200).send({
            message: "Book updated successfully",
            data : book
        })
    })
        .catch((err)=>{
            res.status(500).send(err)
        })
})

bookRoute.delete("/:id", (req, res) =>{
    const bookId = req.params.id
    bookModel.findByIdAndDelete(bookId)
    .then(()=>{
        res.status(200).send("Book deleted successfully")
    }).catch((err)=>{
        res.status(500).send(err)
    })
})
module.exports = bookRoute

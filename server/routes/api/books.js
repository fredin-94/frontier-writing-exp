const express = require("express");
const router = express.Router();

const Book = require("../../models/Book.js");

//add a book
router.post("/books", (req, res, next)=>{

    const newBook = new Book({
        title: req.body.title,
        authors: req.body.authors,
        collaborators: req.body.collaborators,
        summary: req.body.summary,
        language: req.body.language
    });

});

//get all books (that belong to one user id, but then i think we can get that ID in the req, idk if thats RESTful tho or if i need to have it in the endpoint)
router.get("/books", (req, res, next)=>{
    Book.find()
    .then((res)=>{

    })
    .catch((err)=>{

    })
});

//get one book by its id (mongodbid i guess)
router.get("/books/:id", (req, res, next)=>{
    Book.findById()
    .then((res)=>{

    })
    .catch((err)=>{

    })
});

//update the book if any fields have changed
router.patch("/books/:id", (req, res, next)=>{

});


module.exports = router;


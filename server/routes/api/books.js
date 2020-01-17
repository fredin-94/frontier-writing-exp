const express = require("express");
const router = express.Router();

const Book = require("../../models/Book.js");

//add a book
router.post("/books", (req, res, next)=>{

    //check if user data is valid? tho i can make sure on front end that they provide title, author etc before they submit

    //idk if i should have this but these are like optional so idk what happens if i dont provide some values for them (should check w postman)
    var collaborators = req.body.collaborators == null ? [] : req.body.collaborators;
    var summary = req.body.collaborators == null ? 'No summary' : req.body.summary;
    var language = req.body.collaborators == null ? 'No language specified' : req.body.language;
    
    const newBook = new Book({
        title: req.body.title,
        authors: req.body.authors,
        collaborators: collaborators,
        summary: summary,
        language: language
    });

    res.status().json();

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


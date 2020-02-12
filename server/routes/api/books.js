const express = require("express");
const router = express.Router();

const Book = require("../../models/Book.js");
const Chapter = require("../../models/Chapter.js");

//add a book
router.post('/', (req, res, next)=>{

    console.log(req.body);

    let authors = [];
    authors.push(req.body.authors);

    let chapterTitles = req.body.chapters;

    console.log("CH TITLES: " + chapterTitles);

    let chapters = [];

    chapterTitles.map(title => {
        console.log(">>>>>>>>>>>>>>>> making chapters >>>>>>>>>>>>>>>>>>>>>>");
        let chapter = new Chapter({
            title: title
        });
        chapters.push(chapter);
    }); 

    chapters.forEach((chap)=>console.log("CHAPTERS: "+chap));

    const newBook = new Book({
        title: req.body.title,
        authors: authors,
        chapters: chapters,
        summary: req.body.summary,
        language: req.body.language,
        creator: req.body.creator
    });

    newBook.save((err, book)=>{
        if(err){
            return res.status(400).json(err);
        }
        console.log(">>>>>>>>>>>>>>>> SAVED BOOK");
        console.log(book);
        return res.status(201).json(book);
    });
});

//get all books (that belong to one user id, but then i think we can get that ID in the req, idk if thats RESTful tho or if i need to have it in the endpoint)
router.get("/user/:userId", (req, res, next)=>{ //idk if this is the way to do it
    //find all books that have an author of userid, and all books that have a collaborator of userid
    const id = req.params.userId;
    
    Book.find({$or:[{creator: id },{collaborators: id}]}, (err, data)=>{ //find where the user is the author but also all books where they r a collaborator?? then we need some kinda or 
        if(err){
            return res.status(400).json("Error in request");
        }
        return res.status(200).json(data);
    });
});

//get one book by its id (mongodbid i guess)
router.get("/:id", (req, res, next)=>{
    
    const bookId = req.params.id;

    console.log(req.params.id);
    
    Book.findById(bookId, (err, data)=>{
        if(err){
            console.log(err);
            return res.status(400).json("Error in request");
            
        }
        console.log("successful get req");
        console.log(data);
        return res.status(200).json(data);

    })
});

//Route delete 1 book
router.delete("/:id", (req, res, next)=>{
    
    const bookId = req.params.id;

    Book.findByIdAndDelete(bookId, (err, data)=>{
        if(err){
            console.log(err);
            return res.status(400).json("Error in request");
        }
        if(data!==null){
            console.log("successful delete req");
            console.log(data);
            return res.status(200).json(data);
        }
        return res.status(400); //change?
    });
}); 

//update the book if any fields have changed, on only the changed fields
router.patch("/:id", (req, res, next)=>{

    const bookId = req.params.id;
    const bookParamsToUpdate = req.body;

    Book.findByIdAndUpdate( {_id: bookId} , bookParamsToUpdate, (err, data)=>{
        if(err){
            console.log(err);
            return res.status(400).json("Error in request");
        }

        return res.status(204).json(data);
    });

});


module.exports = router;


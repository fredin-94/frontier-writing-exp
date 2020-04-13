const express = require("express");
const router = express.Router();

const Book = require("../../models/Book.js");

//add a book
router.post('/', (req, res, next)=>{
    let authors = [];
    authors.push(req.body.authors);

    let chapterTitles = req.body.chapters;

    let chapters = [];

    chapterTitles.forEach(title => {
        let chapter = {
            title: title,
            content: '',
            collaborators: []
        }
        chapters.push(chapter);
    }); 

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
        return res.status(200).json(data);

    });
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
    const chapterId = req.body.chapterId;

    Book.findById(bookId, (err, data)=>{
        if(err){
            console.log(err);
            return res.status(400).json("Error in request");
            
        }
        for(let i = 0; i < data.chapters.length; i++){
            if(data.chapters[i]._id === chapterId){
                if(req.body.content !== null){
                    data.chapters[i].content = req.body.content;
                }
                else{
                    data.chapters[i].content = data.chapters[i].content;
                }
                if(req.body.title !== null){
                    data.chapters[i].title = req.body.title;
                }else{
                    data.chapters[i].title = data.chapters[i].title;
                }
                break;
            }
        }
           
        return res.status(204).json(data);

    });
    

});

//get a chapter
router.get('/:id/:chapterId', (req, res, next)=>{
    const bookId = req.params.id;
    const chapterId = req.params.chapterId;
    
    Book.findById(bookId, (err, data)=>{
        if(err){
            console.log(err);
            return res.status(400).json("Error in request");
        }
        //=== doesnt work for for this, but w.e
        let chapter = data.chapters.find(chap => chap._id == chapterId);
        return res.status(200).json(chapter);
    });
});

//update a chapter
router.patch("/:id/:chapterId", (req, res, next)=>{

    const bookId = req.params.id;
    const chapterId = req.params.chapterId;

    Book.findById(bookId, (err, book)=>{
        if(err){
            console.log(err);
            return res.status(400).json("Error in request");
        }
    
        let chps = book.chapters;
        for(let i = 0; i < chps.length; i++){
            if(chps[i]._id == chapterId){
                if(req.body.content !== null){
                    book.chapters[i].content = req.body.content;
                }else{
                    book.chapters[i].content = chps[i].content;
                }
                if(req.body.title !== null && req.body.title !== ""){
                    book.chapters[i].title = req.body.title;
                }else{
                    book.chapters[i].title = chps[i].title;
                }
                break;
            }
        } 
        book.save((err, book)=>{
            if(err){
                return res.status(400).json(err);
            }
            return res.status(204).json(book);
        });
    });
});

module.exports = router;
const express = require("express");
const router = express.Router();
const Course = require("../controller/Course")
const auth = require("../auth/adminMiddleware");


// post Register from Books
// router.post("/register", );

// post login from Books
router.get("/api",Course.readCourse);

// router.post("/add/book", auth, Book.addBook);

// //Get all books
// router.get("/get/all/book", auth, Book.getAllBook);

// //Delete bookCollection
// router.delete("/delete/book/:id", auth, Book.deleteBook);

// //Patch books
// router.patch("/update/book/:id", auth, Book.patchBook);

// router.get("/get/particular/book/:authorName", auth, Book.getParticularBookByAuthor);

// router.get("/get/all/books",Book.getAllBooks);




module.exports = router;
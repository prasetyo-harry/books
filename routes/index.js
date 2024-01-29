
const router = require("express").Router();
const books = require('./book_router');

router.use('/books', books);

module.exports = router;
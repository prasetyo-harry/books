const express = require('express');
const router = express.Router();

const {
    getAllBook,
    getBookById,
    getBookByJenis,
    updateBookById,
    postBook,
    deleteBookById
} = require('../controllers/BookController');

router.get('/', getAllBook);
router.get('/:id', getBookById);
router.get('/jenis/:jenis', getBookByJenis);
router.put('/:id', updateBookById);
router.post('/', postBook);
router.delete('/:id', deleteBookById);

module.exports = router;
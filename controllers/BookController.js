const books = require("../models/data");

const getAllBook = (req, res) => {
    try {
        const databaru = books
        if (databaru.length === 0) {
            return res.json({
                status: "Failed",
                message: "Data not found",
                data: []
            })
        }
        return res.json({
            status: "Success",
            message: "Data retrieve successfully",
            data: books
        })
    } catch (error) {
        res.json({
            status: "Failed",
            message: error,
            data: []
        })
    }
}

const getBookById = (req, res) => {
    try {
        const idBooks = req.params.id
        const filterData = books.filter(i => i.id === parseInt(idBooks))
        if (filterData.length === 0) {
            return res.json({
                status: "failed",
                message: "Data not found",
                data: []
            })
        }
        return res.json({
            status: "Success",
            message: "Retrieve Data success",
            data: filterData
        })
    } catch (error) {
        res.json({
            status: "failed",
            message: error,
            data: []
        })
    }
}

const getBookByJenis = (req, res) => {
    try {
        const jenis = req.params.jenis
        let dataBaru = []
        books.find((i) => {
            if (i.type === jenis) {
                dataBaru.push({
                    id: i.id,
                    name: i.name,
                    type: i.type
                })
            }
        })
        if (dataBaru.length === 0) {
            return res.json({
                status: "Failed",
                message: "Books not found",
                data: []
            })
        }
        return res.json({
            status: "Success",
            message: "Books retrieve",
            data: dataBaru
        })
    } catch (error) {
        res.json({
            status: "Failed",
            message: error,
            data: []
        })
    }
}

const updateBookById = (req, res) => {
    try {
        const idBooks = req.params.id
        const nameBook = req.body.name
        let dataBaru = []
        books.map((i) => {
            if (i.id !== parseInt(idBooks)) {
                dataBaru.push({
                    id: i.id,
                    name: i.name,
                    type: i.type
                })
            } else {
                dataBaru.push({
                    id: i.id,
                    name: nameBook,
                    type: i.type
                })
            }
        })
        if (dataBaru.length === 0) {
            return res.json({
                status: "failed",
                message: "No Book found",
                data: []
            })
        }
        return res.json({
            status: "Success",
            message: "Book Updated",
            data: dataBaru
        })
    } catch (error) {
        res.json({
            status: "Failed",
            message: error,
            data: []
        })
    }
}

const postBook = (req, res) => {
    try {
        const idBooks = books.length + 1
        const nameBook = req.body.name
        const typeBook = req.body.type
        let dataBaru = books
        if (dataBaru.length === 0) {
            return res.json({
                status: "Failed",
                message: "Book not found",
                data: []
            })
        }
        dataBaru.push({
            id: idBooks,
            name: nameBook,
            type: typeBook
        })
        return res.json({
            status: "Success",
            message: "Book added",
            data: dataBaru
        })
    } catch (error) {
        res.json({
            status: "failed",
            message: error,
            data: []
        })
    }
}

const deleteBookById = (req, res) => {
    try {
        const idBooks = req.params.id
        let dataBaru = []
        books.map((i) => {
            if (i.id !== parseInt(idBooks)) {
                dataBaru.push({
                    id: i.id,
                    name: i.name,
                    type: i.type
                })
            }
        })
        if (dataBaru.length === 0) {
            return res.json({
                status: "Failed",
                message: "Book not found",
                data: []
            })
        }
        return res.json({
            status: "Success",
            message: "Book deleted!!",
            data: dataBaru
        })
    } catch (error) {
        res.json({
            status: "failed",
            message: error,
            data: []
        })
    }
}

module.exports = { getAllBook, getBookById, getBookByJenis, updateBookById, postBook, deleteBookById };
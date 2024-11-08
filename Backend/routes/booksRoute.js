import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route for Saving a new Book
router.post('/', async (request, response) => {
    try {
        const { title, author, publishYear } = request.body;
        if (!title || !author || !publishYear) {
            return response.status(400).send({
                message: 'Please provide all required fields: title, author, publishYear',
            });
        }

        const newBook = {
            title: title,
            author: author,
            publishYear: publishYear,
        };

        const book = await Book.create(newBook);
        return response.status(201).send(book);
    } catch (error) {
        console.log('Error while creating a book:', error.message);
        return response.status(500).send({ message: 'An error occurred while saving the book', error: error.message });
    }
});

// Route to Get all Books from database
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to Get a book from database from id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to update a Book
router.put('/:id', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).send({ message: 'Book updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to Delete a book
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).send({ message: 'Book Deleted Successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;

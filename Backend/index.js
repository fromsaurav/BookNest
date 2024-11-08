import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('Welcome to the MERN STACK');
});

app.use('/books', booksRoute);

// // Route for Saving a new Book
// app.post('/books', async (request, response) => {
//     try {
//         // Check for required fields in the request body
//         const { title, author, publishYear } = request.body;
//         if (!title || !author || !publishYear) {
//             return response.status(400).send({
//                 message: 'Please provide all required fields: title, author, publishYear',
//             });
//         }

//         // Create a new book object
//         const newBook = {
//             title: title,
//             author: author,
//             publishYear: publishYear,
//         };

//         // Save the book to the database
//         const book = await Book.create(newBook);

//         // Return the created book object with a success status
//         return response.status(201).send(book);
//     } catch (error) {
//         // Log the error and return a 500 status with error details
//         console.log('Error while creating a book:', error.message);
//         return response.status(500).send({ message: 'An error occurred while saving the book', error: error.message });
//     }
// });


// //Route to Get all Books from database
// app.get('/books', async(request,response)=>{
//     try{
//         const books = await Book.find({});

//         return response.status(200).json({
//             count: books.length,
//             data: books
//         } 
//         );
//     }
//     catch(error){
//         console.log(error.message);
//         response.status(500).send({message: error.message});
//     }
// })


// //Route to Get all Books from database
// app.get('/books', async(request,response)=>{
//     try{
//         const books = await Book.find({});

//         return response.status(200).json({
//             count: books.length,
//             data: books
//         } 
//         );
//     }
//     catch(error){
//         console.log(error.message);
//         response.status(500).send({message: error.message});
//     }
// })

// //Route to Get a book from database from id
// app.get('/books/:id', async(request,response)=>{
//     try{
//         const {id} = request.params;

//         const book = await Book.findById(id);

//         return response.status(200).json(book);
//     }
//     catch(error){
//         console.log(error.message);
//         response.status(500).send({message: error.message});
//     }
// });

// //Route to update a Book
// app.put('/books/:id', async(request,response)=>{
//     try{
//         if (!request.body.title ||
//             !request.body.author || 
//             !request.body.publishYear
//         ){
//             return response.status(400).send({
//                 message: 'Send all required fields: title, author, publishYear',
//             });
//         }

//         const {id} = request.params;
        
//         const result = await Book.findByIdAndUpdate(id, request.body);
//         if(!result){
//             return response.status(404).json({message: 'Book not found'});
//         }

//         return response.status(200).send({message: 'Book updated successfully'});
// } catch(error){
//         console.log(error.message);
//         response.status(500).send({message: error.message});
//     }
// });


// //Route to Delete a book 
// app.delete('/books/:id', async (request, response) => {
//     try{
//         const {id} = request.params;

//         const result = await Book.findByIdAndDelete(id);

//         if(!result){
//             return response.status(404).json({message: 'Server not found'});
//         }

//         return response.status(200).send({message: 'Book Deleted Successfully'});
//     }
//     catch(error){
//         console.log(error.message);
//         response.status(500).send({message: error.message});
//     }
// });



mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("App is connected to Database");
        app.listen(PORT, () => {
            console.log(`The App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });


    // environment variables 
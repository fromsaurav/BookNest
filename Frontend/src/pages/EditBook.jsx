import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const {enqueueSnackbar} = useSnackbar();


  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/books/${id}`);
        const book = response.data;
        setTitle(book.title);
        setAuthor(book.author);
        setPublishYear(book.publishYear);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5555/books/${id}`, {
        title,
        author,
        publishYear,
      });
      navigate("/"); // Redirect to home after editing
      enqueueSnackbar('Book Edited Successfully !!', {variant: 'success'});
    } catch (error) {
      enqueueSnackbar('Error',{variant: 'error'});
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="mt-10"> {/* Added top margin */}
      <BackButton className='mb-4'/>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <h1 className="text-3xl font-bold text-center mb-6">Edit Book</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Author:</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Publish Year:</label>
              <input
                type="number"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                required
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-md w-full hover:bg-blue-700 transition duration-200"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;

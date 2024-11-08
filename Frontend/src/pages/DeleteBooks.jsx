import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {enqueueSnackbar} = useSnackbar();


  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5555/books/${id}`);
      navigate("/"); // Redirect to home after deletion
      enqueueSnackbar('Book deleted successfully', {variant: 'success'});
    } catch (error) {
      enqueueSnackbar('Error deleting book', {variant: 'error'});
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="mt-10"> {/* Added top margin */}
      <BackButton className='mb-4'/>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <h1 className="text-3xl font-bold text-center mb-6">Delete Book</h1>
          <p className="text-lg mb-4">Are you sure you want to delete this book permanently?</p>
          <div className="flex justify-between">
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-200"
            >
              Delete
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;

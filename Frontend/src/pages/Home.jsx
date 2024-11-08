import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showType, setShowType] = useState("table");

  const fetchBooks = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get("http://localhost:5555/books");
      setBooks(response.data.data || response.data); // Adjust based on your API response structure
    } catch (error) {
      setError("Error fetching books.");
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4 mb-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 text-white px-4 py-2 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 text-white px-4 py-2 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;

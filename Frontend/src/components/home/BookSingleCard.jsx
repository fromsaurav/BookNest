import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-4 border rounded-md shadow-md flex flex-col justify-between">
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p className="text-gray-600">{book.author}</p>
      <p className="text-gray-500">{book.publishYear}</p>
      <div className="flex justify-end gap-4 mt-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-xl text-green-800" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-xl text-yellow-600" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-xl text-red-600" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;

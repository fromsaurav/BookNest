import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="w-fit text-3xl text-red-600 cursor-pointer absolute top-2 right-2"
          onClick={onClose}
        />
        <div className="p-4 border rounded-md shadow-md flex flex-col justify-between">
          <h2 className="text-xl font-bold">{book.title}</h2>
          <p className="text-gray-600">{book.author}</p>
          <p className="text-gray-500">{book.publishYear}</p>
          <div className="flex justify-end gap-4 mt-4">
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
        </div>
        <p className="mt-4">Anything you want to show</p>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          facilis veniam cumque ipsam fuga quaerat doloribus tempore odit impedit
          dolore, unde necessitatibus facere quis. Adipisci voluptatem laudantium
          unde necessitatibus? Eos! Obcaecati harum reprehenderit odio quis et odit
          dolorem sit sunt fugiat totam est nobis aut neque quae distinctio,
          molestiae voluptas quisquam perferendis quod reiciendis! Culpa repellat
          libero itaque id velit! Consectetur officia voluptates similique nesciunt
          corporis, perspiciatis adipisci fuga minus repudiandae suscipit, eum
          odio? Aspernatur quas harum culpa. Voluptates nemo modi voluptate
          delectus perferendis, magnam exercitationem dolor at dolorem nihil.
        </p>
      </div>
    </div>
  );
};

export default BookModal;

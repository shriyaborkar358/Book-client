import React from "react";
import "./BookCard.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function BookCard({
  _id,
  name,
  image,
  category,
  price,
  description,
  loadBooks,
}) 

{
  const deleteBook = async (bookId) => {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/book/${bookId}`
    );

    toast.success(response.data.message);

    loadBooks();
  };

  return (
    <div className="book-container">
      <h1 className="book-name">{name}</h1>
      <img src={image} className="book-image" />
      <p className="book-category">{category}</p>
      <p className="book-price"> Price: {price}</p>
      <p className="book-description">{description}</p>

      <div className="book-card-action-icon-container">
        <button
          type="button"
          className="book-card-action-icon"
          onClick={() => {
            deleteBook(_id);
          }}
        >
          delete
        </button>
      </div>
      
      <Toaster />
    </div>
  );
}

export default BookCard;

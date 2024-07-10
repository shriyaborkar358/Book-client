import "./Home.css";
import React, { useEffect, useState } from "react";
import BookCard from "../../components/BookCard/BookCard";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import AddImg from "./Add.png";
import { Link } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    toast.loading("Loading Books....");
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/books`);

    toast.dismiss();
    toast.success("Books loaded succesfully");

    setBooks(response.data.data);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div>
      <h1 className="heading">Books</h1>
      {books.map((book, i) => {
        const { _id, name, image, category, price, description } = book;

        return (
          <div className="book-card-container">
            <BookCard
              key={i}
              _id={_id}
              name={name}
              image={image}
              category={category}
              price={price}
              description={description}
            />
          </div>
        );
      })}

      <Toaster />

      <Link to="/add">
        <img src={AddImg} className="add-icon" />
      </Link>
    </div>
  );
}

export default Home;

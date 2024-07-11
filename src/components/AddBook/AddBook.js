import React, { useState } from "react";
import "./AddBook.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

function AddBook() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const addBook = async () => {
    toast.loading("Adding book....");

    if (!name || !image || !price || !category || !description) {
      toast.error("Please Enter all Book detail");

      return;
    }

    const response = await axios.post(`${process.env.REACT_APP_API_URL}/book`, {
      name: name,
      image: image,
      category: category,
      price: price,
      description: description,
    });

    toast.dismiss("");
    toast.success(response.data.message);

    setName("");
    setCategory("");
    setImage("");
    setPrice("");
    setDescription("");
  };

  return (
    <>
      <div className="body">
        <h1 className="heading">Add Book</h1>

        <div className="form-container">
          <form>
            <input
              type="text"
              placeholder="Enter book name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="book-detail"
            />

            <img src={image} className="book-img" />

            <input
              type="url"
              placeholder="Add book image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="book-detail"
            />

            <input
              type="number"
              placeholder="Enter book price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="book-detail"
            />

            <input
              type="text"
              placeholder="Enter book category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="book-detail"
            />

            <input
              type="text"
              placeholder="Enter book description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="book-detail"
            />
            <div className="btn-conatainer">
              <button type="button" onClick={addBook} className="btn">
                Add Book
              </button>
              <br /> <br />
              <Link to="/" className="home-path btn">
                See all books
              </Link>
            </div>
          </form>

          <Toaster />
        </div>
      </div>
    </>
  );
}

export default AddBook;

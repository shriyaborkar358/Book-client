import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function UpdateBook() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const updateBook = async () => {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/book/${id}`,
      {
        name: name,
        price: price,
        image: image,
        category: category,
        description: description,
      }
    );

    toast.success(response.data.message);
  };

  const loadBooks = async (id) => {
    if (!id) {
      return;
    }

    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/book/${id}`
    );

    const { name, price, image, category, description } = response.data.data;

    setName(name);
    setImage(image);
    setCategory(category);
    setPrice(price);
    setDescription(description);
  };

  useEffect(() => {
    loadBooks(id);
  }, [id]);

  return (
    <div>
      <h1 className="heading">Update Book</h1>

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
            <button type="button" onClick={updateBook} className="btn">
              Update Book
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
  );
}

export default UpdateBook;

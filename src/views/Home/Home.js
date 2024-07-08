import "./Home.css"
import React, { useEffect, useState } from "react";
import BookCard from "../../components/BookCard/BookCard";
import axios from "axios";
import toast,{Toaster} from "react-hot-toast";


function Home() {

 const [books, setBooks] = useState([])

 const loadBooks = async () =>{
   toast.loading("Loading Books....")
   const response = await axios.get(`https://book-server-2asq.onrender.com/books`)

   toast.dismiss()
   toast.success("Books loaded succesfully")

   setBooks(response.data.data)
 }

 useEffect(()=>{
  loadBooks()
 }, [])

  return (
    <div>
      <h1>Books</h1>
      {
       books.map((book, i)=>{

            const {
              _id,
               name,
              image, 
              category, 
              price, 
              description}= book

            return (<BookCard 
              key={i}
              _id={_id} 
              name={name} 
              image={image} 
              category={category} 
              price={price} 
              description={description} />)
        })
      }

      <Toaster/>
    </div>
  );
}

export default Home;

import React from 'react'
import "./BookCard.css"

function BookCard({_id, name, image, category, price, description}) {
  return ( 
    <div className='book-container'>
      <h1 className='book-name'>{name}</h1>
      <img src={image} className='book-image'/>
      <p className='book-category'>{category}</p>
      <p className='book-price'> Price: {price}</p>
      <p className='book-description'>{description}</p>
    </div>
  )
}

export default BookCard

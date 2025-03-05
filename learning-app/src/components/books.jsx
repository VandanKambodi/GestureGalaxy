import React from 'react';
import './books.css';

const books = [
  { title: 'Basic Sign Language', author: 'John Doe', img: 'https://via.placeholder.com/150', description: 'Learn the basic signs for everyday communication.' },
  { title: 'Advanced Sign Techniques', author: 'Jane Smith', img: 'https://via.placeholder.com/150', description: 'Master advanced sign language techniques.' },
  { title: 'Sign Language for Kids', author: 'Emily Clark', img: 'https://via.placeholder.com/150', description: 'Fun and engaging signs for children.' },
  { title: 'Medical Sign Language', author: 'Dr. James Lee', img: 'https://via.placeholder.com/150', description: 'Essential medical terms in sign language.' }
];

const BooksPage = () => {
  return (
    <div className="books-container">
      <h1 className="title">Sign Language Books</h1>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.img} alt={book.title} className="book-image" />
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p className='dis'>{book.description}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;

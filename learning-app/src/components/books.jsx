import React from 'react';
import './books.css';

const books = [
  { title: 'Indian Sign Language', author: 'William Tomkins', img: './b1.png', description: 'Learn the basic signs for everyday communication.' },
  { title: 'Analysis of Grammar', author: 'Samar Sinha', img: './b2.png', description: 'Understand Grammar in sign language techniques.' },
  { title: 'Universal Indian sign language', author: 'William Tomkins', img: './b3.png', description: 'Gather the Knowledge.' },
  { title: 'Indian Sign Language Linguistics', author: 'Dr. Sandeep Sharma', img: './b4.png', description: 'Book That Speak Without Words.' },
  { title: 'Sign Talk', author: 'Seton Ernest Thompson', img: './b5.png', description: 'Let your Signs SpeakS.' },
  { title: 'Quick Learning', author: 'Duke Irene', img: './b6.png', description: 'Techniques to Master sign language .' },
  { title: 'Signing Everyday Phrases', author: 'Flodin Mickey', img: './b7.png', description: 'Learn more than 3400 signs.' },
  { title: 'How Successful People Think', author: 'King Allen', img: './b8.png', description: 'Train your Brain.' },
  { title: 'Guide for Sign Language', author: 'Costello Elaine', img: './b9.png', description: 'Learn to Speak With Your Hands.' }
];

const BooksPage = () => {
  return (
    <div className="books-container">
      <h1 className="title">Sign Language Books</h1>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.img} alt={book.title} className="book-image" />
            <h2 className='book-title'>{book.title}</h2>
            <h3 className='book-author'>{book.author}</h3>
            <p className='dis'>{book.description}</p>
            <a href="" className="buy-button">Buy Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;

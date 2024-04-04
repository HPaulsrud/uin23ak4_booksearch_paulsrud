import React, { useEffect, useState } from 'react';
import Book from './Bok';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://openlibrary.org/subjects/james_bond.json?');
      const data = await response.json();
      setBooks(data.works || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.authors ? book.authors[0].name : 'Ukjent forfatter'}
          year={book.first_publish_year || 'Ukjent år'}
          coverId={book.cover_i || null}
        />
      ))}
    </div>
  );
};

export default BookList;

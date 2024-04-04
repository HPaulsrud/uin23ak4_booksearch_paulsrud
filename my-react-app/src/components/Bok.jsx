import React from 'react';
import '../styles/style.css';


const Book = ({ title, author, year, rating, coverId, amazonLink }) => {
  return (
    <div className="book">
      {coverId && (
        <img src={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`} alt="Book Cover" />
      )}
      <div className="details">
        <h2>{title}</h2>
        <ul>
        <li>Forfatter: {author}</li>
        <li>År: {year}</li>
        <li>Gjennomsnittlig rating: {rating || 'Ukjent'}</li>
        </ul>
      </div>
    </div>
  );
};

export default Book;
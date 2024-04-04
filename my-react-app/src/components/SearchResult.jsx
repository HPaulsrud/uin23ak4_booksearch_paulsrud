import React from 'react';

const SearchResult = ({ results }) => {
  return (
    <div className="search-results">
      <h2>Søkeresultater</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <div className="book-info">
              {result.cover_i && (
                <img src={`https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`} alt="Book Cover" />
              )}
              <div className="details">
                <h3>{result.title}</h3>
                <p>Forfatter: {result.author_name ? result.author_name.join(', ') : 'Ukjent forfatter'}</p>
                <p>År: {result.first_publish_year || 'Ukjent år'}</p>
                <p>Gjennomsnittlig rating: {result.average_rating || 'Ukjent'}</p>
                {result.isbn && result.isbn.length > 0 && (
                  <a
                    href={`https://www.amazon.com/s?k=${result.isbn[0]}`}
                    onClick={(event) => handleAmazonSearch(event, result.isbn[0])}>Søk på Amazon</a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;

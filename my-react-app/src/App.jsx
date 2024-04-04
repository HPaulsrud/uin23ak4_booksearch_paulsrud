// App.js

import React from 'react';
import { useState } from 'react';
import Layout from './components/Layout';
import Book from './components/Bok';
import BookList from './components/bookcard';
import SearchBar from './components/Search';
import SearchResult from './components/SearchResult';


const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  //Fått hjelp av chatgpt her, spurte om hjelp til å få i gang søkefunksjonen i react prosjekt
  const handleSearch = async (searchTerm) => {
    try {
      setLoading(true);
      const response = await fetch(`https://openlibrary.org/search.json?title=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data.docs || []);
      setLoading(false);
    } catch (error) {
      console.error('Error searching for books:', error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p>Laster...</p>
      ) : searchResults.length > 0 ? (
        <SearchResult results={searchResults} />
      ) : (
        <BookList />
      )}
    </Layout>
  );
};

export default App;

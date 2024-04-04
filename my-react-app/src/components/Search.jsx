import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Søkelengde på min 3 bokstaver
    if (searchTerm.length >= 3) {
      onSearch(searchTerm);
    } else {
        alert("Søket ditt må ha minst tre tegn")
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Søk etter bøker..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Søk</button>
    </form>
  );
};

export default SearchBar;

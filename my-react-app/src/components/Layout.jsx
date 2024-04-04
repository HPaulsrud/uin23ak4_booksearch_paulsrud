import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header>
        <h1>Bok-bibliotek</h1>
      </header>
      <main>
        <div className="search-container">
        </div>
        <div className="book-list">
          {children}
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;

import React from "react";

import BookCard from "../bookCard/BookCard";

import "./BooksContainer.css";

const BooksContainer = ({ allBooks, loggedIn, setFavBook, favBook }) => {
  return (
    <div className="books-container-wrapper">
      <div className="books-container-inner">
        {allBooks.map((book, key) => (
          <BookCard
            book={book}
            loggedIn={loggedIn}
            setFavBook={setFavBook}
            favBook={favBook}
          />
        ))}
      </div>
    </div>
  );
};

export default BooksContainer;

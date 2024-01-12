import React from "react";
import "./BookCard.css";

import { addFavBook } from "../../utils/fetch";

const BookCard = ({ book, loggedIn, setFavBook, favBook }) => {
  const submitHandler = async (e, book, loggedIn) => {
    e.preventDefault();

    const data = await addFavBook(book.id, loggedIn.username);

    setFavBook(data);
  };

  return (
    <div className="card-wrapper">
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <button onClick={(e) => submitHandler(e, book, loggedIn)}>
        Add to Favs
      </button>
    </div>
  );
};

export default BookCard;

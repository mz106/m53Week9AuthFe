import React from "react";

import "./FavContainer.css";

const FavContainer = ({ favBook, loggedIn }) => {
  console.log("favcontainer: ", favBook);

  if (!favBook) {
    return <div>no fav book</div>;
  }

  return (
    <div className="favContainer-wrapper">
      <div className="favContainer-inner">
        <div className="favContainer-detail">
          <p>Hello {loggedIn.username}</p>
          <p>Your fav book is: {favBook.book.title}</p>
          <p></p>
        </div>
        <div className="favContainer-detail">
          <p>Title: {favBook.book.title}</p>
          <p>Genre: {favBook.book.genre}</p>
          <p>Author: {favBook.book.author}</p>
        </div>
      </div>
    </div>
  );
};

export default FavContainer;

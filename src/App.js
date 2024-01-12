import { useState, useEffect } from "react";

import "./App.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LogOrSign from "./components/logOrSign/LogOrSign";
import BooksContainer from "./components/booksContainer/BooksContainer";
import FavContainer from "./components/favContainer/FavContainer";

import { getAllBooks } from "./utils/fetch";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const [favBook, setFavBook] = useState(false);
  const [dep, setDep] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getAllBooks();

      setAllBooks(data);
      console.log(allBooks);
    })();
  }, [dep]);

  return (
    <div>
      <Header loggedIn={loggedIn} />
      <LogOrSign setLoggedIn={setLoggedIn} />
      <BooksContainer
        allBooks={allBooks}
        loggedIn={loggedIn}
        setFavBook={setFavBook}
        favBook={favBook}
      />
      <FavContainer loggedIn={loggedIn} favBook={favBook} />
      <Footer />
    </div>
  );
}

export default App;

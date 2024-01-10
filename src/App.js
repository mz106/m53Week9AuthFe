import { useState } from "react";

import "./App.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LogOrSign from "./components/logOrSign/LogOrSign";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Header loggedIn={loggedIn} />
      <LogOrSign setLoggedIn={setLoggedIn} />
      <Footer />
    </div>
  );
}

export default App;

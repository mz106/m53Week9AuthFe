import { useState } from "react";

import "./App.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LogOrSign from "./components/logOrSign/LogOrSign";
import UserContainer from "./components/userContainer/UserContainer";

function App() {
  return (
    <div>
      <Header />
      <LogOrSign />
      <UserContainer />
      <Footer />
    </div>
  );
}

export default App;

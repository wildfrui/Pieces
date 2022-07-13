import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import Home from "./components/Home";
import Header from "./components/Header";
import "./css/null.css";
import "./css/elements.css";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header></Header>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/books" exact element={<BookList />}></Route>
        </Routes>
      </React.Fragment>
    </Router>
  );
};

export default App;

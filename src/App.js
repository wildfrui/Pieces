import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Register from "./components/Register";
import "./css/null.css";
import "./css/elements.css";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header></Header>
        <Register></Register>
        <AppRouter></AppRouter>
      </React.Fragment>
    </Router>
  );
};

export default App;

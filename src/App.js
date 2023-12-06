import React from "react";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/login" element={<LoginPage/>} />
    </Routes>
  </Router>
  );
}

export default App;

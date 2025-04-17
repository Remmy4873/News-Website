import React from "react";
import Header from "./components/common/header/Header";
import "./App.css";
import Homepages from "./components/home/Homepages";
import Footer from "./components/common/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePage from "./components/singlePage/SinglePage";
import Culture from "./components/culture/Culture";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
          <Route path="/culture" element={<Culture />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
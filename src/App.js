import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/movie/:id" element={<MoviePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

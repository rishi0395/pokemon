import React from "react";
import { Routes, Route } from "react-router-dom";
import ListingPage from "./ListingPage";
import PokeInfo from "./PokeInfo";
import SearchPage from "./SearchPage";
import BookMarkScreen from "./BookMarkScreen";

function App() {
  return (
    <Routes>
      <Route path="/listing" element={<ListingPage />} />
      <Route path="/details" element={<PokeInfo />} />
      <Route path="/" element={<SearchPage />} />
      <Route path="/bookmark" element={<BookMarkScreen />} />
    </Routes>
  );
}

export default App;

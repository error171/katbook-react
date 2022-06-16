import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chapter from "./pages/Chapter";
import Manga from "./pages/Manga/Manga";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/chapter" element={<Chapter />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="*" element={<Home/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

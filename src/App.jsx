import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chapter from "./pages/Chapter";
import Manga from "./pages/Manga/Manga";
import Home from "./pages/Home/Home";
import Search from "./pages/Search";
function App() {
  return (
    <>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/manga">
          <Route path=":id" element={<Manga />} />
        </Route>
        <Route path="/chapter" element={<Chapter />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="*" element={<Home/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

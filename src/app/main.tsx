import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Search from "../pages/Search";
import Film from "../pages/Film";
import Liked from "../pages/Liked";
import Index from "../pages/Index";


createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="liked" element={<Liked />} />
      <Route path="search" element={<Search />} />
      <Route path="film/:id" element={<Film />} />
    </Routes>
  </BrowserRouter>
);

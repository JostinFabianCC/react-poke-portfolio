import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Pokedex from "../pages/Pokedex/Pokedex"; // ✅ Importación nueva

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokemon" element={<Pokedex />} /> {/* ✅ Nueva ruta */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
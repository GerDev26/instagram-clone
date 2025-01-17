import { Routes, Route } from "react-router-dom";
import { Home } from "./core/pages/Home";
import { MainLayout } from "./core/layouts/MainLayout";

export default function Router (){
  return (
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Home />} path="/" />
          <Route element={<h1>Pagina no existe</h1>} path="*" />
        </Route>
      </Routes>
  )
}
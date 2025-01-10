import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ButtonsPreview } from "./pages/ButtonsPreview";

export default function Router (){
  return (
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ButtonsPreview />} path="/buttons" />
      </Routes>
  )
}
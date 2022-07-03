import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Movies } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
}

export default App;

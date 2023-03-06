import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="pokemon" element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;

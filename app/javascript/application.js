// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Reserve from "./components/Reserve";
import MyReservations from "./components/MyReservations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Reserve />} />
      <Route path="/my-reservations" element={<MyReservations />} />
      {/* <Route path="/" element={<Home/>} /> */}
    </Routes>
  );
}

export default App;

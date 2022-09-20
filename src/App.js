import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <main className="h-screen overflow-hidden">
      <Sidebar open={true} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

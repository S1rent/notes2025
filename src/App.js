import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import CreateNote from "./pages/CreateNote";
import NoteDetail from "./pages/NoteDetail";
import Footer from "./components/Footer";
import { NoteProvider } from "./context/NoteContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <NoteProvider>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note/:noteId" element={<NoteDetail />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/create" element={<CreateNote />} />
      </Routes>
      <Footer />
    </Router>
  </NoteProvider>
  );
}

export default App;
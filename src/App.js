import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import CreateNote from "./pages/CreateNote";
import NoteDetail from "./pages/NoteDetail";
import Footer from "./components/Footer";
import ThemeWrapper from "./components/ThemeWrapper";
import { NoteProvider } from "./context/NoteContext";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AuthMiddleware from "./middleware/AuthMiddleware";

function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <NoteProvider>
          <LanguageProvider>
            <Router>
              <AuthMiddleware>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/note/:noteId" element={<NoteDetail />} />
                  <Route path="/archive" element={<Archive />} />
                  <Route path="/create" element={<CreateNote />} />
                </Routes>
                <Footer />
              </AuthMiddleware>
            </Router>
          </LanguageProvider>
        </NoteProvider>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;

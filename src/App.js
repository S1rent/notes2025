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
import { LoadingProvider } from "./context/LoadingContext";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AuthMiddleware from "./middleware/AuthMiddleware";
import LoadingWrapper from "./middleware/LoadingWrapper";
import SnackbarWrapper from "./components/SnackbarWrapper";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { SnackbarProvider } from "./context/SnackbarContext";

function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <LoadingProvider>
          <NoteProvider>
            <LanguageProvider>
              <AuthProvider>
                <SnackbarProvider>
                  <Router>
                    <LoadingWrapper>
                      <SnackbarWrapper>
                        <Navbar />
                        <AuthMiddleware>
                          <Routes>
                            <Route path="*" element={<NotFound />} />
                            <Route path="/" element={<Home />} />
                            <Route
                              path="/note/:noteId"
                              element={<NoteDetail />}
                            />
                            <Route path="/archive" element={<Archive />} />
                            <Route path="/create" element={<CreateNote />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                          </Routes>
                        </AuthMiddleware>
                        <Footer />
                      </SnackbarWrapper>
                    </LoadingWrapper>
                  </Router>
                </SnackbarProvider>
              </AuthProvider>
            </LanguageProvider>
          </NoteProvider>
        </LoadingProvider>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;

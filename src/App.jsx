import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeLoader from "./HomeLoader";
import AboutLoader from "./AboutLoader";
import ContactLoader from "./ContactLoader";
import NotFound from "./NotFound";
import Scam from "./scam";
function App() {
  return (
    <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeLoader />} />
            <Route path="/About" element={<AboutLoader />} />
            <Route path="/Contact" element={<ContactLoader />} />
            <Route path="*" element={<NotFound />} />
            <Route path='/scam' element={<Scam />} />
          </Routes>
          <Footer />
    </BrowserRouter>
  );
}

export default App;

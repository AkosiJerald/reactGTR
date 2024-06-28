import React from "react";
import Navbar from "./modules/header";
import WelcomeSection from "./pages/welcome";
import Aboutgtr from "./pages/aboutgtr";
import Spec from "./pages/gtrspec";
import Cars from "./pages/cars";
import Footer from "./modules/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<WelcomeSection />} />
        <Route path="/aboutgtr" Component= {Aboutgtr} />
        <Route path="/cars" Component= {Cars} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./User";
import ContactUs from "./components/pages/ContactUs";
import Certificates from "./components/pages/Certificates";
import AboutUs from "./components/pages/AboutUs";
import Product from "./components/pages/Product";
import Hello from "./Hello";



const App = () => {
  return (
     <> 
     <Router>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/contact" element={<ContactUs />} />
       <Route path="/certificates" element={<Certificates />} />
       <Route path="/about" element={<AboutUs />} />
       <Route path="/product" element={<Product />} />
       <Route path="/hello" element={<Hello />} />
       </Routes>
     </Router>
     </>
   
  );
};

export default App;
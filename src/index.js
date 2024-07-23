import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Services from "./Services";
import Home from "./Home";
import Contact from "./Contact";
import Gallery from "./Gallery";
import About from "./About";
import Blogs from "./Blogs";
import Login from "./auth/Login";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import Footer from "./components/Footer";
import * as ReactDOM from "react-dom/client";
import { AuthProvider } from "./contexts/AuthContext"
import ForgotPassword from "./auth/ForgotPassword";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./auth/Signup";
import Dashboard from "./auth/Dashboard";


const Main = () => {
  return (
    <AuthProvider>
    <Router>
      <Header />
      <div className="container mx-auto py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </div>
      <Footer />
    </Router>
    </AuthProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();

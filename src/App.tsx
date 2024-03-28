import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import Header from "./components/Header";
import "./App.css";
import ProductDetails from "./components/ProductDetails";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Header />} />
          <Route path="/"  element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          {/* <Route>404 Not Found!</Route> */}
      </Routes>
    </div>
  );
}

export default App;

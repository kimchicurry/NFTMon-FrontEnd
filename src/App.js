import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout";
import { useState } from "react";
import { BlockchainProvider } from "./context/AppConfig";
import Home from "./pages/Home";
import Breed from "./pages/Breed";
import ImageGen from "./pages/ImageGen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BlockchainProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/breed" element={<Breed />}></Route>
            <Route path="/imageGen" element={<ImageGen />}></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </BlockchainProvider>
  );
}

export default App;

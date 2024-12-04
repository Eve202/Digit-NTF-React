import React from "react";
import Home from "./Page/Home";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Aboutus from "./Page/Aboutus";
import Collections from "./Page/Collections";
import ConnectWallet from "./Page/ConnectWallet";
import OurBlog from "./Page/OurBlog";
import TopSales from "./Page/TopSales";
import Signup from "./Page/Signup";

function App() {
  return (
<BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Collections" element={<Collections />} />
      <Route path="/Connect" element={<ConnectWallet />} />
      <Route path="/Sales" element={<TopSales />} />
      <Route path="/Blog" element={<OurBlog />} />
      <Route path="/About" element={<Aboutus />} />
      <Route path="/Sign" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

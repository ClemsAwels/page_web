import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageMaximus from "./pages/AppMaximus";
import PageMerlin from "./pages/AppMerlin";
import PageSuperMid from "./pages/AppSuperMid";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page_maximus" element={<PageMaximus />} />
        <Route path="/page_merlin" element={<PageMerlin />} />
        <Route path="/page_supermid" element={<PageSuperMid />} />
      </Routes>
    </Router>
  );
}

export default App;

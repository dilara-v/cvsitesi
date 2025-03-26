import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import Create from "./components/Create"; 
import CVSitePage from "./components/CVSitePage"; 
import Page from "./components/page";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CVSitePage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/page" element={<Page />} /> {/* Düzeltildi: <page /> yerine <Page /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
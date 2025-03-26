import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import Create from "./components/Create"; 
import CVSitePage from "./components/CVSitePage"; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CVSitePage />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

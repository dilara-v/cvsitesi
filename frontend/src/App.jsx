import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header"; // Doğru
import Footer from "./Components/Footer/Footer"; // Eğer dosya Footer.jsx ise
import Create from "./Components/Create/Create"; // Eğer dosya Create.jsx ise
import CVSitePage from "./Components/CVSitePage/CVSitePage"; // Eğer dosya CVSitePage.jsx ise
import Page from "./Components/page/page"; // page.jsx yerine Page.jsx yapın
import Example from "./Components/Example/Example"; // example.jsx yerine Example.jsx yapın
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CVSitePage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/page" element={<Page />} />
        <Route path="/example" element={<Example />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
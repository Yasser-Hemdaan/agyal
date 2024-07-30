import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

// components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

// pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Fields from "./Pages/Fields/Fields";
import Contact from "./Pages/Contact/Contact";
import Testmonials from "./Pages/Testmonials/Testmonials";

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fields" element={<Fields />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testmonials" element={<Testmonials />} />
          </Routes>
          <Footer />
        </Router>
      </I18nextProvider>
    </>
  );
}

export default App;

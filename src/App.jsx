/* eslint-disable react/prop-types */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import Landing from "./Pages/Landing/Landing";
import Error from "./Pages/Error/Error";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <HelmetProvider>
        <Router>
          <HeaderVisibilityWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/fields" element={<Fields />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testmonials" element={<Testmonials />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </HeaderVisibilityWrapper>
        </Router>
      </HelmetProvider>
    </I18nextProvider>
  );
}

function HeaderVisibilityWrapper({ children }) {
  const location = useLocation();
  const showHeaderPaths = [
    "/",
    "/about",
    "/fields",
    "/contact",
    "/testmonials",
  ];

  const shouldShowHeader = showHeaderPaths.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      {children}
    </>
  );
}

export default App;

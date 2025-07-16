
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/landingPages/Main";
import Privacy from "./components/pages/Privacy";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import AboutUs from "./components/pages/AboutUs";
import HowItWorksPage from "./components/pages/HowItWorksPage";
import Contact from "./components/pages/Contact";
import ExploreProgram from "./components/pages/ExploreProgram";
import ScrollLink from "./components/ScrollLink"

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollLink />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs" element={<ExploreProgram />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

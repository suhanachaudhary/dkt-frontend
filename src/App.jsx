
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
import Modules from "./components/pages/Modules";
import Impact from "./components/pages/Impact";
import VisionMissionPage from "./components/pages/VisionMissionPage";
import Sustainability from "./components/pages/Sustainability";
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
        <Route path="/modules" element={<Modules />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/vision-mission" element={<VisionMissionPage />} />
        <Route path="/sustainability" element={<Sustainability />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

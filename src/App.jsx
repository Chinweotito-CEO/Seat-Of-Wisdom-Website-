import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/about/About.jsx";
import Leadership from "./pages/about/Leadership.jsx";
import WhyChooseUs from "./pages/about/WhyChooseUs.jsx";
import Admission from "./pages/admissions/Admission.jsx";
import Enquire from "./pages/admissions/Enquire.jsx";
import Academics from "./pages/academics/Academics.jsx";
import Primary from "./pages/academics/Primary.jsx";
import Secondary from "./pages/academics/Secondary.jsx";
import Curriculum from "./pages/academics/Curriculum.jsx";
import Clubs from "./pages/academics/Clubs.jsx";
import Facilities from "./pages/Facilities.jsx";
import News from "./pages/News.jsx";
import Contact from "./pages/Contact.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

// Scrolls back to the top whenever the page changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/admissions" element={<Admission />} />
          <Route path="/admissions/enquire" element={<Enquire />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/primary" element={<Primary />} />
          <Route path="/academics/secondary" element={<Secondary />} />
          <Route path="/academics/curriculum" element={<Curriculum />} />
          <Route path="/academics/clubs" element={<Clubs />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;

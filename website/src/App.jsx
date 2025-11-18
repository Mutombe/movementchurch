import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./components/lunguageContext";
import { Toaster } from "sonner";
import Navbar from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Sermons from "./components/sermons";
import Events from "./components/events";
import Ministries from "./components/ministries";
import Give from "./components/give";
import Contact from "./components/contact";
import GetInvolved from "./components/getInvolved";
import Footer from "./components/footer";
//import './App.css';

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App bg-black min-h-screen gellix-font">
          <style jsx>{`
            /* Century Gothic Font Face */
            @font-face {
              font-family: "Century Gothic Custom";
              src: url("./fonts/weezerfont.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Gellix";
              src: url("./fonts/Gellix-Light.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: "Gellix";
              src: url("./fonts/Gellix-Regular.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }

            /* Font utility classes */
            .gravesend-sans {
              font-family: "Gravesend Sans", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            .roboto-font {
              font-family: "Roboto", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            .gellix-font {
              font-family: "Gellix", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            body {
              overflow-x: hidden;
            }

            /* Smooth scrolling */
            html {
              scroll-behavior: smooth;
            }
          `}</style>
          <Navbar />
          <ScrollToTopOnMount />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/events" element={<Events />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/give" element={<Give />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-involved" element={<GetInvolved />} />
          </Routes>
          <Footer />
          <Toaster position="top-right" richColors />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;

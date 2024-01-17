import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "./components/Preloader";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

function App() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 3000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <div className="overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;

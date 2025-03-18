import "./App.css";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
    return (
        <section className="flex flex-col items-center justify-center pt-8 ">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </Router>
        </section>
    );
}

export default App;

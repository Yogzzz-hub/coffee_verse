import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

import chocolateImage from "./assets/chocolate.png";

function Home() {
  const cards = [
    {
      image: chocolateImage,
      title: "Cake",
      description: "Soft creamy cake"
    },
    {
      image: chocolateImage,
      title: "Chocolate",
      description: "Dark delicious chocolate"
    },
    {
      image: chocolateImage,
      title: "Dark Chocolate",
      description: "Delicious and Yummy Chocolate"
    }
  ];

  return (
    <>
      <Hero />

      <div className="card-container">
        {cards.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <Feature />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
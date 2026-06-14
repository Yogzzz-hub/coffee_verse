import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

import chocolateImage from "./assets/chocolate.png";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const cardsSectionRef = useRef(null);
  const cardsRef = useRef(null);

  const cards = [
    {
      image: chocolateImage,
      title: "Signature Cake",
      description: "Soft creamy cake with rich coffee infusion",
    },
    {
      image: chocolateImage,
      title: "Artisan Chocolate",
      description: "Dark delicious chocolate crafted with care",
    },
    {
      image: chocolateImage,
      title: "Premium Truffles",
      description: "Delicious and decadent chocolate truffles",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsSectionRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsSectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const cardElements = cardsRef.current.querySelectorAll(".card-item");
      gsap.fromTo(
        cardElements,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, cardsSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-coffee-950">
      <Hero />

      <section
        ref={cardsSectionRef}
        className="py-20 lg:py-32 bg-coffee-950"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-amber-accent/10 text-amber-accent text-sm font-semibold rounded-full mb-4">
              Our Specialties
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-100 mb-4">
              Treats to Savor
            </h2>
            <p className="text-cream-300/70 text-lg max-w-2xl mx-auto">
              Handcrafted delights that pair perfectly with your favorite brew.
            </p>
          </div>

          <div
            ref={cardsRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {cards.map((item, index) => (
              <div key={index} className="card-item">
                <Card
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Feature />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

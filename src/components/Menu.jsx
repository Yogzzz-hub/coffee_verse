import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import strongCoffee from "../assets/menu-coffee.jpeg";

gsap.registerPlugin(ScrollTrigger);

function Menu() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  const menuItems = [
    { image: strongCoffee, title: "Cappuccino", description: "Rich espresso with velvety steamed milk", price: "250" },
    { image: strongCoffee, title: "Latte", description: "Smooth espresso with creamy milk layer", price: "280" },
    { image: strongCoffee, title: "Americano", description: "Bold espresso with hot water", price: "200" },
    { image: strongCoffee, title: "Mocha", description: "Espresso with chocolate and steamed milk", price: "320" },
    { image: strongCoffee, title: "Macchiato", description: "Espresso topped with foamed milk", price: "260" },
    { image: strongCoffee, title: "Flat White", description: "Velvety microfoam over double shot", price: "300" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const cards = cardsRef.current.querySelectorAll(".menu-card");
      gsap.fromTo(
        cards,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen pt-28 pb-20 bg-coffee-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-accent/10 text-amber-accent text-sm font-semibold rounded-full mb-4">
            Our Offerings
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-100 mb-4">
            Crafted for You
          </h1>
          <p className="text-cream-300/70 text-lg max-w-2xl mx-auto">
            Freshly brewed coffee and delightful treats, made with premium beans
            sourced from the world&apos;s finest regions.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="menu-card group relative overflow-hidden rounded-2xl glass transition-all duration-500 hover:shadow-2xl hover:shadow-amber-accent/10 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/50 to-transparent" />

                <div className="absolute top-4 right-4 px-3 py-1 bg-amber-accent/90 text-coffee-950 text-sm font-bold rounded-full">
                  {item.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-cream-100 mb-2 group-hover:text-amber-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-cream-300/70 text-sm leading-relaxed">
                  {item.description}
                </p>

                <button className="mt-4 w-full py-3 bg-amber-accent/10 text-amber-accent font-medium rounded-lg hover:bg-amber-accent hover:text-coffee-950 transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;

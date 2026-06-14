import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../assets/Cafe-PNG-Pic.png";

gsap.registerPlugin(ScrollTrigger);

function Feature() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        contentRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(imageRef.current, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: "🌿", title: "Ethically Sourced", desc: "Direct from sustainable farms" },
    { icon: "☕", title: "Freshly Roasted", desc: "Roasted to perfection daily" },
    { icon: "❤", title: "Crafted with Love", desc: "Every cup made with care" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-coffee-950 via-coffee-900/50 to-coffee-950"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            ref={imageRef}
            className="relative order-2 lg:order-1 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-accent/30 to-coffee-800/30 rounded-full blur-3xl" />
              <img
                src={heroImage}
                alt="Premium Coffee"
                loading="lazy"
                decoding="async"
                className="relative w-full h-full object-contain"
              />
            </div>
          </div>

          <div ref={contentRef} className="order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-amber-accent/10 text-amber-accent text-sm font-semibold rounded-full mb-6">
              Our Philosophy
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-100 leading-tight mb-6">
              More Than Just
              <span className="block text-gradient">A Cup of Coffee</span>
            </h2>

            <p className="text-cream-300/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Coffee is one of the most beloved drinks in the world, cherished
              for its rich aroma and energizing effect. Beyond being a beverage,
              it&apos;s a social experience shared during conversations and
              relaxing breaks.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-xl glass hover:bg-cream-100/10 transition-all duration-300"
                >
                  <span className="text-3xl mb-3 block">{feature.icon}</span>
                  <h4 className="font-display text-cream-100 font-semibold mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-cream-300/70 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;

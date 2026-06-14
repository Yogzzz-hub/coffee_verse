import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../assets/Cafe-PNG-Pic.png";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headingRef.current.children,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.3 }
      )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5 },
          "-=0.2"
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, x: 100, rotate: 5 },
          { opacity: 1, x: 0, rotate: 0, duration: 1 },
          "-=0.6"
        );

      gsap.to(imageRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-coffee-950"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-900/50 via-coffee-950 to-coffee-900/30" />

      <div className="absolute top-20 right-0 w-96 h-96 bg-amber-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cream-100/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 lg:pt-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1
              ref={headingRef}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream-100 leading-tight"
            >
              <span className="block">Sweet Moments</span>
              <span className="block text-gradient">Start Here</span>
            </h1>

            <p
              ref={subtextRef}
              className="mt-6 text-lg lg:text-xl text-cream-300 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Start your day with a perfect cup of coffee. Fresh aroma and rich
              taste in every sip, crafted with passion.
            </p>

            <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/menu"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-amber-accent text-coffee-950 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-accent/30"
              >
                <span className="relative z-10">Explore Our Menu</span>
                <span className="absolute inset-0 bg-amber-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>

              <Link
                to="/about"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-cream-200/30 text-cream-100 font-semibold rounded-full transition-all duration-300 hover:border-amber-accent hover:text-amber-accent"
              >
                Our Story
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div
              ref={imageRef}
              className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-accent/20 to-coffee-800/20 rounded-full blur-2xl" />
              <img
                src={heroImage}
                alt="Premium Coffee"
                className="relative w-full h-full object-contain drop-shadow-2xl"
              />
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full bg-cream-100/30"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cream-100/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import founderImage from "../assets/about girl image.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -100, opacity: 0, rotate: -5 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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
            toggleActions: "play none none reverse",
          },
        }
      );

      const stats = statsRef.current.querySelectorAll(".stat-item");
      gsap.fromTo(
        stats,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            ref={imageRef}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-accent/30 to-coffee-800/20 rounded-full blur-2xl" />
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-amber-accent/30">
                <img
                  src={founderImage}
                  alt="Sara - Founder"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-accent rounded-full flex items-center justify-center">
                <span className="text-coffee-950 font-display text-2xl font-bold">
                  10+
                </span>
              </div>
            </div>
          </div>

          <div ref={contentRef} className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-amber-accent/10 text-amber-accent text-sm font-semibold rounded-full mb-6">
              Our Story
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-100 leading-tight mb-6">
              Meet Our Founder
              <span className="block text-gradient mt-2">Sara</span>
            </h2>

            <p className="text-cream-300/80 text-lg leading-relaxed mb-6">
              Sara is the visionary founder behind Coffee Haven, where passion
              for coffee meets the art of creating memorable experiences. She
              holds a Ph.D. in Food Management, with research focused on food
              quality and sustainable sourcing.
            </p>

            <p className="text-cream-300/70 text-base leading-relaxed mb-8">
              During her academic journey, Sara traveled to coffee-growing
              regions, studying how culture and quality ingredients create the
              perfect cup. What began as research grew into a lifelong passion.
              Today, Coffee Haven continues to grow while staying true to
              Sara&apos;s vision of quality, innovation, and exceptional
              hospitality.
            </p>

            <div ref={statsRef} className="grid grid-cols-3 gap-6">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "50K+", label: "Happy Customers" },
                { value: "15+", label: "Coffee Varieties" },
              ].map((stat, index) => (
                <div key={index} className="stat-item text-center lg:text-left">
                  <div className="font-display text-2xl lg:text-3xl font-bold text-amber-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-cream-300/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: "🎯",
              title: "Our Mission",
              desc: "To create a welcoming space where every cup tells a story and every customer feels at home.",
            },
            {
              icon: "👁",
              title: "Our Vision",
              desc: "To become the world's most loved coffee destination, known for quality and exceptional hospitality.",
            },
            {
              icon: "💎",
              title: "Our Values",
              desc: "Quality, sustainability, innovation, and community at the heart of everything we do.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl glass text-center hover:bg-cream-100/10 transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h4 className="font-display text-cream-100 font-semibold text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-cream-300/70 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

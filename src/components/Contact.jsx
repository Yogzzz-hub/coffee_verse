import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPhone, FaGlobe, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        infoRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 98765 43210",
      color: "text-green-400",
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      value: "@coffee_haven",
      color: "text-pink-400",
    },
    {
      icon: <FaGlobe />,
      title: "Website",
      value: "www.coffeehaven.co",
      color: "text-blue-400",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "123 Coffee Lane, Downtown",
      color: "text-amber-accent",
    },
  ];

  return (
    <section ref={sectionRef} className="min-h-screen pt-28 pb-20 bg-coffee-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-accent/10 text-amber-accent text-sm font-semibold rounded-full mb-4">
            Get in Touch
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-100 mb-4">
            Contact Us
          </h1>
          <p className="text-cream-300/70 text-lg max-w-2xl mx-auto">
            Have questions or feedback? We&apos;d love to hear from you. Reach
            out and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div ref={formRef}>
            <div className="p-8 rounded-2xl glass">
              <h3 className="font-display text-2xl font-semibold text-cream-100 mb-6">
                Send us a Message
              </h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-cream-300/80 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-coffee-900/50 border border-cream-100/10 rounded-xl text-cream-100 placeholder-cream-300/40 focus:border-amber-accent focus:outline-none focus:ring-2 focus:ring-amber-accent/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-cream-300/80 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-coffee-900/50 border border-cream-100/10 rounded-xl text-cream-100 placeholder-cream-300/40 focus:border-amber-accent focus:outline-none focus:ring-2 focus:ring-amber-accent/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-cream-300/80 text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Tell us what's on your mind..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-coffee-900/50 border border-cream-100/10 rounded-xl text-cream-100 placeholder-cream-300/40 focus:border-amber-accent focus:outline-none focus:ring-2 focus:ring-amber-accent/20 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-amber-accent text-coffee-950 font-semibold rounded-xl hover:bg-amber-light transition-all duration-300 hover:shadow-lg hover:shadow-amber-accent/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold text-cream-100 mb-6">
              Connect With Us
            </h3>

            <div ref={infoRef} className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-5 rounded-xl glass hover:bg-cream-100/10 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-coffee-800 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-cream-300/60 text-sm uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-cream-100 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl glass">
              <h4 className="font-display text-cream-100 font-semibold mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-cream-300/80">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-amber-accent">7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="text-amber-accent">8:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

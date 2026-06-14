import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about" },
      { label: "Menu", path: "/menu" },
      { label: "Contact", path: "/contact" },
    ],
    social: [
      { icon: <FaInstagram />, label: "Instagram", href: "#" },
      { icon: <FaFacebook />, label: "Facebook", href: "#" },
      { icon: <FaTwitter />, label: "Twitter", href: "#" },
    ],
  };

  return (
    <footer className="bg-coffee-900 border-t border-cream-100/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <h2 className="font-display text-2xl text-cream-100 hover:text-amber-accent transition-colors duration-300">
                Coffee Haven
              </h2>
            </Link>
            <p className="mt-4 text-cream-300/70 text-sm leading-relaxed">
              Where passion for coffee meets the art of creating memorable
              experiences. Every cup tells a story.
            </p>
          </div>

          <div>
            <h4 className="font-display text-cream-100 font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream-300/70 hover:text-amber-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-cream-100 font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-cream-300/70 text-sm">
              <li>123 Coffee Lane, Downtown</li>
              <li>+91 98765 43210</li>
              <li>hello@coffeehaven.co</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-cream-100 font-semibold mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {footerLinks.social.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full bg-coffee-800 flex items-center justify-center text-cream-300/70 hover:bg-amber-accent hover:text-coffee-950 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-100/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream-300/50 text-sm">
            &copy; {currentYear} Coffee Haven. All rights reserved.
          </p>
          <p className="text-cream-300/50 text-sm">
            Crafted with passion and premium beans.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

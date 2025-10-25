// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-600 via-blue-600 to-teal-500 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-white/95">
        {/* About */}
        <div className="space-y-3 animate-fade-up">
          <h2 className="text-2xl font-extrabold tracking-wide bg-white text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
            MiniShop
          </h2>
          <p className="text-sm text-white/90 leading-relaxed">
            Hi 👋, I'm{" "}
            <span className="font-semibold text-amber-300">
              Muhammad Furqan
            </span>
            , a Front-End Developer passionate about crafting clean, modern, and
            responsive interfaces. This mini e-commerce site was built using{" "}
            <span className="font-semibold text-amber-300">
              React + Tailwind CSS
            </span>{" "}
            for a hackathon at SMIT Peshawar.
          </p>
        </div>

        {/*Quick Links */}
        <div className="space-y-3 animate-fade-up">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-white/90">
            <li>
              <Link to="/" className="hover:text-amber-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-amber-300 transition">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="hover:text-amber-300 transition">
                Checkout
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div className="space-y-3 animate-fade-up">
          <h3 className="text-lg font-semibold mb-2">Connect With Me</h3>
          <div className="flex gap-4 text-white/90">
            <a
              href="https://github.com/furqan934"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition flex items-center gap-2"
            >
              <Github size={22} />{" "}
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition flex items-center gap-2"
            >
              <Linkedin size={22} />{" "}
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="mailto:youremail@example.com"
              className="hover:text-amber-300 transition flex items-center gap-2"
            >
              <Mail size={22} /> <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* ⚡ Bottom Bar */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-white/80 backdrop-blur-sm animate-fade-in">
        &copy; {new Date().getFullYear()} — Built by{" "}
        <span className="font-semibold text-amber-300">Muhammad Furqan</span>.
        Made with  using React + Tailwind CSS.
      </div>
    </footer>
  );
}

export default Footer;

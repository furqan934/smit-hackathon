// src/components/ScrollToTopButton.jsx
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full text-white 
        bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 
        shadow-lg transition-all duration-300 
        hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-110 hover:brightness-110
        animate-bounce-slow
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <ArrowUp size={22} />
    </button>
  );
}

export default ScrollToTopButton;

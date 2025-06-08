import { useState, useEffect } from "react";
import "./../../styles/backToTop.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top ${isVisible ? "visible" : "hidden"}`}
    >
      <label className="back-to-top-label">Back to Top</label>
      <p className="back-to-top-arrow">&#8593;</p>
    </button>
  );
};

export default BackToTop;

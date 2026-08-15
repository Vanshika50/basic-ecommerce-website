  import React, { useState, useEffect } from "react";
  import { FaArrowUp } from "react-icons/fa";

  const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        // show button only after scrolling down 300px
        setShowButton(window.scrollY > 300);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!showButton) return null;

    return (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-1 bg-[#3f4237] text-white p-3 h-10 w-10 flex items-center justify-between z-10 rounded-full shadow-lg"
      >
        <FaArrowUp/>

      </button>
    );
  };

  export default ScrollToTop;

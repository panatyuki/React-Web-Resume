// Scroll to top button.

import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            border: "2px solid #3b82f6",
            cursor: "pointer",
          }}
          className="bg-blue-100 rounded-full hover:bg-blue-200 active:bg-blue-800"
        >
          <KeyboardArrowUpIcon style={{ fontSize: "40px" }} color="primary" />
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;


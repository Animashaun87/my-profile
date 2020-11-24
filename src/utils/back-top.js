import React, { useState, useEffect } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./styles/pages.css";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 170) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {visible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <ArrowUpOutlined title="Back to top" className="icon" />
        </div>
      )}
    </>
  );
}

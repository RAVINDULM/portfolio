import React, { useEffect, useRef } from "react";
import "./../styles/cursorOutline.css";

const CursorOutline = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return <div className="cursor-outline" ref={cursorRef}></div>;
};

export default CursorOutline;

"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

export default function Template({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <div>{children}</div>;
}

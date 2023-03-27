import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    setWindowSize(getWindowSize());
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return [windowSize];
}

function getWindowSize() {
  const { outerWidth, outerHeight } =
    typeof window !== "undefined" ? window : "undefined";
  console.log("Window width", outerWidth);
  return { outerWidth, outerHeight };
}

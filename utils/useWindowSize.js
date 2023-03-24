import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return [windowSize];
}

function getWindowSize() {
  const { outerWidth, outerHeight } =
    typeof window !== "undefined" ? window : "";
  return { outerWidth, outerHeight };
}

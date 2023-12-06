import { useEffect, useState } from "react";

/**The hook returns the screen siz as desktop or mobile based on an event listener */
export const useScreen = () => {
  const [currentScreen, setCurrentScreen] = useState<"desktop" | "mobile">(
    "desktop"
  );

  const handleResize = () => {
    if (window.innerWidth >= 426) {
      setCurrentScreen("desktop");
    } else {
      setCurrentScreen("mobile");
    }
  };

  useEffect(() => {
    window && handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { currentScreen };
};

export default useScreen;

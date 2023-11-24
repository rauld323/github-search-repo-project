import { useEffect } from "react";

const ScrollButton = () => {
  const goToTop = () => {
    const scrollDuration = 500;
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <button
      className="fixed bottom-24 right-12 z-10 h-12 w-12 cursor-pointer rounded-xl border bg-blue-500 text-2xl text-white hover:bg-blue-700 active:border-blue-500 active:bg-white active:text-blue-500  "
      onClick={() => goToTop()}
    >
      ↑
    </button>
  );
};

export default ScrollButton;

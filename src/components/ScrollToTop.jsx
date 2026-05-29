// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// function ScrollToTop() {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   return null;
// }

// export default ScrollToTop;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {

  const { pathname } = useLocation();

  useEffect(() => {

    // instant scroll
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // second forced scroll after render
    const timer = setTimeout(() => {

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });

    }, 100);

    return () => clearTimeout(timer);

  }, [pathname]);

  return null;
}

export default ScrollToTop;
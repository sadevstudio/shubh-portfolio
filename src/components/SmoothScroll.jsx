import { useEffect } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother
);

function SmoothScroll() {

  useEffect(() => {

    let smoother = ScrollSmoother.create({

  wrapper: "#smooth-wrapper",

  content: "#smooth-content",

  smooth: 3,

  smoothTouch: 0.1,

  effects: true,

  normalizeScroll: true,

  ignoreMobileResize: true,

  preventDefault: true,

});

    return () => {

      if (smoother) {
        smoother.kill();
      }

    };

  }, []);

  return null;
}

export default SmoothScroll;
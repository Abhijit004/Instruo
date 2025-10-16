import { useEffect, useRef } from "react";
import "./GlitchAnimator.css";

export default function GlitchAnimator({ text, styles = {} }) {
  const glitchRef = useRef(null);

  useEffect(() => {
    let timeoutId;

    function triggerGlitch() {
      if (!glitchRef.current) return;
      glitchRef.current.classList.add("active");

      // remove after ~1.6s
      setTimeout(() => {
        glitchRef.current?.classList.remove("active");

        // schedule next glitch (0.5–2s random)
        const nextDelay = Math.random() * 1500 + 500; // 500ms → 2000ms
        timeoutId = setTimeout(triggerGlitch, nextDelay);
      }, 1600);
    }

    // initial trigger after 1s
    timeoutId = setTimeout(triggerGlitch, 1000);

    return () => clearTimeout(timeoutId);
  }, [text]);

  return (
    <div ref={glitchRef} className="glitch" data-glitch={text} style={styles} >
      {text}
    </div>
  );
}

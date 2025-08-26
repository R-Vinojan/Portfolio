import { useEffect } from "react";

export default function useScrollReveal(selector = ".scroll-reveal") {
  useEffect(() => {
    const items = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${i * 0.2}s`;
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    items.forEach(el => observer.observe(el));
  }, [selector]);
}

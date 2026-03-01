"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useEffect(() => {
    // Hero parallax — background image drifts slower
    gsap.to(".hero-parallax", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Hero text fades out as you scroll past
    gsap.to(".hero-content", {
      opacity: 0,
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "60% top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Section headings slide in from left
    gsap.utils.toArray<HTMLElement>(".gsap-heading").forEach((el) => {
      gsap.from(el, {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // Cards stagger in
    gsap.utils.toArray<HTMLElement>(".gsap-card-group").forEach((group) => {
      const cards = group.querySelectorAll(".gsap-card");
      gsap.from(cards, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: group,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // Parallax images — subtle depth on scroll
    gsap.utils.toArray<HTMLElement>(".gsap-parallax-img").forEach((img) => {
      gsap.to(img, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Pull quote scale-in
    gsap.utils.toArray<HTMLElement>(".gsap-quote").forEach((el) => {
      gsap.from(el, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // Counter number roll-up
    gsap.utils.toArray<HTMLElement>(".gsap-counter").forEach((el) => {
      const target = parseFloat(el.dataset.target || "0");
      const decimals = parseInt(el.dataset.decimals || "0");
      gsap.from(el, {
        textContent: 0,
        duration: 1.5,
        ease: "power2.out",
        snap: { textContent: decimals ? 0.1 : 1 },
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: function () {
          const val = parseFloat(el.textContent || "0");
          el.textContent = decimals ? val.toFixed(decimals) : Math.round(val).toString();
        },
      });
    });

    // Horizontal line grow
    gsap.utils.toArray<HTMLElement>(".gsap-line-grow").forEach((el) => {
      gsap.from(el, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}

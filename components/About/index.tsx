"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ReactLenis from "lenis/react";
import Link from "next/link";
import { AboutStyles } from "./style";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    const scrollTriggerSettings = {
      trigger: ".main",
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    };

    const leftXValues = [-1400, -1600, -600]; // Your example
    const rightXValues = [1400, 1600, 600]; // Mirrored for symmetry
    const leftRotationValues = [-50, -45, -120]; // Larger rotations
    const rightRotationValues = [50, 45, 120]; // Mirrored rotations
    const yValues = [200, -300, -1000];

    // Animate cards in rows
    gsap.utils.toArray<HTMLElement>(".row").forEach((row, index) => {
      const cardLeft = row.querySelector<HTMLElement>(".card-left");
      const cardRight = row.querySelector<HTMLElement>(".card-right");
      const start = row.querySelector<HTMLElement>(".ekraw");

      if (cardLeft) {
        gsap.fromTo(
          cardLeft,
          { x: 0, y: 0, rotation: 0 },
          {
            x: leftXValues[index],
            y: yValues[index],
            rotation: leftRotationValues[index],
            scrollTrigger: {
              trigger: start,
              start: "30% bottom",
              end: "150% bottom", // End when 150% of .main height passes bottom
              scrub: true,
            },
          }
        );
      }

      if (cardRight) {
        gsap.to(cardRight, {
          x: rightXValues[index],
          y: yValues[index],
          rotation: rightRotationValues[index],
          scrollTrigger: {
            trigger: start,
            start: "30% bottom",
            end: "150% bottom", // End when 150% of .main height passes bottom
            scrub: true,
          },
        });
      }
    });

    gsap.to(".logo", {
      scale: 1,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: scrollTriggerSettings,
    });

    gsap.to(".line p", {
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: scrollTriggerSettings,
    });

    gsap.to("button", {
      y: 0,
      opacity: 1,
      delay: 0.25,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: scrollTriggerSettings,
    });

    // Horizontal scroll cards
    const scrollCards = gsap.utils.toArray<HTMLElement>(".scroll-card");
    const totalWidth = scrollCards.reduce(
      (acc, card) => acc + card.offsetWidth,
      0
    );

    gsap.to(".scroll-card-container", {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: ".card-scroll-section",
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    gsap.to(".bar", {
      delay: 3.5,
      height: 0,
      stagger: { amount: 0.5 },
      ease: "power4.inOut",
    });

    gsap.to(".ekraw", {
      delay: 2,
      opacity: 0,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i < 4; i++) {
      rows.push(
        <div key={i} className="row" style={AboutStyles.row}>
          <div className="card card-left" style={AboutStyles.card}>
            <img
              src={`/images/about/image-${2 * i - 1}.jpg`}
              alt=""
              style={AboutStyles.img} // Apply img styles here
            />
          </div>
          <div className="card card-right" style={AboutStyles.card}>
            <img
              src={`/images/about/image-${2 * i}.jpg`}
              alt=""
              style={AboutStyles.img} // Apply img styles here
            />
          </div>
        </div>
      );
    }
    return rows;
  };

  const generateBars = () => {
    const bars = [];
    for (let i = 1; i < 20; i++) {
      bars.push(
        <div
          key={i}
          style={{ background: "#0D0D0D", ...AboutStyles.bar }}
          className="bar"
        />
      );
    }
    return bars;
  };

  const generateScrollCards = () => {
    const cards = [];
    for (let i = 1; i <= 14; i++) {
      cards.push(
        <div key={i} className="scroll-card" style={AboutStyles.scrollCard}>
          <img
            src={`/images/about/scroll-img-${i}.jpg`}
            alt={`Scroll Card ${i}`}
            style={AboutStyles["scrollCard img"]}
          />
        </div>
      );
    }
    return cards;
  };

  return (
    <div>
      <div style={AboutStyles.overlay} className="overlay">
        {generateBars()}
      </div>
      <div style={AboutStyles.ekraw} className="ekraw">
        <img src="/bg/dark-mode.png" alt="" style={AboutStyles["ekraw img"]} />
      </div>
      <div style={AboutStyles.content} className="content">
        <section style={AboutStyles.main} className="main">
          <div style={AboutStyles.mainContent} className="main-content">
            <div style={AboutStyles.logo} className="logo">
              <img src="/facebook.png" alt="facebook" style={AboutStyles.img} />
            </div>
            <div style={AboutStyles.copy} className="copy">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={AboutStyles.line} className="line">
                  <p style={AboutStyles["line p"]}>
                    Delve into coding without clutter.
                  </p>
                </div>
              ))}
            </div>
            <div style={AboutStyles.button} className="button">
              <button style={AboutStyles.button}>Get PRO</button>
            </div>
          </div>
          {generateRows()}
        </section>
        <section
          style={AboutStyles.cardScrollSection}
          className="card-scroll-section"
        >
          <div
            style={AboutStyles.scrollCardContainer}
            className="scroll-card-container"
          >
            {generateScrollCards()}
          </div>
        </section>
      </div>
    </div>
  );
}

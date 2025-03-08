"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AboutStyles } from "./style";
import Image from "next/image";
import AboutReveal from "./AboutReveal";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    const leftXValues = [-1700, -1800, -800]; // Your example
    const rightXValues = [1700, 1800, 800]; // Mirrored for symmetry
    const leftRotationValues = [-50, -45, -120]; // Larger rotations
    const rightRotationValues = [50, 45, 120]; // Mirrored rotations
    const yValues = [200, -300, -1000];

    // Animate cards in rows
    gsap.utils.toArray<HTMLElement>(".row").forEach((row, index) => {
      const cardLeft = row.querySelector<HTMLElement>(".card-left");
      const cardRight = row.querySelector<HTMLElement>(".card-right");
      const start = row.querySelector<HTMLElement>(".content");

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
            <Image
              src={`/images/about/image-${2 * i - 1}.jpg`}
              alt=""
              width={0} // Required for Next.js Image - set appropriate width
              height={0} // Required for Next.js Image - set appropriate height
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              sizes="100vw" // Optional: helps with responsive images
            />
          </div>
          <div className="card card-right" style={AboutStyles.card}>
            <Image
              src={`/images/about/image-${2 * i}.jpg`}
              alt=""
              width={0} // Required for Next.js Image - set appropriate width
              height={0} // Required for Next.js Image - set appropriate height
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              sizes="100vw" // Optional: helps with responsive images
            />
          </div>
        </div>
      );
    }
    return rows;
  };

  const generateScrollCards = () => {
    const cards = [];
    for (let i = 1; i <= 14; i++) {
      cards.push(
        <div key={i} className="scroll-card" style={AboutStyles.scrollCard}>
          <Image
            src={`/images/about/scroll-img-${i}.jpg`}
            alt=""
            width={0} // Required for Next.js Image - set appropriate width
            height={0} // Required for Next.js Image - set appropriate height
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            sizes="100vw" // Optional: helps with responsive images
          />
        </div>
      );
    }
    return cards;
  };

  return (
    <div>
      <div style={AboutStyles.content} className="content">
        <section style={AboutStyles.main} className="main z-40">
          {generateRows()}
        </section>
        <AboutReveal />
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

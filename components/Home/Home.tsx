import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import Testimonial from "../Testimonial/Testimonial";
import Advantages from "./Advatanges/Advantages";
import Video from "../Video";
import Mission from "../Mission";
import Team from "../Team/Team";
import Blog from "../Blog";
// Images import
import stacks from "../../public/image.png";
import bgHome from "../../public/hero_1.jpg";
import heroMan from "../../public/hero_2_1.jpeg";
import imgApp from "../../public/app-process.webp";
import Services from "../Services/Services";
import ChatBot from "../ChatBot/ChatBot";
import ScrollToTop from "../ScrollToTop";
import { motion } from "framer-motion";
import { once } from "events";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import HeroSection from "./HeroSection";
import WhyChooseUs from "../WhyShooseUs/WhyShooseUs";
import ServicesSection from "../Services/Services";
import About from "../About";

export const Home = () => {
  return (
    <>
      <section className="main">
        <HeroSection />
        {/* <WhyChooseUs /> */}
        <ServicesSection />
        <div className="flex w-full gap-0">
          <motion.div
            className="ml-auto"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: "easeInOut" }}
          >
            <Image
              src={imgApp}
              style={{
                maxWidth: "80%",
                height: "auto",
              }}
              className="drop-shadow-2xl"
              alt="Hero home bg"
            />
          </motion.div>
          <Advantages />
        </div>
      </section>
      <section className="about">
        <About />
      </section>
      <motion.section
        className="Projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.75, ease: "easeInOut" }}
      >
        <Video />
      </motion.section>
      <section className="they-trust-us">
        <Mission />
      </section>

      <section className="testimonials">
        <Testimonial />
      </section>

      <section className="services">
        <Blog />
      </section>

      {/* <section className="teams">
        <Team />
      </section> */}

      <section className="pt-28 md:pt-28 lg:pt-28 relative flex justify-center w-full items-center sm:mt-15 sm:px-20 z-20">
        <div className="flex flex-col bg-slate-500/20 rounded-lg p-3 sm:p-10">
          <h2 className="ml-0 text-xl mb-4 w-full flex-grow">
            Get the latest news
          </h2>
          <p className="text-pretty text-muted-foreground w-full flex-grow">
            Keep up with innovation, trends, opportunities meet, and upcoming
            events.
          </p>
          <div className="flex flex-row  mt-4 ">
            <div className="flex w-full items-center space-x-2 sm:space-x-8 shrink grow">
              <Input
                type="email"
                className="lg:w-[448px] py-[24px] sm:py-7"
                placeholder="Enter your email"
              />
              <Button
                type="submit"
                className="bg-secondary sm:py-7"
                size={"lg"}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ChatBot />
        <ScrollToTop />
      </section>
    </>
  );
};

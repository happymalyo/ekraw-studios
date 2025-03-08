"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import heroBot from "../../public/hero_2.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen  pt-10 flex items-start justify-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl">
        {/* Text Content */}
        <motion.div
          className="text-center lg:text-left space-y-6 flex flex-col justify-center text-foreground"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm tracking-wide uppercase">
            Ekraw Studios - Votre Partenaire Numérique
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-balance max-w-lg mx-auto lg:mx-0">
            Vos idées en solutions digitales innovantes
          </h1>
          <ul className="space-y-4">
            {[
              "100% Satisfaction client",
              "20+ Technologies maîtrisées",
              "Solutions IA sur mesure",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center lg:justify-start gap-3 text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
              >
                <FaCheckCircle className="text-accent text-xl flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md shadow-lg hover:bg-[#d1254e] hover:scale-105 transition-all duration-300"
              >
                Commencez votre projet
                <FaArrowRight />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/10 hover:scale-105 transition-all duration-300"
              >
                Découvrez nos services
              </a>
            </motion.div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground italic text-center lg:text-left">
            Pas de carte de crédit requise | Démarrage rapide | Accès complet
            aux produits
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={heroBot}
            layout="responsive"
            width={400}
            height={400}
            objectFit="contain"
            className="drop-shadow-2xl max-h-full w-auto mx-auto"
            alt="Hero home bg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

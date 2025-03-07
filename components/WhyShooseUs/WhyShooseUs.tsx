import { FaLightbulb, FaCogs, FaHandshake } from "react-icons/fa"; // Icons for each column
import Image from "next/image"; // Assuming you're using Next.js for images
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div className="bg-[hsl(var(--background))] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Innovation */}
          <motion.div
            className="p-6 bg-[hsl(var(--accent))] rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <FaLightbulb className="text-5xl text-[hsl(var(--secondary))]" />{" "}
              {/* Icon */}
            </div>
            <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-4">
              Innovation Technologique
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-4">
              Nous utilisons les dernières technologies pour vous offrir des
              solutions à la pointe de l'innovation.
            </p>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/600/500" // Placeholder image with dimensions 200x150
                alt="Innovation Technologique"
                width={200}
                height={150}
                className="rounded-lg"
              />
            </div>
          </motion.div>

          {/* Column 2: Expertise */}
          <motion.div
            className="p-6 bg-[hsl(var(--accent))] rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <FaCogs className="text-5xl text-[hsl(var(--secondary))]" />{" "}
              {/* Icon */}
            </div>
            <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-4">
              Expertise Technique
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-4">
              Notre équipe d'experts maîtrise les technologies les plus récentes
              pour répondre à vos besoins.
            </p>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/200/150" // Placeholder image with dimensions 200x150
                alt="Expertise Technique"
                width={200}
                height={150}
                className="rounded-lg"
              />
            </div>
          </motion.div>

          {/* Column 3: Collaboration */}
          <motion.div
            className="p-6 bg-[hsl(var(--accent))] rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <FaHandshake className="text-5xl text-[hsl(var(--secondary))]" />{" "}
              {/* Icon */}
            </div>
            <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-4">
              Collaboration Étroite
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-4">
              Nous travaillons main dans la main avec vous pour comprendre vos
              besoins et livrer des résultats exceptionnels.
            </p>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/200/150" // Placeholder image with dimensions 200x150
                alt="Collaboration Étroite"
                width={200}
                height={150}
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

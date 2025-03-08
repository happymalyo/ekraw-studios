import {
  FaCode,
  FaMobileAlt,
  FaShoppingCart,
  FaRobot,
  FaPalette,
  FaBrush,
} from "react-icons/fa"; // Icônes pour chaque service
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl text-[hsl(var(--secondary))]" />,
      title: "Développement Web sur Mesure",
      description:
        "Des solutions web personnalisées pour répondre à vos besoins spécifiques.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[hsl(var(--secondary))]" />,
      title: "Développement d'Applications Mobiles",
      description:
        "Applications mobiles performantes et intuitives pour iOS et Android.",
    },
    {
      icon: (
        <FaShoppingCart className="text-4xl text-[hsl(var(--secondary))]" />
      ),
      title: "Création de Boutiques e-Commerce",
      description:
        "Des plateformes e-commerce puissantes pour booster vos ventes en ligne.",
    },
    {
      icon: <FaRobot className="text-4xl text-[hsl(var(--secondary))]" />,
      title: "Intégration de LLMs et Chatbots Intelligents",
      description:
        "Des chatbots personnalisés et intelligents pour automatiser vos interactions clients.",
    },
    {
      icon: <FaPalette className="text-4xl text-[hsl(var(--secondary))]" />,
      title: "Web Design",
      description:
        "Des designs modernes et attractifs pour une expérience utilisateur optimale.",
    },
    {
      icon: <FaBrush className="text-4xl text-[hsl(var(--secondary))]" />,
      title: "Création d'Identité Visuelle",
      description:
        "Une identité visuelle unique et cohérente pour renforcer votre image de marque.",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--foreground))] text-center mb-12">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold  text-center mb-4">
                {service.title}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

import Link from "next/link";
import { motion } from 'framer-motion';

export default function CausesSection() {
  const services = [
    {
      title: "Plantation Drives",
      image: "/causes/1.jpg",
      description:
        "We aim to combat climate change and restore ecological balance through widespread tree plantation. Every tree planted is a step toward a greener, healthier tomorrow.",
      href: "/services/architecture",
    },
    {
      title: "Dignified Marriages for Underprivileged Girls",
      image: "/causes/2.jpg",
      description:
        "Many families struggle to arrange basic necessities for their daughters' weddings. We provide essential ration and support to ensure these young women start their new lives with dignity and hope.",
      href: "/services/interior-design",
    },
    {
      title: "Say No to Drugs: Awareness Campaigns",
      image: "/causes/3.jpg",
      description:
        "Addiction destroys lives silently. Our drug awareness programs in schools, colleges, and public areas aim to educate youth and communities about the dangers of substance abuse.",
      href: "/services/construction-management",
    },
  ];

  return (
    <section className="max-w-screen mx-auto bg-white py-10 md:py-16 px-6 md:px-28">
      <div className="md:text-center mb-12">
        <motion.span
          className="bg-orange-100 text-orange-500 font-medium px-5 py-2 rounded-full "
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Feature Causes
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mt-10 text-gray-900"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Causes We Support
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.img
              src={service.image}
              alt="service"
              className="w-full h-64 object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-6 flex flex-col flex-1 h-full">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-md">{service.description}</p>
              <Link
                href="/causes"
                className="mt-auto text-sm text-gray-900 hover:text-orange-500 font-bold hover:underline"
              >
                Learn more ➔
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

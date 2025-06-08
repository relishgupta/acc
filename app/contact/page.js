"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebookF, FaMapMarkedAlt } from "react-icons/fa";
import Link from "next/link";
import PageHeading from "@/components/PageHeading";

const contactDetails = [
  {
    label: "Call Us",
    value: "+91 9622360431",
    link: "tel:+919622360431",
    icon: <FaPhoneAlt className="text-orange-500 text-2xl group-hover:scale-125 transition-transform duration-300" />,
  },
  {
    label: "Email",
    value: "anmolculturalclub@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&to=anmolculturalclub@gmail.com",
    icon: <FaEnvelope className="text-orange-500 text-2xl group-hover:scale-125 transition-transform duration-300" />,
  },
  {
    label: "WhatsApp",
    value: "Chat with us",
    link: "https://wa.me/919622360431",
    icon: <FaWhatsapp className="text-orange-500 text-2xl group-hover:scale-125 transition-transform duration-300" />,
  },
  {
    label: "Instagram",
    value: "@anmolculturalclub",
    link: "https://instagram.com/anmolculturalclub",
    icon: <FaInstagram className="text-orange-500 text-2xl group-hover:scale-125 transition-transform duration-300" />,
  },
  {
    label: "Facebook",
    value: "@anmolnewsindia",
    link: "https://facebook.com/anmolnewsindia",
    icon: <FaFacebookF className="text-orange-500 text-2xl group-hover:scale-125 transition-transform duration-300" />,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeading title="Contact us" breadcrumbs={["Contact"]} />
      <div className="bg-gradient-to-br from-white via-gray-100 to-white min-h-screen py-16 md:py-20 px-6 md:px-16 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:text-center mb-12"
        >
          <button className="bg-orange-100 text-orange-500 font-medium px-5 py-2 rounded-full mb-4">
            Contact Us
          </button>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Get in Touch</h1>
          <p className="text-gray-500 mt-4 text-lg">We’re here to support and connect with you.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">

          {/* Contact Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="space-y-6"
          >
            {contactDetails.map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="group flex items-center gap-5 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <div className="bg-gray-100 p-4 rounded-full shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.label}</h3>
                  <Link href={item.link} target="_blank">
                    <p className="text-gray-600 hover:text-orange-500 transition">{item.value}</p>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Embedded Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.5823365757656!2d74.444666875133!3d33.04113247044267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e455e81205219%3A0xbf80fa735032b45c!2sAnmol%20Cultural%20Club!5e0!3m2!1sen!2sin!4v1749372658238!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-none"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </>
  );
}


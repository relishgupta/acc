"use client";
import Causes from "@/components/Causes";
import PageHeading from "@/components/PageHeading";
import { motion } from "framer-motion";

const causes = [
  {
    title: "Plantation Drive",
    description:
      "Before our initiative, barren and neglected lands surrounded the community, leading to dust and poor air quality. Our NGO transformed these areas by planting 5,000+ trees and educating locals about environmental care.",
    donationText: "Support us in making the Earth greener!",
    images: [
      "/causes/plantation/1.jpg",
      "/causes/plantation/3.jpg",
      "/causes/plantation/9.jpg",
      "/causes/plantation/11.jpg",
      "/causes/plantation/15.jpg",
    ],
  },
  {
    title: "Dignified Marriages for Underprivileged Girls",
    description:
      "Many families couldn’t afford weddings, leading to lifelong delays and despair. Our NGO helped organize dignified, culturally respectful marriages for dozens of young women with all essentials provided.",
    donationText: "Help us create new beginnings for these girls.",
    images: [
      "/causes/ration/1.jpg",
      "/causes/ration/6.jpg",
      "/causes/ration/7.jpg",
      "/causes/ration/8.jpg",
      "/causes/ration/10.jpg",
    ],
  },
  {
    title: "Blood Donation Camps",
    description:
      "In rural hospitals, blood shortages endangered countless lives. We organized high-impact camps, collecting thousands of units to ensure emergency needs were met.",
    donationText: "Be the reason someone lives — support our blood drives.",
    images: [
      "/causes/bloodcamp/1.jpg",
      "/causes/bloodcamp/2.jpg",
    ],
  },
  {
    title: "Forest Fire Response",
    description:
      "Fires ravaged vast green zones, displacing wildlife and threatening homes. Our team provided food, fire relief, and rehabilitation for both nature and nearby communities.",
    donationText: "Join hands to restore what nature lost.",
    images: [
      "/causes/forestfire/1.jpg",
      "/causes/forestfire/2.jpg",
      "/causes/forestfire/3.jpg",
      "/causes/forestfire/4.jpg",
      "/causes/forestfire/5.jpg",
    ],
  },
  {
    title: "Food Distribution to Yatris & Needy",
    description:
      "During pilgrimage seasons and crises, many were left hungry. We distributed thousands of meals and water bottles to yatris and the poor with dignity and care.",
    donationText: "Feed a soul, earn a blessing.",
    images: [
      "/causes/food/1.jpg",
      "/causes/food/3.jpg",
      "/causes/food/9.jpg",
      "/causes/food/4.jpg",
      "/causes/food/5.jpg",
    ],
  },
];

export default function CausesPage() {
  return (
    <>
      <PageHeading title="Causes" breadcrumbs={["Causes"]} />
      <div className="bg-white">
        {causes.map((cause, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Causes
              title={cause.title}
              description={cause.description}
              donationText={cause.donationText}
              images={cause.images}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}

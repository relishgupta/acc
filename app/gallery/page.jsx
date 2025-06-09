'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHeading from '@/components/PageHeading';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const tabs = ['Causes', 'Media Coverage', 'Documents'];

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('Causes');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);

  const documentImages = Array.from({ length: 14 }, (_, i) => `/docs/doc${i + 1}.jpg`);

  const mediaCoverageImages = Array.from({ length: 43 }, (_, i) => `/news/news${i + 1}.jpg`);

  const causes = [
    {
      title: 'Plantation Drive',
      images: [
        '/causes/plantation/1.jpg',
        '/causes/plantation/2.jpg',
        '/causes/plantation/3.jpg',
        '/causes/plantation/4.jpg',
        '/causes/plantation/5.jpg',
        '/causes/plantation/6.jpg',
        '/causes/plantation/7.jpg',
        '/causes/plantation/8.jpg',
        '/causes/plantation/9.jpg',
        '/causes/plantation/10.jpg',
        '/causes/plantation/11.jpg',
        '/causes/plantation/12.jpg',
        '/causes/plantation/13.jpg',
        '/causes/plantation/14.jpg',
        '/causes/plantation/15.jpg',
        '/causes/plantation/16.jpg',
        '/causes/plantation/17.jpg',
      ],
    },
    {
      title: 'Forest Fire Response',
      images: [
        '/causes/forestfire/1.jpg',
        '/causes/forestfire/2.jpg',
        '/causes/forestfire/3.jpg',
        '/causes/forestfire/4.jpg',
        '/causes/forestfire/5.jpg',
      ],
    },
    {
      title: 'Ration Distribution',
      images: [
        '/causes/ration/1.jpg',
        '/causes/ration/2.jpg',
        '/causes/ration/3.jpg',
        '/causes/ration/4.jpg',
        '/causes/ration/5.jpg',
        '/causes/ration/6.jpg',
        '/causes/ration/7.jpg',
        '/causes/ration/8.jpg',
        '/causes/ration/9.jpg',
        '/causes/ration/10.jpg',
      ],
    },
    {
      title: 'Blood Donation Camp',
      images: ['/causes/bloodcamp/1.jpg', '/causes/bloodcamp/2.jpg'],
    },
    {
      title: 'Food for All',
      images: [
        '/causes/food/1.jpg',
        '/causes/food/2.jpg',
        '/causes/food/3.jpg',
        '/causes/food/4.jpg',
        '/causes/food/5.jpg',
        '/causes/food/6.jpg',
        '/causes/food/7.jpg',
        '/causes/food/8.jpg',
        '/causes/food/9.jpg',
      ],
    },
  ];

  const openLightbox = (images, index) => {
    setLightboxImages(images.map(src => ({ src })));
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const renderImages = (images) => (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {images.map((src, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="overflow-hidden shadow-lg cursor-pointer"
          onClick={() => openLightbox(images, i)}
        >
          <div className="aspect-[16/9] relative w-full h-56 md:h-64">
            <Image
              src={src}
              alt={`gallery-${i}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  )

  return (
    <>
      <PageHeading title="Gallery" breadcrumbs={["Gallery"]} />
      {/* Sticky Tabs - full width */}
      <div
        className="sticky top-16 z-20 w-full left-0 inset-x-0 flex justify-center gap-4 bg-white py-4 md:py-6"
        style={{ marginLeft: 0, marginRight: 0 }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 cursor-pointer text-sm font-medium rounded-md transition-colors ${activeTab === tab ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800 cursor-pointer'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Content with padding */}
      <div className="px-4 md:px-28 pb-6 pt-2 md:pt-1 bg-white">
        {/* Tab Content */}
        <div>
          {activeTab === 'Documents' && renderImages(documentImages)}
          {activeTab === 'Media Coverage' && renderImages(mediaCoverageImages)}
          {activeTab === 'Causes' && (
            <div className="space-y-12">
              {causes.map((cause, index) => (
                <div key={index}>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight md:text-center">{cause.title}</h2>
                  {renderImages(cause.images)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxImages}
        index={lightboxIndex}
        on={{
          view: ({ index }) => setLightboxIndex(index),
        }}
        styles={{
          container: { background: "rgba(0,0,0,0.7)" }
        }}
      />
    </>
  );
};

export default GalleryPage;
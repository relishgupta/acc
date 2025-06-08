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
      images: ['/causes/plant1.jpg', '/causes/plant2.jpg'],
    },
    {
      title: 'Food Distribution',
      images: ['/causes/food1.jpg', '/causes/food2.jpg'],
    },
    {
      title: 'Blood Donation Camp',
      images: ['/causes/blood1.jpg', '/causes/blood2.jpg'],
    },
  ];

  const openLightbox = (images, index) => {
    setLightboxImages(images.map(src => ({ src })));
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const renderImages = (images) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {images.map((src, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
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
    </div>
  );

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
                  <h2 className="text-xl font-semibold text-gray-700 ">{cause.title}</h2>
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
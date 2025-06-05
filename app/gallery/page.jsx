
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHeading from '@/components/PageHeading';

const tabs = ['Documents', 'Newspaper', 'Causes'];

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('Documents');

  const documentImages = [
    '/docs/doc1.jpg',
    '/docs/doc2.jpg',
    '/docs/doc3.jpg',
    '/docs/doc4.jpg',
    '/docs/doc5.jpg',
    '/docs/doc6.jpg',
    '/docs/doc7.jpg',
    '/docs/doc8.jpg',
    '/docs/doc9.jpg',
    '/docs/doc10.jpg',
    '/docs/doc11.jpg',
    '/docs/doc12.jpg',
    '/docs/doc13.jpg',
    '/docs/doc14.jpg',
  ];

  const newspaperImages = ['/news/news1.jpg', '/news/news2.jpg'];
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

  const renderImages = (images) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {images.map((src, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
          className="overflow-hidden shadow-lg"
        >
          <Image
            src={src}
            alt={`gallery-${i}`}
            width={500}
            height={300}
            className="w-full h-64 object-cover"
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <>
      <PageHeading title="Gallery" breadcrumbs={["Gallery"]} />
      <div className="px-4 md:px-28 py-16 bg-white">
        {/* <h1 className="text-3xl font-bold text-center mb-10">Our Gallery</h1> */}

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
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

        {/* Tab Content */}
        <div>
          {activeTab === 'Documents' && renderImages(documentImages)}

          {activeTab === 'Newspaper' && renderImages(newspaperImages)}

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
    </>
  );
};

export default GalleryPage;

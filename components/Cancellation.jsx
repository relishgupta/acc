import React from 'react';

const RefundAndCancelltion = () => {
  return (
    <div className="container mx-auto px-6 lg:px-40 py-12 pt-28 bg-white">
      <div className="bg-white shadow-xl p-6 lg:p-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Refund and Cancellation</h1>

        <div className="text-gray-900 space-y-8">
          <p>
          Refund and Cancellation policy is not applicable as this is an NGO and we are accepting donations from donors.
          </p>
          <p>
              If you have any questions or concerns about these, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Anmol Cultural Club</strong><br />
              Office at, Village Ainpur, Tehsil, Sunderbani, Thanda Pani, Jammu and Kashmir 185153<br />
              +91 9622360431<br />
              <a href="mailto:anmolculturalclub@gmail.com" className="text-orange-500">anmolculturalclub@gmail.com</a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default RefundAndCancelltion;

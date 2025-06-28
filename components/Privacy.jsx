import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-6 lg:px-40 py-12 pt-28 bg-white">
      <div className="bg-white shadow-xl p-6 lg:p-10">
        <h1 className="text-4xl md:text-5xl text-gray-900 font-bold mb-8">Privacy Policy</h1>
        <div className="text-gray-900 space-y-8">
          <p>
            Welcome to Anmol Cultural Club. We are committed to protecting the privacy of our donors, volunteers, and website visitors. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your personal information when you visit our website or engage with us in other ways.
          </p>
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>
                <strong>Personal Information:</strong> This includes your name, email address, phone number, and other contact details provided when you make a donation.
              </li>
              <li>
                <strong>Payment Information:</strong> If you make a donation, we collect payment information, including credit/debit card details, through secure payment gateways.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>To process donations and issue receipts.</li>
              <li>To communicate with you regarding our activities, events, and updates.</li>
              <li>To provide you with information you have requested.</li>
              <li>To improve our website, services, and outreach.</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in our operations, such as payment processors, email service providers, and event organizers. These third parties are bound by confidentiality agreements and are prohibited from using your information for any purpose other than providing services to Anmol Cultural Club.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. We encourage you to take precautions to protect your personal information when using the internet.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Access and receive a copy of the personal information we hold about you.</li>
              <li>Request the correction of inaccurate information.</li>
              <li>Request the deletion of your personal information under certain conditions.</li>
              <li>Opt-out of receiving communications from us at any time.</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at <a href="mailto:anmolculturalclub@gmail.com" className="text-orange-500">anmolculturalclub@gmail.com</a>.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this policy periodically for any updates.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p>
              If you have any questions or concerns about our Privacy Policy, please contact us at:
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
    </div>
  );
};

export default PrivacyPolicy;

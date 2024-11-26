import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
        <p className="text-gray-400 mb-8 text-center">
          Last Updated: November 26, 2024
        </p>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p className="text-gray-400 leading-7">
              At the Computer Club, your privacy is important to us. This policy
              outlines how we collect, use, and protect your personal
              information.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <p className="text-gray-400 leading-7">
              We collect personal details such as name, email address, and
              contact information during membership registration or event
              sign-ups. Additionally, non-personal information, such as
              browser type and usage patterns, may be collected for
              analytical purposes.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>To manage memberships and event registrations</li>
              <li>To communicate important updates and announcements</li>
              <li>To improve our services and offerings</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
            <p className="text-gray-400 leading-7">
              We implement strict security measures to protect your personal
              information. However, no system is entirely secure, and we cannot
              guarantee absolute protection against data breaches.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400 leading-7">
              If you have questions or concerns about our privacy practices,
              please contact us at privacy@computerclub.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

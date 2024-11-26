import React from "react";

const TermsAndServices = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          Terms and Services
        </h1>
        <p className="text-gray-400 mb-8 text-center">
          Effective Date: November 26, 2024
        </p>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Introduction
            </h2>
            <p className="text-gray-400 leading-7">
              Welcome to the Computer Club! By accessing our services, you agree
              to comply with and be bound by these Terms and Services. Please
              read them carefully before engaging with our content, website, or
              events.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Membership and Conduct
            </h2>
            <p className="text-gray-400 leading-7">
              Membership in the Computer Club is open to all enthusiasts,
              professionals, and learners. Members are expected to conduct
              themselves respectfully and adhere to all club guidelines and
              policies. Misconduct, including harassment or inappropriate
              behavior, may result in suspension or termination of membership.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Services and Content
            </h2>
            <p className="text-gray-400 leading-7">
              Our club offers various resources, including workshops, tutorials,
              and networking events. All content is intended for personal and
              educational use. Unauthorized use, reproduction, or distribution
              of our materials is strictly prohibited.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-400 leading-7">
              The Computer Club is not responsible for any damages or losses
              arising from the use of our services. Participation in events and
              activities is at your own risk.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Changes to Terms
            </h2>
            <p className="text-gray-400 leading-7">
              We reserve the right to update these Terms and Services at any
              time. Members will be notified of significant changes via email or
              through announcements on our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndServices;

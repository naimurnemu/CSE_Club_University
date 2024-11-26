import React from "react";

const CookiePolicy = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Cookie Policy</h1>
        <p className="text-gray-400 mb-8 text-center">
          Updated: November 26, 2024
        </p>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p className="text-gray-400 leading-7">
              Our website uses cookies to enhance your experience. By
              continuing to use our website, you agree to the use of cookies as
              described in this policy.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
            <p className="text-gray-400 leading-7">
              Cookies are small files placed on your device that help us
              understand user preferences and improve our website's
              functionality.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for basic website
                operations.
              </li>
              <li>
                <strong>Analytical Cookies:</strong> Help us analyze website
                traffic and user behavior.
              </li>
              <li>
                <strong>Preference Cookies:</strong> Store user preferences
                like language and theme.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Managing Cookies</h2>
            <p className="text-gray-400 leading-7">
              You can manage cookies through your browser settings. Disabling
              cookies may impact your experience on our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;

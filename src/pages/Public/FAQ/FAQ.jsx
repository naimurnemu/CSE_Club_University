import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the City University Computer Club?",
      answer:
        "The City University Computer Club is a community for tech enthusiasts focused on learning, collaboration, and innovation. We organize workshops, hackathons, and tech events to help students grow their skills.",
    },
    {
      question: "Who can join the club?",
      answer:
        "Anyone studying at City University who is passionate about technology and eager to learn is welcome to join the club, regardless of skill level or background.",
    },
    {
      question: "What kind of activities does the club organize?",
      answer:
        "We host a variety of activities, including coding competitions, tech talks, workshops on web and app development, and collaborative projects to solve real-world problems.",
    },
    {
      question: "How can I stay updated on club activities?",
      answer:
        "You can follow our social media pages, join our official group chats, or regularly check our website for announcements and updates.",
    },
    {
      question: "Do I need prior experience to join the club?",
      answer:
        "No prior experience is necessary! We welcome beginners and provide resources and guidance to help you learn and grow in your tech journey.",
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-200 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden shadow-md bg-gray-800"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="text-lg font-medium text-gray-200">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-400 font-bold border-t border-gray-700 bg-gray-900">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

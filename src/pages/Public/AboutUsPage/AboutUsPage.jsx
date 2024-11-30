import React from "react";

const AboutUsPage = () => {
  return (
    <div className="py-10 text-opacity-50 px-3 md:px-5 max-w-7xl mx-auto">
      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#2a5d98] px-3 md:px-5 w-full text-white text-center py-6">
          <h1 className="text-3xl font-bold">City University Computer Club</h1>
          <p className="mt-2 text-lg">Empowering Innovation and Learning</p>
        </div>
        <div className="py-4 px-5 md:px-5">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white">Who We Are</h2>
            <p className="mt-4 text-white leading-relaxed">
              The City University Computer Club (CUCC) is a vibrant community
              of tech enthusiasts, programmers, and innovators. We are dedicated to fostering a culture of 
              learning, collaboration, and creativity among students of the Department of Computer Science and Engineering.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
            <p className="mt-4 text-white leading-relaxed">
              Our mission is to inspire and empower students to explore the
              limitless possibilities of technology. By organizing workshops,
              coding challenges, hackathons, and seminars, we aim to bridge the
              gap between theoretical knowledge and practical application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white">What We Do</h2>
            <ul className="list-disc pl-5 mt-4 text-white leading-relaxed">
              <li>
                Organize workshops on programming languages, web development,
                and emerging technologies.
              </li>
              <li>
                Conduct coding competitions and hackathons to challenge
                students' problem-solving skills.
              </li>
              <li>
                Host tech talks and seminars featuring industry professionals
                and alumni.
              </li>
              <li>
                Collaborate on projects that address real-world problems and
                contribute to the open-source community.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white">Why Join Us?</h2>
            <p className="mt-4 text-white leading-relaxed">
              Joining CUCC means becoming part of a dynamic community that
              shares a passion for technology. Whether you're a beginner looking
              to learn or an expert eager to share your knowledge, there's a
              place for you in our club.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white">Get Involved</h2>
            <p className="mt-4 text-white leading-relaxed">
              Stay updated on our latest events and activities by following us
              on social media or visiting our official website. Together, let's
              create a future driven by innovation and creativity!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

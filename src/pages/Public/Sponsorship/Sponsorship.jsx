import React from "react";

const sponsorships = [
  { id: 1, name: "Gold Sponsorship", description: "Premium support for club activities." },
  { id: 2, name: "Silver Sponsorship", description: "Support for club events and competitions." },
];

const Sponsorship = () => (
  <div className="py-8">
    <h2 className="text-2xl font-bold mb-6">Sponsorship Opportunities</h2>
    <ul className="space-y-4">
      {sponsorships.map((sponsor) => (
        <li key={sponsor.id} className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-bold">{sponsor.name}</h3>
          <p className="text-gray-600">{sponsor.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Sponsorship;

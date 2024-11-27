import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Dummy user data
const users = [
  {
    name: "Yeasaleh",
    phone: "+8801643797859",
    email: "yeasalehofficial2002@gmail.com",
    expertise: "Product Manager, Frontend",
    github: "https://github.com/yeasaleh2002",
    linkedin: "https://www.linkedin.com/in/yea-saleh",
    image: "https://avatars.githubusercontent.com/u/86636383?v=4",
    role: "Product Manager, Frontend",
  },
  {
    name: "Naimur",
    phone: "234-567-8901",
    email: "naimur@example.com",
    expertise: "Frontend Lead",
    github: "https://github.com/naimur",
    linkedin: "https://www.linkedin.com/in/naimur",
    image: "https://via.placeholder.com/150",
    role: "Frontend Lead",
  },
  {
    name: "Fazle Rabby",
    phone: "345-678-9012",
    email: "fazle@example.com",
    expertise: "Backend Lead",
    github: "https://github.com/fazle-rabby",
    linkedin: "https://www.linkedin.com/in/fazle-rabby",
    image: "https://via.placeholder.com/150",
    role: "Backend Lead",
  },
  {
    name: "ZEAUR RAHMAN",
    phone: "01984753024",
    email: "rahmanzea31@gmail.com",
    expertise:
      "Backend Development  with Django(Django Rest APi),Data Structure & Algorithm,My SQL(Database),Problem solving,Programming Language(C,C++,Python(OOP),Java(OOP)).",
    github: "https://github.com/Zea2002",
    linkedin: "https://www.linkedin.com/in/zeaur-rahman-4209622a8/",
    image: "https://avatars.githubusercontent.com/u/143029141?v=4",
    role: "Backend Developer",
  },
  {
    name: "Md Alif",
    phone: "456-789-0123",
    email: "alif@example.com",
    expertise: "QA Lead",
    github: "https://github.com/mdalif",
    linkedin: "https://www.linkedin.com/in/mdalif",
    image: "https://via.placeholder.com/150",
    role: "QA Lead",
  },
  {
    name: "Afsana",
    phone: "567-890-1234",
    email: "afsana@example.com",
    expertise: "Frontend Developer",
    github: "https://github.com/afsana",
    linkedin: "https://www.linkedin.com/in/afsana",
    image: "https://via.placeholder.com/150",
    role: "Frontend Developer",
  },
  {
    name: "Imran",
    phone: "678-901-2345",
    email: "imran@example.com",
    expertise: "Backend Developer",
    github: "https://github.com/imran",
    linkedin: "https://www.linkedin.com/in/imran",
    image: "https://via.placeholder.com/150",
    role: "Backend Developer",
  },
  {
    name: "Sana",
    phone: "789-012-3456",
    email: "sana@example.com",
    expertise: "Product Designer",
    github: "https://github.com/sana",
    linkedin: "https://www.linkedin.com/in/sana",
    image: "https://via.placeholder.com/150",
    role: "Product Designer",
  },
  {
    name: "Rahat",
    phone: "890-123-4567",
    email: "rahat@example.com",
    expertise: "DevOps Engineer",
    github: "https://github.com/rahat",
    linkedin: "https://www.linkedin.com/in/rahat",
    image: "https://via.placeholder.com/150",
    role: "DevOps Engineer",
  },
];

// Developer card component
const DeveloperCard = ({ user }) => {
  return (
    <div
      style={{
        backgroundColor: "#2D3748",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        color: "#E2E8F0",
        marginBottom: "20px",
        position: "relative",
        border: "2px solid #FBD38D",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          fontSize: "1.5rem",
          color: "#3B82F6", // Updated icon color
          backgroundColor: "", // Background color for icons
          padding: "5px",
          borderRadius: "50%",
        }}
      >
        <a href={user.github} target="_blank" rel="noopener noreferrer">
          <FaGithub color="#49D78A" />
        </a>
      </div>
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          fontSize: "1.5rem",
          color: "#3B82F6", // Updated icon color
          backgroundColor: "", // Background color for icons
          padding: "5px",
          borderRadius: "50%",
        }}
      >
        <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin color="#49D78A" />
        </a>
      </div>

      <div style={{ textAlign: "center" }}>
        <img
          src={user.image}
          alt={user.name}
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            marginBottom: "15px",
            objectFit: "cover",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <h3
          style={{
            fontSize: "1.5rem", // Increased font size
            fontWeight: "700", // Bold font weight
            marginBottom: "10px",
          }}
        >
          {user.name}
        </h3>
        <p
          style={{
            fontSize: "1.125rem", // Increased font size for role
            fontWeight: "700", // Bold role text
            marginBottom: "5px",
          }}
        >
          {user.role}
        </p>
        <p style={{ fontSize: "0.875rem", marginBottom: "5px" }}>
          Phone: {user.phone}
        </p>
        <p style={{ fontSize: "0.875rem", marginBottom: "5px" }}>
          Email: {user.email}
        </p>
        <p style={{ fontSize: "0.875rem", marginBottom: "15px" }}>
          Expertise: {user.expertise}
        </p>
      </div>
    </div>
  );
};

// Main Developers component
const Developers = () => {
  return (
    <div
      style={{
        backgroundColor: "#1A202C",
        color: "#E2E8F0",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingBottom: "40px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "40px",
            color: "#F7FAFC",
          }}
        >
          Software Development Team
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {users.map((user, index) => (
            <DeveloperCard key={index} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developers;

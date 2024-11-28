import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const users = [
  {
    name: "Yeasaleh",
    phone: "+8801643797859",
    email: "yeasalehofficial2002@gmail.com",
    work: "3+ years of professional experience as a Software Engineer",
    expertise:
      "JavaScript, React.js,  Redux toolkit, Next.js, Node.js, Express.js, Python, DSA, C++, C prgramming, Rest API, AWS,  GraphQL, MongoDB, SQL, MySQL, Jest, Project Management and more.",
    github: "https://github.com/yeasaleh2002",
    linkedin: "https://www.linkedin.com/in/yea-saleh",
    image: "https://avatars.githubusercontent.com/u/86636383?v=4",
    role: "Product Manager & Software Engineer",
  },
  {
    name: "Md Naimur Rahman Hridoy",
    phone: "8801401254113",
    email: "naimurrahaman82@gmail.com",
    work: "3+ years of professional experience as a Software Engineer",
    expertise:
      "C, C++, JavaScript, ReactJS, NextJS, MaterialUI, Redux, GraphQL, and RestAPis ",
    github: "https://github.com/naimurnemu",
    linkedin: "https://www.linkedin.com/in/naimurnemu",
    image: "https://i.postimg.cc/9fryr7vw/Naimur.jpg",
    role: "Software Engineer(Frontend-Lead)",
  },
  {
    name: "Fazle Rabbi",
    phone: "01722913206",
    email: "fazlerabbi0172291@gmail.com",
    expertise:
      "Backend Developer with Django (DRF), C programming, C++, Python, DSA, SQL, JavaScript, HTML, CSS, React(learning)",
    github: "https://github.com/Fazle-Rabbi72",
    linkedin: "https://www.linkedin.com/in/fazle-rabbi-852616252/",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQH_NgZppdgiTQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710407394331?e=1738195200&v=beta&t=2vs7qtTFiouUZyqfg0lhJmOhDmEZBa-iw-xJcEbyy0U",
    role: "Software Engineer(Backend-Lead)",
  },
  {
    name: "Md Alif",
    phone: "01646195393",
    email: "alifseoexpert@gmail.com",
    expertise:
      "SEO Expert,Problem solving,Programming Language(C,C++,Java(OOP))",
    github: "https://github.com/AlifSEOpro",
    linkedin: "https://www.linkedin.com/in/alifseopro/",
    image: "https://i.ibb.co.com/HFLd6K9/Alif-Proefe-mnjkwerf.jpg",
    role: "Quality Assurance Engineer(Lead)",
  },
  {
    name: "ZEAUR RAHMAN",
    phone: "01984753024",
    email: "rahmanzea31@gmail.com",
    expertise:
      "Backend Development with Django(Django Rest APi),Data Structure & Algorithm,My SQL(Database),Problem solving,Programming Language(C,C++,Python(OOP),Java(OOP)).",
    github: "https://github.com/Zea2002",
    linkedin: "https://www.linkedin.com/in/zeaur-rahman-4209622a8/",
    image: "https://avatars.githubusercontent.com/u/143029141?v=4",
    role: "Software Engineer(Backend)",
  },
  {
    name: "Md Rashed Biswas",
    phone: "01303433342",
    email: "mdrashedbiswas83@gmail.com",
    expertise:
      "JavaScript, React.Js, Next.Js, Node.Js, Express.Js, MongoDB, C, HTML, CSS, Tailwind Css",
    github: "https://github.com/mdrashed62",
    linkedin: "https://www.linkedin.com/in/rashed83",
    image: "https://i.postimg.cc/QtgYPjBN/Rashed.jpg",
    role: "Software Engineer(Frontend)",
  },
  {
    name: " MD. Nurujjaman Shipat",
    phone: "01609996720",
    email: " mdshipat100@gmail.com",
    expertise:
      " Mobile Application Developer (Dart , C , Java  and Flutter)  also  Business and Customer Service Experience ",
    github: "https://github.com/MdNurujjamanShipat",
    linkedin: "https://linkedin.com/in/Md.NurujjamanShipat",
    image: "https://i.ibb.co.com/r5JVTXK/smartpi.jpg",
    role: "Quality Assurance Engineer",
  },
  {
    name: "Maruf Hasan Mahin",
    phone: "01400097077",
    email: "marufhasanmahin@gmail.com",
    expertise: "Programming Language(C,Java(OOP))",
    linkedin: "https:www.linkedin.com/in/mahin-hasan-4536a233a",
    image:
      "https://i.ibb.co.com/m5gxb5z/Whats-App-Image-2024-11-27-at-19-39-56-53396195.jpg",
    role: "Quality Assurance Engineer",
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
            color: "#49D78A",
          }}
        >
          {user.role}
        </p>
        {user?.work && (
          <p style={{ fontSize: "0.875rem", marginBottom: "5px" }}>
            <strong>{user.work}</strong>
          </p>
        )}
        <p style={{ fontSize: "0.875rem", marginBottom: "5px" }}>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p style={{ fontSize: "0.875rem", marginBottom: "5px" }}>
          <strong>Email:</strong> {user.email}
        </p>
        <p
          style={{
            fontSize: "0.875rem",
            marginBottom: "15px",
            wordWrap: "break-word",
          }}
        >
          <strong> Expertise: </strong> {user.expertise}
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

import React, { useState } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Message sent successfully!");
      console.log(formData);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Contact Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-gray-600">
            Feel free to reach out to us through the following contact details
            or fill out the form.
          </p>
          <div>
            <h3 className="font-bold text-lg">Address</h3>
            <p>123 Main Street, City, Country</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Phone</h3>
            <p>+123 456 7890</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Email</h3>
            <p>contact@example.com</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              {
                label: "Name",
                name: "name",
                type: "text",
                placeholder: "Enter your name",
              },
              {
                label: "Email",
                name: "email",
                type: "email",
                placeholder: "Enter your email",
              },
              {
                label: "Subject",
                name: "subject",
                type: "text",
                placeholder: "Enter the subject",
              },
              {
                label: "Message",
                name: "message",
                type: "textarea",
                placeholder: "Enter your message",
              },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name} className="flex flex-col">
                <label htmlFor={name} className="text-sm font-medium">
                  {label}
                </label>
                {type === "textarea" ? (
                  <textarea
                    id={name}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    rows="5"
                    className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                  ></textarea>
                ) : (
                  <input
                    id={name}
                    name={name}
                    type={type}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                )}
                {errors[name] && (
                  <span className="text-red-500 text-sm">{errors[name]}</span>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-[#C3E92D] text-white px-4 py-2 rounded-lg font-bold hover:bg-green-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

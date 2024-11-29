import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitting(true);

      try {
        const response = await fetch(
          "https://computer-club.onrender.com/contact-us/contact/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          const errorData = await response.json();
          toast.error(
            `Failed to send message: ${errorData.message || "Unknown error"}`,
            {
              position: "top-right",
              autoClose: 3000,
            }
          );
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
        toast.error(
          "An error occurred while sending the message. Please try again.",
          {
            position: "top-right",
            autoClose: 3000,
          }
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="pb-20 bg-gray-900 text-gray-200 p-4">
      <ToastContainer />
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gradient-to-r from-green-400 to-blue-500">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Side: Contact Information */}
        <div className="space-y-6 bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-400">Get in Touch</h2>
          <p className="text-gray-400">
            Feel free to reach out to us through the following contact details
            or fill out the form.
          </p>
          <div>
            <h3 className="font-bold text-lg text-blue-300">Address</h3>
            <p>City University, Savar, Dhaka</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-blue-300">Phone</h3>
            <p>+123 456 7890</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-blue-300">Email</h3>
            <p>contact@example.com</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="space-y-6 bg-gray-800 p-6 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                <label
                  htmlFor={name}
                  className="text-sm font-medium text-gray-300"
                >
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
                    className="border border-gray-600 bg-gray-700 rounded-lg p-3 mt-1 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                ) : (
                  <input
                    id={name}
                    name={name}
                    type={type}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="border border-gray-600 bg-gray-700 rounded-lg p-3 mt-1 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                )}
                {errors[name] && (
                  <span className="text-red-400 text-sm">{errors[name]}</span>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-3 rounded-lg font-bold hover:from-green-300 hover:to-blue-400 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

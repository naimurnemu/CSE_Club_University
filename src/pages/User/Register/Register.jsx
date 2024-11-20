import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    batch: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required.";
    if (!formData.first_name.trim()) newErrors.first_name = "First name is required.";
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.batch.trim()) newErrors.batch = "Batch is required.";
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = "Passwords do not match.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side Form */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Create an Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: "Username", name: "username", type: "text", placeholder: "Enter your username" },
              { label: "First Name", name: "first_name", type: "text", placeholder: "Enter your first name" },
              { label: "Last Name", name: "last_name", type: "text", placeholder: "Enter your last name" },
              { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
              { label: "Batch", name: "batch", type: "text", placeholder: "Enter your batch" },
              { label: "Password", name: "password", type: "password", placeholder: "Enter your password" },
              {
                label: "Confirm Password",
                name: "confirm_password",
                type: "password",
                placeholder: "Confirm your password",
              },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name} className="flex flex-col">
                <label htmlFor={name} className="text-sm font-medium">
                  {label}
                </label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors[name] && <span className="text-red-500 text-sm">{errors[name]}</span>}
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-[#C3E92D] text-white px-4 py-2 rounded-lg font-bold hover:bg-green-400"
            >
              Register
            </button>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="hidden md:block">
          <img
            src="https://via.placeholder.com/400"
            alt="Registration Illustration"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;

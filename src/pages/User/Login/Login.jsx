import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "", // Changed from email to username
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) { // Updated to check username
      newErrors.username = "Username is required.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // API call using fetch
      try {
        const response = await fetch('https://computer-club.onrender.com/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formData.username, // Using username for login
            password: formData.password,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          alert("Login successful!");
          console.log(data); // Handle the response data as needed
        } else {
          throw new Error(data.message || "Failed to login");
        }
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side Image */}
        <div className="hidden md:block">
          <img
            src="https://via.placeholder.com/400"
            alt="Login Illustration"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Side Form */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Welcome Back</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: "Username", name: "username", type: "text", placeholder: "Enter your username" }, // Changed label and placeholder
              { label: "Password", name: "password", type: "password", placeholder: "Enter your password" },
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
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

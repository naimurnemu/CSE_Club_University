import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { aboutImage } from "../../../assets/images";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    batch: "",
    password: "",
    confirm_password: "",
    student_id: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear error when user reenters data
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required.";
    if (!formData.first_name.trim())
      newErrors.first_name = "First name is required.";
    if (!formData.last_name.trim())
      newErrors.last_name = "Last name is required.";
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
    if (!formData.student_id.trim())
      newErrors.student_id = "Student ID is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch(
          "https://computer-club.onrender.com/users/register/",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );
        const data = await response.json();
        if (response.ok) {
          navigate("/login", { state: { successRegister: true } });
        } else {
          setErrors(data.errors || {});
        }
      } catch (error) {
        console.error("Failed to submit form:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-900">
      <div className="min-h-[calc(100vh-150px)] max-w-7xl w-full px-3 md:px-5 lg:px-0 flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full h-full">
          <div className="w-full bg-gray-700 shadow-lg rounded-lg h-full flex flex-col justify-center items-center px-10 py-14">
            <h1 className="text-xl font-bold text-center mb-6 text-yellow-400">
              Create your account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-8 w-full">
              {[
                { label: "Username", name: "username", type: "text" },
                { label: "First Name", name: "first_name", type: "text" },
                { label: "Last Name", name: "last_name", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Batch", name: "batch", type: "text" },
                { label: "Password", name: "password", type: "password" },
                {
                  label: "Confirm Password",
                  name: "confirm_password",
                  type: "password",
                },
                { label: "Student ID", name: "student_id", type: "text" },
              ].map(({ label, name, type }) => (
                <div key={name} className="flex flex-col gap-1">
                  <label
                    htmlFor={name}
                    className="mb-0 font-medium text-gray-300"
                  >
                    {label}
                  </label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    className="form-input block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 bg-gray-600 text-white"
                  />
                  {errors[name] && (
                    <span className="text-red-400 text-sm mt-1">
                      {errors[name]}
                    </span>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Register
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="bg-gray-800 text-gray-200 p-10 rounded-lg shadow-lg h-full flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4 text-yellow-400">
              Welcome to Our Platform!
            </h2>
            <p className="text-lg">
              Create your account to join a vibrant community of learners and
              access a wide range of educational resources tailored to enhance
              your academic and professional growth.
            </p>
            <h3 className="text-2xl mt-6 mb-2 font-medium">Why Join Us?</h3>
            <p className="text-base">
              Engage with experts, participate in discussions, and gain insights
              from diverse educational content that drives real-world
              application and success.
            </p>
            <h3 className="text-2xl mt-6 mb-2 font-medium">
              Exclusive Benefits
            </h3>
            <p className="text-base">
              As a member, you will receive exclusive access to workshops,
              webinars, and networking events designed to foster collaboration
              and innovation among students and professionals.
            </p>
            <h3 className="text-2xl mt-6 mb-2 font-medium">
              Join Our Community
            </h3>
            <p className="text-base">
              Become part of a supportive network where you can share ideas,
              seek advice, and collaborate on projects that matter to you.
            </p>
            <span
              onClick={() => navigate("/login")}
              className="mt-4 text-center font-bold cursor-pointer"
            >
              Already have an account?
              <br />
              <span className="text-yellow-500">Login</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
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
      login(formData.username, formData.password);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="flex justify-between items-center max-w-7xl w-full mx-auto">
        <div className="p-8 bg-gray-800 shadow-lg rounded-lg max-w-sm w-full flex-1">
          <h1 className="text-xl font-bold text-center mb-6 text-white">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              {
                label: "Username",
                name: "username",
                type: "text",
                placeholder: "Enter your username",
              },
              {
                label: "Password",
                name: "password",
                type: "password",
                placeholder: "Enter your password",
              },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name} className="flex flex-col">
                <label
                  htmlFor={name}
                  className="mb-2 font-medium text-gray-300"
                >
                  {label}
                </label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="form-input mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white"
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
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Login
            </button>
          </form>
        </div>
        {/* <div className="flex flex-col">
          <h1 className="text-xl font-bold text-center mb-6 text-white flex-1">
            Login
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default Login;

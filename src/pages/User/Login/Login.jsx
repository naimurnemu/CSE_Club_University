import React, { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { aboutImage } from "../../../assets/images"; // Removed unused LoginImage import
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const { login } = useContext(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear error when user reenters data
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required.";
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
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      login(formData.username, formData.password, navigate);
    }
  };

  return (
    <div className=" bg-gray-900 md:py-10">
      {state?.successRegister && (
        <div className="max-w-7xl w-full mx-auto px-2 md:px-5 lg:px-0 bg-green-800 text-gray-200 p-4 rounded-lg mb-4 shadow-lg flex items-center">
          <span className="text-2xl font-normal mr-2">✅</span>
          <span className="text-xl font-normal">Please check your email and verify your account before logging in!</span>
        </div>
      )}
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl w-full mx-auto px-2 md:px-5 lg:px-0 bg-gray-800 border border-gray-700 rounded-lg shadow-lg  gap-6">
        <div className="md:block w-full lg:w-1/2 md:px-5 order-2 lg:order-1">
          <div className="p-5 flex flex-col justify-between items-center text-white h-full space-y-20">
            <div>
              <h1 className="text-xl font-medium mb-3 pt-10 text-gray-300">
                Largest Tech Community!
              </h1>
              <h2 className="text-3xl font-medium mb-5 uppercase">
                Powered by Techies, <br /> Alumnus and Students <br />
                of <span className="text-yellow-400 font-semibold">City University</span>
              </h2>
            </div>
            <div className="mb-8 text-center">
              <p className="mb-2 text-gray-300">Don't have an account?</p>
              <Link to="/register" className="text-yellow-500 hover:text-yellow-600">
                Create account →
              </Link>
            </div>
            <div className="w-full relative mt-5 rounded-lg overflow-hidden">
              <img src={aboutImage} alt="about" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-2xl">
                <div className="flex items-center justify-center text-white p-5 rounded-lg overflow-hidden">
                  <h3 className="text-lg whitespace-nowrap text-center font-semibold w-1/3">About us</h3>
                  <p className="w-2/3" style={{ textAlign: "justify" }}>
                    Join the <span className="text-yellow-400 font-bold">Computer Club</span> at{" "}
                    <span className="text-yellow-400 font-bold">City University</span>, where{" "}
                    <span className="text-gray-400">tech enthusiasts, alumni, and students</span> connect and
                    collaborate to innovate and inspire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex justify-start items-center md:px-10 order-1 lg:order-2 my-10 ">
          <div className="w-full bg-gray-700 shadow-lg rounded-lg h-full flex flex-col justify-center items-center px-10 py-14">
            <h1 className="text-xl font-bold text-center mb-6 text-yellow-400">Login to your account</h1>
            <form onSubmit={handleSubmit} className="space-y-8 w-full">
              {["username", "password"].map((name) => (
                <div key={name} className="flex flex-col gap-1">
                  <label htmlFor={name} className="mb-0 font-medium text-gray-300">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </label>
                  <input
                    id={name}
                    name={name}
                    type={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={`Enter your ${name}`}
                    className="form-inputblock w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 bg-gray-600 text-white"
                  />
                  {errors[name] && <span className="text-red-400 text-sm mt-1">{errors[name]}</span>}
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

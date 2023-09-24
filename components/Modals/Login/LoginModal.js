import styles from "./LoginModal.module.css";
import React, { useState } from "react";
const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [isLoading, setLoading] = useState(false); // State for loading indicator

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state when submitting

    // Simulate a delay (e.g., an API request) for demonstration purposes
    setTimeout(() => {
      // You can add your login logic here
      console.log("Logging in with email:", email, "and password:", password);
      setLoading(false); // Reset loading state when done
      onClose();
    }, 2000); // Simulate a 2-second delay, replace with actual login logic
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className="modal-overlay z-[-1] fixed inset-0 bg-black opacity-30"
        onClick={onClose}
      ></div>
      <div className="modal-container bg-white w-96 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {isLoading ? ( // Display loading spinner when isLoading is true
          <div className="flex justify-center items-center mb-4">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--primaryColor)] text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        )}
        <div className="my-[10px] block">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <button
          className="mt-4 text-sm text-blue-500 hover:underline cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;

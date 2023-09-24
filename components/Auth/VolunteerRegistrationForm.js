import React, { useState } from "react";
const VolunteerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Volunteer form submitted:", formData);
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="interests"
            className="block text-sm font-medium text-gray-700"
          >
            Interests and Skills
          </label>
          <textarea
            id="interests"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            rows="4"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
          ></textarea>
        </div>
        <div className="rounded-lg p-4 w-full max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Upload a Photo</h2>
          <div className="space-y-4">
            <div className="relative border-dashed border-2 border-gray-300 rounded-lg p-6 cursor-pointer">
              <input
                type="file"
                id="file"
                accept=".jpg, .jpeg, .png"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 48 48"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 20v-8a4 4 0 014-4h16a4 4 0 014 4v8m0 0l-8 8m8 0l8-8m-4 16v4m0 0h-8"
                />
              </svg>
              <p className="text-gray-600 text-center">
                Drag and drop your file here or browse
              </p>
            </div>
            {selectedFile && (
              <div className="mt-4">
                <p className="text-gray-700">Selected File:</p>
                <p className="font-medium">{selectedFile.name}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Register as a Volunteer
          </button>
        </div>
      </form>
    </>
  );
};

export default VolunteerRegistrationForm;

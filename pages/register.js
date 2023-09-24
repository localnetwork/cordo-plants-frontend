import React, { useState } from "react";
import SponsorRegistrationForm from "@/components/Auth/SponsorRegistrationForm";
import VolunteerRegistrationForm from "@/components/Auth/VolunteerRegistrationForm";
const register = () => {
  const [activeTab, setActiveTab] = useState("sponsors");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6">Registration</h1>
        <div className="flex justify-center space-x-4">
          <button
            className={`${
              activeTab === "sponsors"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } px-4 py-2 rounded-md focus:outline-none`}
            onClick={() => handleTabChange("sponsors")}
          >
            Sponsors
          </button>
          <button
            className={`${
              activeTab === "volunteers"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } px-4 py-2 rounded-md focus:outline-none`}
            onClick={() => handleTabChange("volunteers")}
          >
            Volunteer
          </button>
        </div>
        <div className="mt-6">
          {activeTab === "sponsors" ? (
            <SponsorRegistrationForm />
          ) : (
            <VolunteerRegistrationForm />
          )}
        </div>
      </div>
    </div>
  );
};

export default register;

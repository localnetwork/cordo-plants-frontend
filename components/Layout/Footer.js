import React from "react";

export const Footer = () => {
  return (
    <footer class="bg-white text-gray-900 py-12">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <h2 class="text-2xl font-semibold">CordoPlants</h2>
        </div>
        <ul class="flex space-x-6">
          <li>
            <a href="#" class="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-gray-400">
              About Us
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
        <div class="mt-6 md:mt-0">
          <p class="text-sm">Follow Us:</p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-900 hover:text-gray-400">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </a>
            <a href="#" class="text-gray-900 hover:text-gray-400">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
            <a href="#" class="text-gray-900 hover:text-gray-400">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M12 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-300 pt-4 text-center">
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

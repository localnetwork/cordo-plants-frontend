import React from "react";
import TopSponsors from "@/static-data/TopContributors";
import Image from "next/image";
export const TopContributors = () => {
  return (
    <>
      <section className="bg-[#F9F6F6] px-[70px] py-[100px]">
        <div className="sponsors">
          <h2 className="text-[var(--textPrimary)] font-bold text-[50px] mb-[20px]">
            Top Sponsors
          </h2>
          {TopSponsors.map((item, index) => (
            <div
              key={index}
              class="w-full max-w-xl bg-white mb-[30px] dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div class="flex justify-between items-center px-6 py-4">
                <div class="flex space-x-4">
                  <div>
                    <Image
                      alt="Profile"
                      class="rounded-full"
                      height="48"
                      src={item.image.path}
                      width="48"
                    />
                  </div>
                  <div>
                    <div class="text-lg font-bold dark:text-white">
                      {item.name}
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-200">
                      @{item.username}
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div class="px-6 py-4">
                <div
                  class="text-sm text-gray-800 dark:text-gray-200"
                  dangerouslySetInnerHTML={{ __html: item.companyDescription }}
                ></div>
              </div>
              <div class="flex justify-between items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700 p-4">
                <div class="flex items-center space-x-4">
                  <svg
                    class=" h-4 w-4 text-gray-500 dark:text-gray-200"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5"></path>
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                    <path d="M8 16H3v5"></path>
                  </svg>
                  <svg
                    class=" h-4 w-4 text-gray-500 dark:text-gray-200"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                  <svg
                    class=" h-4 w-4 text-gray-500 dark:text-gray-200"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" x2="12" y1="3" y2="15"></line>
                  </svg>
                </div>
                <div class="flex items-center space-x-4">
                  <svg
                    class=" h-4 w-4 text-gray-500 dark:text-gray-200"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                  <svg
                    class=" h-4 w-4 text-gray-500 dark:text-gray-200"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

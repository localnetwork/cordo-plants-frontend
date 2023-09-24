import React from "react";

const contact = () => {
  return (
    <div>
      <header class="bg-gray-900 text-white py-6">
        <div class="container mx-auto text-center">
          <h1 class="text-3xl font-semibold">Contact Us</h1>
          <p class="text-sm">We would love to hear from you!</p>
        </div>
      </header>

      <section class="py-12">
        <div class="container mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="text-gray-800">
              <h2 class="text-2xl font-semibold mb-4">Contact Information</h2>
              <p class="mb-4">
                <strong>Address:</strong> 123 Main St, City, Country
              </p>
              <p class="mb-4">
                <strong>Email:</strong> info@example.com
              </p>
              <p class="mb-4">
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-semibold mb-4">Send us a Message</h2>
              <form>
                <div class="mb-4">
                  <label for="name" class="block text-gray-800 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-300"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label for="email" class="block text-gray-800 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-300"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label for="message" class="block text-gray-800 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-300"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;

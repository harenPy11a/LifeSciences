import React from "react";
import logo from "./Assets/LifeSciences.png";
function Footer() {
  return (
    <div>
      <footer class="bg-white">
        <div class="max-w-[77rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div class="col-span-full lg:col-span-1">
              <img src={logo} class="h-20 mt-6 ml-6" alt="Flowbite Logo"></img>
            </div>

            <div class="col-span-1">
              <h4 class="font-semibold text-black">Product</h4>

              <div class="mt-3 grid space-y-3">
                <p>
                  <a
                    class="inline-flex gap-x-2 text-black hover:text-gray-700"
                    href="#"
                  >
                    Pricing
                  </a>
                </p>
                <p>
                  <a
                    class="inline-flex gap-x-2 text-black hover:text-gray-700"
                    href="#"
                  >
                    Changelog
                  </a>
                </p>
                <p>
                  <a
                    class="inline-flex gap-x-2 text-black hover:text-gray-700"
                    href="#"
                  >
                    Docs
                  </a>
                </p>
              </div>
            </div>

            <div class="col-span-1">
              <h4 class="font-semibold text-black">Company</h4>

              <div class="mt-3 grid space-y-3">
                <p>
                  <a
                    class="inline-flex gap-x-2 text-black hover:text-gray-700"
                    href="#"
                  >
                    About us
                  </a>
                </p>
                <p>
                  <a
                    class="inline-flex gap-x-2 text-black hover:text-gray-700"
                    href="#"
                  >
                    Blog
                  </a>
                </p>
                <p>
                  <a
                    class="inline-flex gap-x-2 text-black hover:text-gray-700"
                    href="#"
                  >
                    Careers
                  </a>{" "}
                </p>
                <p>
                  <a
                    class="inline-flex gap-x-2 text-black hover:text-gray-700"
                    href="#"
                  >
                    Customers
                  </a>
                </p>
              </div>
            </div>

            <div class="col-span-2">
              <h4 class="font-semibold text-black">Stay up to date</h4>

              <form>
                <div class="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-md p-2">
                  <div class="w-full">
                    <label for="hero-input" class="sr-only">
                      Search
                    </label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      class="py-3 px-4 block w-full border-transparent shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <a
                    class="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
                    href="#"
                  >
                    Subscribe
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div class="flex justify-between items-center">
              <p class="text-sm text-gray-400">
                © 2022 LifeSciences. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

import React from "react";

function Card() {
  return (
    <div class="max-w-[85rem] mt-24 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 lg:py-24 2xl:py-56 mx-auto ">
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-black">
          What We Do
        </h2>
        <p class="mt-1 text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
          href="#"
        >
          <div class="aspect-w-16 aspect-h-11">
            <img
              class="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </div>
          <div class="my-6">
            <h3 class="text-xl font-semibold text-black dark:group-hover:text-white">
              Discovery{" "}
            </h3>
            <p class="mt-5 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Pretium nibh ipsum consequat nisl vel pretium lectus quam.
            </p>
          </div>
          <div class="mt-auto flex items-center gap-x-3">
            <img
              class="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Image Description"
            />
            <div>
              <h5 class="text-sm text-black">By Lauren Waller</h5>
            </div>
          </div>
        </a>

        <a
          class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
          href="#"
        >
          <div class="aspect-w-16 aspect-h-11">
            <img
              class="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
              alt="Image Description"
            />
          </div>
          <div class="my-6">
            <h3 class="text-xl font-semibold text-black dark:group-hover:text-white">
              Manufacturing
            </h3>
            <p class="mt-5 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Pretium nibh ipsum consequat nisl vel pretium lectus quam.
            </p>
          </div>
          <div class="mt-auto flex items-center gap-x-3">
            <img
              class="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Image Description"
            />
            <div>
              <h5 class="text-sm text-black">By Aaron Larsson</h5>
            </div>
          </div>
        </a>

        <a
          class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
          href="#"
        >
          <div class="aspect-w-16 aspect-h-11">
            <img
              class="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80"
              alt="Image Description"
            />
          </div>
          <div class="my-6">
            <h3 class="text-xl font-semibold text-black dark:group-hover:text-white">
              Development
            </h3>
            <p class="mt-5 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Pretium nibh ipsum consequat nisl vel pretium lectus quam.
            </p>
          </div>
          <div class="mt-auto flex items-center gap-x-3">
            <img
              class="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Image Description"
            />
            <div>
              <h5 class="text-sm text-black">By Lauren Waller</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Card;

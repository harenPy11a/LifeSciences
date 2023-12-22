import heroImg1 from "./Assets/heroImg1.jpg";

function Hero() {
  return (
    <div className="h-[100vh] bg-blue-200 ">
      <div className="">
        <img
          class="invisible md:visible md:mt-[3%] z-0 w-full"
          src={heroImg1}
          alt="Image Description"
        />
        <div class="z-10 absolute top-[26%] right-[7%]">
          <h2 class="text-8xl font-extrabold text-gray-800">LifeSciences</h2>
          <p class="max-w-[650px] my-4 text-xl font-italic text-white">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
          </p>
          <a
            href="#"
            class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline"
          >
            Read more
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";

function Testimonials() {
  return (
    <div className="pt-10">
      <div class="mt-5 pt-10 max-w-xl text-center mx-auto">
        <h1 class="block font-bold text-black text-4xl md:text-5xl lg:text-6xl ">
          Testimonials
        </h1>
      </div>

      <div class="relative overflow-hidden">
        <div class="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
          <div aria-hidden="true" class="flex absolute left-0 -z-[1]">
            <div class="bg-white"></div>
          </div>

          <div class="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
            <div class="hidden lg:block lg:col-span-2">
              <img
                class="rounded-xl"
                src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
            </div>

            <div class="lg:col-span-4">
              <blockquote>
                <svg
                  class="w-24 h-auto mb-4"
                  viewBox="-0.3 0 320.3999999999999 99.9"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2500"
                  height="779"
                >
                  <path
                    d="M168.7 25.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.8-6.5 6.5-6.5c3.7.1 6.5 3 6.5 6.5zm-26.8 13.1v1.6s-3.1-4-9.7-4c-10.9 0-19.4 8.3-19.4 19.8 0 11.4 8.4 19.8 19.4 19.8 6.7 0 9.7-4.1 9.7-4.1V73c0 .8.6 1.4 1.4 1.4h8.1V36.8h-8.1c-.8 0-1.4.7-1.4 1.4zm0 24.1c-1.5 2.2-4.5 4.1-8.1 4.1-6.4 0-11.3-4-11.3-10.8s4.9-10.8 11.3-10.8c3.5 0 6.7 2 8.1 4.1zm15.5-25.5h9.6v37.6h-9.6zm143.4-1c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8s-8.5-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-22.7-14.2v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7-2.9 0-5.9 1.5-7.8 3.7v26.2h-9.6V36.8h7.6c.8 0 1.4.7 1.4 1.4v1.6c2.8-2.9 6.5-4 10.2-4 4.2 0 7.7 1.2 10.5 3.6 3.4 2.8 4.7 6.4 4.7 12.7zm-57.7-16.3c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8.1-11.4-8.4-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-26-30.5c2.9 0 4.4.5 4.4.5v8.9s-8-2.7-13 3v26.3H173V36.8h8.1c.8 0 1.4.7 1.4 1.4v1.6c1.8-2.1 5.7-4 8.7-4zM91.5 71c-.5-1.2-1-2.5-1.5-3.6-.8-1.8-1.6-3.5-2.3-5.1l-.1-.1C80.7 47.2 73.3 32 65.5 17l-.3-.6c-.8-1.5-1.6-3.1-2.4-4.7-1-1.8-2-3.7-3.6-5.5C56 2.2 51.4 0 46.5 0c-5 0-9.5 2.2-12.8 6-1.5 1.8-2.6 3.7-3.6 5.5-.8 1.6-1.6 3.2-2.4 4.7l-.3.6C19.7 31.8 12.2 47 5.3 62l-.1.2c-.7 1.6-1.5 3.3-2.3 5.1-.5 1.1-1 2.3-1.5 3.6C.1 74.6-.3 78.1.2 81.7c1.1 7.5 6.1 13.8 13 16.6 2.6 1.1 5.3 1.6 8.1 1.6.8 0 1.8-.1 2.6-.2 3.3-.4 6.7-1.5 10-3.4 4.1-2.3 8-5.6 12.4-10.4 4.4 4.8 8.4 8.1 12.4 10.4 3.3 1.9 6.7 3 10 3.4.8.1 1.8.2 2.6.2 2.8 0 5.6-.5 8.1-1.6 7-2.8 11.9-9.2 13-16.6.8-3.5.4-7-.9-10.7zm-45.1 5.2C41 69.4 37.5 63 36.3 57.6c-.5-2.3-.6-4.3-.3-6.1.2-1.6.8-3 1.6-4.2 1.9-2.7 5.1-4.4 8.8-4.4s7 1.6 8.8 4.4c.8 1.2 1.4 2.6 1.6 4.2.3 1.8.2 3.9-.3 6.1-1.2 5.3-4.7 11.7-10.1 18.6zm39.9 4.7c-.7 5.2-4.2 9.7-9.1 11.7-2.4 1-5 1.3-7.6 1-2.5-.3-5-1.1-7.6-2.6-3.6-2-7.2-5.1-11.4-9.7 6.6-8.1 10.6-15.5 12.1-22.1.7-3.1.8-5.9.5-8.5-.4-2.5-1.3-4.8-2.7-6.8-3.1-4.5-8.3-7.1-14.1-7.1s-11 2.7-14.1 7.1c-1.4 2-2.3 4.3-2.7 6.8-.4 2.6-.3 5.5.5 8.5 1.5 6.6 5.6 14.1 12.1 22.2-4.1 4.6-7.8 7.7-11.4 9.7-2.6 1.5-5.1 2.3-7.6 2.6-2.7.3-5.3-.1-7.6-1-4.9-2-8.4-6.5-9.1-11.7-.3-2.5-.1-5 .9-7.8.3-1 .8-2 1.3-3.2.7-1.6 1.5-3.3 2.3-5l.1-.2c6.9-14.9 14.3-30.1 22-44.9l.3-.6c.8-1.5 1.6-3.1 2.4-4.6.8-1.6 1.7-3.1 2.8-4.4 2.1-2.4 4.9-3.7 8-3.7s5.9 1.3 8 3.7c1.1 1.3 2 2.8 2.8 4.4.8 1.5 1.6 3.1 2.4 4.6l.3.6c7.6 14.9 15 30.1 21.9 45v.1c.8 1.6 1.5 3.4 2.3 5 .5 1.2 1 2.2 1.3 3.2.8 2.6 1.1 5.1.7 7.7z"
                    fill="#88BAFB"
                  />
                </svg>

                <p class="text-xl font-medium text-black lg:text-2xl lg:leading-normal ">
                  To say that switching to Preline has been life-changing is an
                  understatement. My business has tripled and I got my life
                  back.
                </p>

                <footer class="mt-6">
                  <div class="flex items-center">
                    <div class="lg:hidden flex-shrink-0">
                      <img
                        class="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                    </div>
                    <div class="ml-4 lg:ml-0">
                      <p class="font-medium text-black">Nicole Grazioso</p>
                      <p class="text-sm text-black">Head of Finance</p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div id="new" className="h-auto">
        <div class="overflow-hidden bg-white h-auto">
          <div class="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
              <h2 class="text-2xl sm:text-3xl lg:text-4xl text-black font-semibold">
                Loved by business and individuals across the globe
              </h2>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="flex h-auto">
                <div class="flex flex-col bg-slate-300 rounded-2xl">
                  <div class="flex-auto p-4 md:p-6">
                    <p class="text-base italic md:text-lg text-black">
                      " Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    </p>
                  </div>

                  <div class="p-4 bg-slate-400 rounded-xl">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Image Description"
                        ></img>
                      </div>

                      <div class="grow ml-3">
                        <p class="text-sm sm:text-base font-semibold text-black ">
                          Josh Tyson
                        </p>
                        <p class="text-xs text-black">
                          Product Manager | Capsule
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex h-auto">
                <div class="flex flex-col bg-slate-300 rounded-2xl">
                  <div class="flex-auto p-4 md:p-6">
                    <p class="text-base italic md:text-lg text-black">
                      " Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    </p>
                  </div>

                  <div class="p-4 bg-slate-400 rounded-xl">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Image Description"
                        ></img>
                      </div>

                      <div class="grow ml-3">
                        <p class="text-sm sm:text-base font-semibold text-black ">
                          Josh Tyson
                        </p>
                        <p class="text-xs text-black">
                          Product Manager | Capsule
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex h-auto">
                <div class="flex flex-col bg-slate-300 rounded-2xl">
                  <div class="flex-auto p-4 md:p-6">
                    <p class="text-base italic md:text-lg text-black">
                      " Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    </p>
                  </div>

                  <div class="p-4 bg-slate-400 rounded-xl">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Image Description"
                        ></img>
                      </div>

                      <div class="grow ml-3">
                        <p class="text-sm sm:text-base font-semibold text-black ">
                          Josh Tyson
                        </p>
                        <p class="text-xs text-black">
                          Product Manager | Capsule
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8 h-auto">
              <div>
                <h4 class="text-lg sm:text-xl font-semibold text-black">
                  Accuracy rate
                </h4>
                <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-800">
                  99.95%
                </p>
                <p class="mt-1 text-gray-400">in fulfilling orders</p>
              </div>

              <div>
                <h4 class="text-lg sm:text-xl font-semibold text-black">
                  Startup businesses
                </h4>
                <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-800">
                  2,000+
                </p>
                <p class="mt-1 text-gray-400">partner with Preline</p>
              </div>

              <div>
                <h4 class="text-lg sm:text-xl font-semibold text-black">
                  Happy customer
                </h4>
                <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-800">
                  85%
                </p>
                <p class="mt-1 text-gray-400">this year alone</p>
              </div>
            </div>

            <div
              class="absolute bottom-0 right-0 transform lg:translate-x-32"
              aria-hidden="true"
            >
              <svg
                class="w-40 h-auto sm:w-72"
                width="1115"
                height="636"
                viewBox="0 0 1115 636"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z"
                  fill="currentColor"
                  class="fill-blue-300"
                />
                <path
                  d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z"
                  fill="currentColor"
                  class="fill-blue-500"
                />
                <path
                  d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z"
                  fill="currentColor"
                  class="fill-blue-800"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

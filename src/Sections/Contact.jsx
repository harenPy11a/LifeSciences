import React, { useRef } from "react";
import logo from "./Assets/LifeSciences.png";
import stock1 from "./Assets/stock1.jpg";

import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8tyh965",
        "template_grpl103",
        form.current,
        "GBofOhpynZLlYYSwK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div class="bg-gray-200">
      <img
        class="object-cover w-screen h-96 ring-gray-300"
        src={stock1}
        alt=""
      ></img>
      <div class="mx-auto max-w-2xl text-center mt-16">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Leave a Message
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>

      {/* here */}
      <div className="w-full">
        <form
          className="flex flex-col p-24 items-center bg-yellow-400 self-auto w-full h-4/5"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="font-bold py-3 text-xl">Name</label>
          <input type="text" name="user_name" />
          <label className="font-bold py-3 text-xl">Email</label>
          <input type="email" name="user_email" />
          <label className="font-bold py-3 text-xl">Message</label>
          <textarea className="py-3 message" />
          <div className="flex py-3 w-screen">
            <input className="w-2/5 bg-[#00C9FF]" type="submit" value="Send" />
          </div>
        </form>
      </div>

      {/* here */}

      <div className="flex flex-row mt-16">
        <div className="bg-gray-500 flex-1 h-[40rem]">
          <div class="relative w-full h-[40rem] ">
            <iframe
              class="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.319850684185!2d-88.06452702382882!3d42.03632117122472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880faf11a4896419%3A0x3614b144444a16fc!2sJames%20B.%20Conant%20High%20School!5e0!3m2!1sen!2sus!4v1692069162386!5m2!1sen!2sus, 10.606619&z=15&output=embed"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
        <div className="bg-blue-800 flex-1 text-center ">
          <div className="w-[200px] h-[200px] bg-white mx-auto mt-16 rounded-full justify-center flex">
            <img
              class="w-[160px] h-[160px] mx-auto my-auto"
              src={logo}
              alt=""
            ></img>
          </div>
          <p className="text-white text-lg mt-6 mb-2">Come visit us at</p>
          <a
            href="https://www.google.com/maps/place/Schaumburg,+IL/@42.032327,-88.2470823,12z/data=!3m1!4b1!4m6!3m5!1s0x880faf88436224e5:0x43bd31cd678f7351!8m2!3d42.0333607!4d-88.0834059!16zL20vMHM1bWQ?entry=ttu"
            className="text-white text-lg text-white hover:text-[#72b08e]"
            target="_blank"
          >
            123 Street Lane. Schaumburg IL
          </a>
          <p className="text-white text-lg mt-16">Contact us at</p>
          <p className="text-white text-lg mt-2">
            xxx-xxx-xxxx | example@gmail.com
          </p>

          <div className=" flex flex-row justify-center mt-4">
            <a
              href=""
              class="mx-3 text-white hover:text-[#72b08e] group-hover:text-[#72b08e]"
            >
              <svg
                class="h-9 w-9"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <rect x="4" y="4" width="16" height="16" rx="4" />{" "}
                <circle cx="12" cy="12" r="3" />{" "}
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </a>
            <a
              href=""
              class="mx-3 text-white hover:text-[#72b08e]  dark:hover:text-[#72b08e] group-hover:text-white"
            >
              <svg
                class="h-9 w-9 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                <rect x="2" y="9" width="4" height="12" />{" "}
                <circle cx="4" cy="4" r="2" />
              </svg>{" "}
            </a>
            <a
              href=""
              class="mx-3 text-white hover:text-[#72b08e] dark:hover:text-[#72b08e] group-hover:text-white"
            >
              <svg
                class="w-9 h-9 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
              </svg>
            </a>
          </div>

          <p className="text-white font-[300] text-base mt-16">
            © 2023 LifeSciences
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

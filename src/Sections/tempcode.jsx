import React from "react";
import Carousel from "./Components/Carousel";
import map1 from "./Assets/locationmap1.png";
import pattern1 from "./Assets/pattern1.jpg";

function tempcode() {
  return (
    <div class="bg-gray-200">
      <div class="relative w-full h-96">
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>

      <div>
        <iframe
          src="https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed"
          width="360"
          height="270"
          frameborder="0"
          style="border:0"
        ></iframe>
      </div>
    </div>
  );
}

export default tempcode;

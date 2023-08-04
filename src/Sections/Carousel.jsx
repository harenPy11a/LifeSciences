import sci1 from "./Assets/sci1.jpg";
import sci2 from "./Assets/sci2.jpg";
import sci3 from "./Assets/sci3.jpg";
import React, { useState, useEffect } from "react";

function Carousel() {
  const images = [sci1, sci2, sci3];

  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  useEffect(() => {
    let currentIndex = 0;
    const changeBackgroundImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      setBackgroundImage(images[currentIndex]);
    };
    const interval = setInterval(changeBackgroundImage, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <div className=" h-[35vh] w-full m-auto pt-24 px-4 relative group ">
        {/* max-w-[1400px] */}
        <div className="w-full h-full  rounded-2xl overflow-hidden">
          <img
            src={backgroundImage}
            className="h-auto w-[100%] rounded-2xl m-auto duration-500 overflow-hidden "
            style={{ transition: "1s" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;

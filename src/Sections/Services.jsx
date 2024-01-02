import React from "react";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const InfoCard = ({ title, description, imageUrl }) => {
  return (
    <div className="w-96 h-1200  rounded-lg overflow-hidden shadow-lg mx-6  flex flex-col">
      <div className="p-4 flex-1 flex flex-col ">
        <div>
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base mb-4">{description}</p>
        </div>
        <div className="">
          <img
            className="w-full h-full object-cover rounded"
            src={imageUrl}
            alt="Card image"
          />
        </div>
      </div>
    </div>
  );
};

function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
    centerMode: true,
    className: "center",
    centerPadding: "00px"
  };
  return (
    <div className="mt-32 items-center">
      <div className="text-center">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          We invest in the world’s potential
        </h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-700">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mt-32 mb-32">
        <div className="">
          <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg w-full max-w-[76rem] flex-row">
            <div class="relative w-6/12 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="card-image"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-6">
              <h6 class="block mb-4 font-sans text-lg antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                category
              </h6>
              <h4 class="block mb-4 font-sans text-4xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Title of what service is performed here
              </h4>
              <p class="block mb-8 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Yet its own business model disruption
                is only part of the story
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg w-full max-w-[76rem] flex-row">
            <div class="p-6">
              <h6 class="block mb-4 font-sans text-lg antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                category
              </h6>
              <h4 class="block mb-4 font-sans text-4xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Title of what service is performed here
              </h4>
              <p class="block mb-8 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Yet its own business model disruption
                is only part of the story
              </p>
            </div>
            <div class="relative w-6/12 m-0 overflow-hidden text-gray-700 bg-white rounded-l-none bg-clip-border rounded-xl shrink-0">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="card-image"
                class="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg w-full max-w-[76rem] flex-row">
            <div class="relative w-6/12 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="card-image"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-6">
              <h6 class="block mb-4 font-sans text-lg antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                category
              </h6>
              <h4 class="block mb-4 font-sans text-4xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Title of what service is performed here
              </h4>
              <p class="block mb-8 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Yet its own business model disruption
                is only part of the story
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-120 pt-120 px-120 ">
      <Slider {...settings}>

        <InfoCard
          title="Card Title 1"
          description="This is the first card description."
          imageUrl="src/Sections/Assets/sci2.jpg"
        />
        <InfoCard
          title="Card Title 2"
          description="This is the second card description."
          imageUrl="src/Sections/Assets/sci2.jpg"
        />
        <InfoCard
          title="Card Title 3"
          description="This is the third card description. isjfgepwijepwohgepwhgpweihgwepihgewipghwepighwepihgweiphgwipeghweipghewipghweipghewipgh'ihsfusd'hgueshgioheishihgweiphgwipeghweipghewiihgweiphgwipeghweipghewiihgweiphgwipeghweipghewiihgweiphgwipeghweipghewiihgweiphgwipeghweipghewiihgweiphgwipeghweipghewiihgweiphgwipeghweipghewihi my name
          s
          s
          s
          s
          ss
          s
          ihgweiphgwipeghweipghewi
          ihgweiphgwipeghweipghewi
          ihgweiphgwipeghweipghewi
          ihgweiphgwipeghweipghewi
          ihgweiphgwipeghweipghewi
          ihgweiphgwipeghweipghewi
          ihgweiphgwipeghweipghewi
          ihgweiphgwipeghweipghewi
          ihgweiphgwipeghweipghewi
          ihgweiphgwipeghweipghewi
          ihgweiphgwipeghweipghewi
          ihgweiphgwipeghweipghewi"
          imageUrl="src/Sections/Assets/sci2.jpg"
        />
        <InfoCard
          title="Card Title 4"
          description="This is the fourth card description."
          imageUrl="src/Sections/Assets/sci2.jpg"
        />
      </Slider>

      </div>

      
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Services;

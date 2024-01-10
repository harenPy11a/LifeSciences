import React from "react";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const InfoCard = ({ title, description, imageUrl }) => {
  return (
    <div className="w-96 h-90  rounded-lg overflow-hidden shadow-lg mx-6  flex flex-col">
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
    adaptiveHeight: false,
    centerMode: true,
    className: "center",
    centerPadding: "00px"
  };
  return (
    <div className="mt-32 items-center">
      <div className="text-center">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          Explore our Services
        </h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-700">
        At LifeSciences, our unwavering commitment is dedicated to advancing scientific research with an unwavering dedication to the greater good. Our mission is to propel the frontiers of knowledge, contributing to the collective progress of humanity through the pursuit of excellence in scientific exploration and discovery.        </p>
      </div>

      <div className="flex flex-col items-center justify-center mt-32 mb-32">
        <div className="">
          <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg w-full max-w-[76rem] flex-row">
            <div class="relative w-6/12 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
              <img
                src="https://cdn.syngeneintl.com/2022/01/21190712/Integrated-Drug-Discovery.jpg"
                alt="card-image"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-6">
              <h6 class="block mb-4 font-sans text-lg antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                Health Care Services
              </h6>
              <h4 class="block mb-4 font-sans text-4xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Integrated Drug and Recovery Services
              </h4>
              <p class="block mb-8 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700">
              Integrated Drug and Discovery Services represent a comprehensive and collaborative approach to the drug discovery and development process within the pharmaceutical and biotechnology industries. This multidisciplinary strategy brings together various scientific disciplines, cutting-edge technologies, and specialized expertise to streamline and enhance the efficiency of drug discovery efforts.


              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg w-full max-w-[76rem] flex-row">
            <div class="p-6">
              <h6 class="block mb-4 font-sans text-lg antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                Pharmaceutical Chemistry
              </h6>
              <h4 class="block mb-4 font-sans text-4xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Synthetic and Medicinal Chemistry
              </h4>
              <p class="block mb-8 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700">
              Synthetic chemistry focuses on crafting novel chemical compounds, playing a key role in generating diverse libraries for drug discovery. In tandem, medicinal chemistry specializes in refining these compounds, aiming to optimize their therapeutic potential for pharmaceutical use. Together, these disciplines form an integral partnership, driving advancements in the development of new and effective drugs.
              </p>
            </div>
            <div class="relative w-6/12 m-0 overflow-hidden text-gray-700 bg-white rounded-l-none bg-clip-border rounded-xl shrink-0">
              <img
                src="https://www.tipt.com/wp-content/uploads/tipt-blog-oct-14-2020.jpg"
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
                src="https://criver.widen.net/content/nziw7fm4le/jpeg/LS-bioa-hero-white.jpeg?w=640&h=426&keep=c&crop=yes&color=ffffffff&quality=80&u=dxbf0u"
                alt="card-image"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-6">
              <h6 class="block mb-4 font-sans text-lg antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                Biology
              </h6>
              <h4 class="block mb-4 font-sans text-4xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Biology Services
              </h4>
              <p class="block mb-8 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700">
              LifeSciences Biology services encompass a suite of offerings within the biological sciences, providing crucial support for research and development. These services may include DNA sequencing, cell culture, and protein expression, enabling researchers and organizations to outsource specialized tasks and advance their scientific investigations. By leveraging biology services, professionals gain access to specialized expertise and state-of-the-art technologies, accelerating progress in biotechnological, pharmaceutical, and medical research endeavors.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-120 pt-120 px-120 ">
      <Slider {...settings}>

        <InfoCard
          title="DMPK: in vitro ADME"
          description="DMPK, or Drug Metabolism and Pharmacokinetics, involves in vitro ADME studies, assessing how a drug is absorbed, distributed, metabolized, and excreted in a laboratory setting. These studies guide drug development, predicting behavior within the body and optimizing therapeutic efficacy and safety."
          imageUrl="https://www.xenotech.com/wp-content/uploads/2020/04/Consulting-Scientists-1024x546.jpg"
        />
        <InfoCard
          title="DMPK: in vivo PK"
          description="DMPK, or Drug Metabolism and Pharmacokinetics, explores in vivo PK, focusing on the Pharmacokinetics within a living organism. This involves studying how a drug is absorbed, distributed, metabolized, and excreted in the body, providing critical insights into its behavior, efficacy, and safety in a real physiological context."
          imageUrl="src/Sections/Assets/sci2.jpg"
        />
        <InfoCard
          title="General Toxicology"
          description="General toxicology investigates the harmful effects of substances on living organisms, assessing toxicity, dose-response relationships, and mechanisms. Crucial for regulatory evaluations, it ensures the safety of pharmaceuticals, chemicals, and consumer goods through comprehensive risk assessments."
          imageUrl="https://chemical.labcorp.com/content/dam/images/General-Tox.jpg"
        />
        <InfoCard
          title="Genotoxicity"
          description="Genotoxicity examines the capacity of substances to damage cellular DNA, potentially causing mutations or chromosomal alterations. Integral to safety assessments for pharmaceuticals and chemicals, it identifies potential long-term health risks, including carcinogenic effects."
          imageUrl="data:image/jpeg;base64,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"
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

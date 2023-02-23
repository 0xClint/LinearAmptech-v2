import React from "react";
import { Footer, Header } from "../../Components";

const RFPower = () => {
  return (
    <div>
      <Header />
      {/* *****************************HERO SECTION***************** */}

      <div className="heroSection gap-2 bg-primary-color h-[400px] flex flex-col justify-center items-center text-white">
        <h2 className="text-[4rem] font-bold font-Roboto">Our Products</h2>
        <p className="text-[1.5rem] font-mnormal mb-4">
          Solutions for a smarter, more connected future
        </p>
      </div>
      {/* *****************************CONTENT SECTION***************** */}

      <div className="content w-[100%] px-[10%] py-20 text-[1.2rem] leading-relaxed">
        <h2 className="text-[3rem] font-bold mb-5">RF Power Amplifiers</h2>
        <p className="mb-7 leading-loose">
          Linear Amptech provides excellent indigenous power amplifier solution
          for Cellular application and variety of military and space
          applications. We provide vast range of high performance power
          amplifiers with frequency coverage from Dc to 18 GHz. Linear Amptech
          PAs includes variety of power levels with high efficiency and high
          gain performance. Linear Amptech also supports low cost customize
          solution with indigenously developed PAs.
        </p>
        <div className="flex justify-between">
          <div className="w-[50%]">
            <ul className="list-disc my-3 ml-8 flex flex-col gap-1">
              <li>Provides Low to High power amplifiers</li>
              <li>Wide bandwidth of operation</li>
              <li>Low cost custom solutions available</li>
              <li>Operating frequency ranges from DC to 18 GHz</li>
              <li>Provides highly efficient power amplifier solutions</li>
              <li>Indigenous Design (Low-cost, Low-lead time)</li>
            </ul>
            <h2 className="text-[1.8rem] font-bold mt-5">Key Features</h2>
            <ul className="list-disc my-3 ml-8 flex flex-col gap-1">
              <li>Compact design with RF-in RF-out port</li>
              <li>D-type connector for DC supply</li>
              <li>Highly durable product</li>
              <li>
                Highly reliable with inbuilt protection circuit against
                temperature variation
              </li>
              <li>Inbuilt Sequential biasing circuit</li>
            </ul>
            <h2 className="text-[1.8rem] font-bold mt-5">Applications</h2>
            <ul className="list-decimal my-3 ml-8 flex flex-col gap-1">
              <li>Base station</li>
              <li>Point to point radio</li>
              <li>Military and commercial radar</li>
              <li>Electronic warfare and radar</li>
              <li>Satellite Communication</li>
            </ul>
          </div>
          <div className="rightBox w-[50%] flex p-20">
            <div className="fronBox h-[400px] w-[500px] bg-primary-color"></div>
            <div className="backBox absolute h-[400px] w-[500px] bg-[#EFF6FF] translate-x-5 translate-y-5"></div>
          </div>
        </div>
      </div>
      {/* *******************Product Orverview  ************************/}
      <div className="w-[100%] px-[10%]">
        <h2 className="text-[3rem] font-bold font-Roboto mb-10">
          Products Overview
        </h2>
        <div className="container flex flex-col gap-10 pb-16">
          <div className="productContent px-12 py-8 flex justify-center items-center gap-10 bg-[#EFF6FF] ">
            <div className="imgContainer h-[250px] w-[330px] bg-gray-400 border-[1px] border-black overflow-hidden">
              <img src={require("../../assets/rfpower/1.png")}></img>
            </div>
            <div className="w-[900px] leading-loose text-[1.2rem]">
              <h2 className="text-[1.5rem] font-bold mb-3">
                High Efficiency Switch Mode Power Amplifiers (for L, S, C bands)
              </h2>
              <p>
                Engineers always look for high power added efficiency and drain
                efficiency in their designs. For achieving high efficiency at
                saturation, switched mode and harmonically controlled PAs are
                suitable such as Class E, Class F, Class D etc.
              </p>
            </div>
          </div>
          <div className="productContent px-12 py-8 flex justify-center items-center gap-10 bg-[#EFF6FF] ">
            <div className="imgContainer h-[250px] w-[330px] bg-gray-400 border-[1px] border-black overflow-hidden">
              <img src={require("../../assets/rfpower/2.png")}></img>
            </div>
            <div className="w-[900px] leading-loose text-[1.2rem]">
              <h2 className="text-[1.5rem] font-bold mb-3">
                Power Amplifiers for Wireless Transmitters
              </h2>
              <p>
                In recent wireless communication, the bandwidth and efficiency
                enhancement of power amplifiers are important for handling
                signals complying 4G and 5G communication standards. These
                signals have very high crest factor and requires high efficiency
                power amplifiers while operating at average power such as
                Doherty power amplifier.
              </p>
            </div>
          </div>
          <div className="productContent px-12 py-8 flex justify-center items-center gap-10 bg-[#EFF6FF] ">
            <div className="imgContainer h-[250px] w-[330px] bg-gray-400 border-[1px] border-black overflow-hidden">
              <img src={require("../../assets/rfpower/3.png")}></img>
            </div>
            <div className="w-[900px] leading-loose text-[1.2rem]">
              <h2 className="text-[1.5rem] font-bold mb-3">
                High Frequency GaN based Power Amplifiers (X and Ku band)
              </h2>
              <p>
                Power amplifiers at X and Ku-band have been widely used in
                applications such as phase array T/R modules for radars and VSAT
                (very small aperture terminal) for satellite communication.
              </p>
            </div>
          </div>
          <div className="productContent px-12 py-8 flex justify-center items-center gap-10 bg-[#EFF6FF] ">
            <div className="imgContainer h-[250px] w-[330px] bg-gray-400 border-[1px] border-black overflow-hidden">
              <img src={require("../../assets/rfpower/4.png")}></img>
            </div>
            <div className="w-[900px] leading-loose text-[1.2rem]">
              <h2 className="text-[1.5rem] font-bold mb-3">
                Waveform Engineering based Broadband Power Amplifiers
              </h2>
              <p>
                Continuous class of power amplifiers (such as continuous class
                F, continuous class B/J) provides the wide bandwidth as well as
                high efficiency operation. These classes are based on waveform
                engineering approach, which requires precise control of
                harmonics to shape the output current, and voltage waveform for
                minimum power dissipation across the device.
              </p>
            </div>
          </div>
          <div className="productContent px-12 py-8 flex justify-center items-center gap-10 bg-[#EFF6FF] ">
            <div className="imgContainer h-[250px] w-[330px] bg-gray-400 border-[1px] border-black overflow-hidden">
              <img src={require("../../assets/rfpower/5.png")}></img>
            </div>
            <div className="w-[900px] leading-loose text-[1.2rem]">
              <h2 className="text-[1.5rem] font-bold mb-3">
                Multi-band/Broadband Power Amplifiers for Wireless Base Station
              </h2>
              <p>
                Doherty power amplifier and Chireix outphasing based
                multiband/broadband transmitters can efficiently handle signals
                with high peak to average power ratio. There is huge potential
                for extending the bandwidth and operating range of such system
                for upcoming 5G application.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RFPower;

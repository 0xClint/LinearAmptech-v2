import React, { useEffect } from "react";
import { BgElement2, BgElement1, BgElement3 } from "../../assets";
import { CompanyFocus, Footer, Header } from "../../Components";
import AOS from "aos";
import "aos/dist/aos.css";

const CyberSystem = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  return (
    <div>
      <Header />
      <div className="w-[100%] h-[100%]">
        <div className="absolute w-[100%] h-[100%] top-[35%]">
          <h2
            className="text-[5rem] font-bold font-Roboto drop-shadow-2xl text-center text-white "
            data-aos="fade"
            data-aos-duration="1000"
          >
            Elevate Your Life with <br />
            Our Products
          </h2>
        </div>
        <img src={require("../../assets/bg.png")} className="w-[100%]"></img>
      </div>
      <div className="text-[1.3rem] leading-relaxed px-[15%] text-center font-medium">
        <h2
          className="text-[2.5rem] text-center font-bold mt-5 mb-10"
          data-aos="fade-up"
        >
          Cyber Physical Systems and Signal Processing
        </h2>
        <p className="my-10">
          The Cyber-physical system (CPS) in general refers to an ecosystem of
          sensors, their cyber interface, and the interpretation of data
          collected for exhibiting to the user interface. The primary role of
          CPS, in general, is to monitor and control the physical world. This
          monitoring and control is assisted by incorporating the physical
          device with a cyber-process, which may include sensing, computation,
          and control.
        </p>
        <p>
          This product line primarily focused on solving traffic congestions and
          safety related problems in smart cities, highways and unregulated
          single lane bridges and tunnels. The product line covers the wholestic
          approach of traffic regulations and safety including Dynamic Warning
          signs in the Smart poles activated with sensors such as RADAR etc. as
          well as city traffic regulations using computer vision technology
          assisted by Traffic cameras. Interestingly, our city-centric traffic
          navigation system can plan the traffic management of the whole city
          with our AI/ML platform.
          {/* </p> */}
          {/* <p> */} The company is focusing on innovations related to new CPS
          for many multi-disciplinary applications such as intelligent traffic
          solutions, industry 4.0, and defense situation awareness platforms.
          Accordingly, some sensors which are unique and not readily available
          are also in the wish list of our innovation teams such as Gun-shot
          detection, RF location-finding (LF), and direction- finding (DF)
          applications, correlation interferometry, and pseudo-Doppler methods,
          etc.
        </p>
        <div className="w-[200px] h-[2px] bg-black inline-block mt-24"></div>
      </div>
      <div
        className="w-[100vw] overflow-hidden h-[200px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <BgElement1 className="w-[200px] absolute origin-center -right-20 -translate-y-[20%]" />
      </div>
      <div className="productContainer  w-[100%] text-[1.2rem] leading-relaxed">
        <div className="flex  justify-center gap-16 my-36 px-[10%]">
          <div className="w-[400px] h-[400px] bg-[#F2F2F2] rounded-2xl shadow-md overflow-hidden">
            <img
              src={require("../../assets/waitSystem.png")}
              className="w-[100%]"
            ></img>
          </div>
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5" data-aos="fade-up">
                WAIT System
              </h2>
              <p data-aos="fade-left" data-aos-duration="1000">
                The WAIT an acronym here for Warning Ahead of Intersection &
                Turns is a product suitable for early warning in blind turns and
                highlyway intersections with rural roads. This early warning
                system is based on RADAR sensing to detect the approaching
                vehicles in the blind turns and highway intersections and warn
                drivers abour approaching vehicles. Such early warnings can save
                accidents in blind turns in mountain regions and highway turns.
                In addition, such asystem can also operate in narrow mountain
                passages, bridges and tunnels for traffic regulations and to
                avoid congestion. The system is assisted with computer vision
                technology to detect the license plates of vihles violating the
                traffic rules and regulations and assist the authorities to
                generate regulatory penalties and tickets.
              </p>
            </div>
            <a className="underline cursor-pointer hover:text-blue-800">more</a>
          </div>
        </div>

        <div className="flex  justify-center gap-16 py-40 px-[10%] text-white bg-primary-color">
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5" data-aos="fade-up">
                TRACK System
              </h2>
              <p data-aos="fade-right" data-aos-duration="1000">
                The TRACK an acronym here for Traffic Regulation and Control Kit
                is a product suitable for automatic traffic light control based
                on traffic queing and vehicle classifications. The system
                operates on computer vision technology to count the number of
                vehicles, classify them for givng priority to the important
                vehcles such as Ambulance, Firebridgade, Police and
                administration etc. The system works on robust algorithim which
                can systematically assign waiting time to various sides in the
                cross junctions.
              </p>
            </div>
            <a className="underline cursor-pointer hover:text-blue-800">more</a>
          </div>
          <div className="w-[400px] h-[400px] bg-white rounded-2xl flex justify-center items-center shadow-2xl">
            {/* <img
              src={require("../../assets/RFlinear/p2.png")}
              className="w-[90%]"
            ></img> */}
          </div>
        </div>

        <div className="w-[100vw] h-[100px]">
          <div data-aos="fade-up" data-aos-duration="1000">
            <BgElement2 className="w-[300px] absolute origin-center -left-36 -translate-y-[30%]" />
          </div>
        </div>

        <div className="flex  justify-center gap-16 my-40 px-[10%]">
          <div className="w-[400px] h-[400px] bg-[#F2F2F2] rounded-2xl flex justify-center items-center shadow-md">
            {/* <img
              src={require("../../assets/RFlinear/p3.png")}
              className="w-[90%]"
            ></img> */}
          </div>
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5" data-aos="fade-up">
                PLAN System
              </h2>
              <p data-aos="fade-left" data-aos-duration="1000">
                The PLAN an acronym here for PLanning Metropolis Navigation is a
                product suitable for planning and regulating the entire city
                traffic navigation to avoid any congestions and assists in route
                diversions required during unavoidable events. The system
                aquires data from Track system as well as from online traffic
                data services such as Google map and Microsoft Azure to model
                the entire city traffic using our AI/ML platform. This platform
                can give traffic analytics based on data fusion with deployed
                sensors and online data services to plan for city traffic
                managements. A “digital Twin” will be developed to predict
                important measures to make smart city traffic regulated in a
                wholestic manner.
              </p>
            </div>
            <a className="underline cursor-pointer hover:text-blue-800">more</a>
          </div>
        </div>
      </div>
      <div className="w-[100vw] ">
        <div data-aos="fade-up" data-aos-duration="1500">
          <BgElement3 className="w-[300px] absolute origin-center -right-36 -translate-y-[50%]" />
        </div>
      </div>
      <CompanyFocus />
      <Footer />
    </div>
  );
};

export default CyberSystem;

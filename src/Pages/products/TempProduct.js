import React, { useEffect } from "react";
import { BgElement2, BgElement1, BgElement3 } from "../../assets";
import { CompanyFocus, Footer, Header } from "../../Components";
import AOS from "aos";
import "aos/dist/aos.css";

const TempProduct = () => {
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
          Radio Frequency Design and Signal Processing
        </h2>
        <p className="my-10">
          The company has a strong research background in various RF components
          including Radio Frequency Power Amplifier Design, MMICs, Transmitter
          Linearization, SDR test beds and Radio frequency passive components.
        </p>
        <p>
          We are dedicated to innovating in the area of many active and passive
          radio frequency components. These include broadband high-power
          amplifiers, waveguide-based combining, cavity filters, etc. Some
          innovations are also added in terms of soft IPs to mitigate
          impairments in software-defined radios. We have a strong research
          background of some of our directors who are from I.I.T-Roorkee and
          working in cutting-edge technologies related to radio frequency
          components. Recent R&D includes intelligent reflecting surfaces,
          multi-octave GaN MMICs, and millimeter-wave RFICs in CMOS and SiGe
          BiCMOS.
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
          <div className="w-[400px] h-[400px] bg-[#F2F2F2] rounded-2xl shadow-md">
            <img
              src={require("../../assets/RFlinear/p1.png")}
              className="w-[100%]"
            ></img>
          </div>
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5" data-aos="fade-up">
                Radio Frequency Passive Components
              </h2>
              <p data-aos="fade-left" data-aos-duration="1000">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, est id consequat ultricies, nibh lacus
                vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
                sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
                velit metus, laoreet ut justo vitae, venenatis euismod mauris.
                Quisque semper nulla ut augue lobortis, nec rhoncus orci
                iaculis. In hac habitasse platea dictumst. Aliquam fermentum
                magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur
                lobortis quam vestibulum lectus dictum, a egestas nunc
                sollicitudin. Nulla facilisi.
              </p>
            </div>
            <a className="underline cursor-pointer hover:text-blue-800">more</a>
          </div>
        </div>

        <div className="flex  justify-center gap-16 py-40 px-[10%] text-white bg-primary-color">
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5" data-aos="fade-up">
                Radio Frequency Power Amplifier
              </h2>
              <p data-aos="fade-right" data-aos-duration="1000">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, est id consequat ultricies, nibh lacus
                vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
                sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
                velit metus, laoreet ut justo vitae, venenatis euismod mauris.
                Quisque semper nulla ut augue lobortis, nec rhoncus orci
                iaculis. In hac habitasse platea dictumst. Aliquam fermentum
                magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur
                lobortis quam vestibulum lectus dictum, a egestas nunc
                sollicitudin. Nulla facilisi.
              </p>
            </div>
            <a className="underline cursor-pointer hover:text-blue-800">more</a>
          </div>
          <div className="w-[400px] h-[400px] bg-white rounded-2xl flex justify-center items-center shadow-2xl">
            <img
              src={require("../../assets/RFlinear/p2.png")}
              className="w-[90%]"
            ></img>
          </div>
        </div>
        <div className="w-[100vw] h-[100px]">
          <div data-aos="fade-up" data-aos-duration="1000">
            <BgElement2 className="w-[300px] absolute origin-center -left-36 -translate-y-[30%]" />
          </div>
        </div>

        <div className="flex  justify-center gap-16 my-40 px-[10%]">
          <div className="w-[400px] h-[400px] bg-[#F2F2F2] rounded-2xl flex justify-center items-center shadow-md">
            <img
              src={require("../../assets/RFlinear/p3.png")}
              className="w-[90%]"
            ></img>
          </div>
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5" data-aos="fade-up">
                GaN MMIC Designs
              </h2>
              <p data-aos="fade-left" data-aos-duration="1000">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, est id consequat ultricies, nibh lacus
                vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
                sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
                velit metus, laoreet ut justo vitae, venenatis euismod mauris.
                Quisque semper nulla ut augue lobortis, nec rhoncus orci
                iaculis. In hac habitasse platea dictumst. Aliquam fermentum
                magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur
                lobortis quam vestibulum lectus dictum, a egestas nunc
                sollicitudin. Nulla facilisi.
              </p>
            </div>
            <a className="underline cursor-pointer hover:text-blue-800">more</a>
          </div>
        </div>

        <div className="flex  justify-center gap-16 py-40 px-[10%] text-white bg-primary-color">
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5" data-aos="fade-up">
                SDR Test-Beds
              </h2>
              <p data-aos="fade-right" data-aos-duration="1000">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, est id consequat ultricies, nibh lacus
                vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
                sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
                velit metus, laoreet ut justo vitae, venenatis euismod mauris.
                Quisque semper nulla ut augue lobortis, nec rhoncus orci
                iaculis. In hac habitasse platea dictumst. Aliquam fermentum
                magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur
                lobortis quam vestibulum lectus dictum, a egestas nunc
                sollicitudin. Nulla facilisi.
              </p>
            </div>
            <a className="underline cursor-pointer hover:text-blue-800">more</a>
          </div>
          <div className="w-[400px] h-[400px] bg-white rounded-2xl flex justify-center items-center shadow-2xl">
            <img
              src={require("../../assets/RFlinear/p4.png")}
              className="w-[90%]"
            ></img>
          </div>
        </div>
        <div className="w-[100vw] ">
          <div data-aos="fade-up" data-aos-duration="1500">
            <BgElement3 className="w-[300px] absolute origin-center -right-36 -translate-y-[50%]" />
          </div>
        </div>

        <div className="flex  justify-center gap-16 my-40 px-[10%]">
          <div className="w-[400px] h-[400px] bg-[#F2F2F2] rounded-2xl flex justify-center items-center shadow-md">
            <img
              src={require("../../assets/RFlinear/p3.png")}
              className="w-[90%]"
            ></img>
          </div>
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5" data-aos="fade-up">
                Transmitter Linearization
              </h2>
              <p data-aos="fade-left" data-aos-duration="1000">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, est id consequat ultricies, nibh lacus
                vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
                sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
                velit metus, laoreet ut justo vitae, venenatis euismod mauris.
                Quisque semper nulla ut augue lobortis, nec rhoncus orci
                iaculis. In hac habitasse platea dictumst. Aliquam fermentum
                magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur
                lobortis quam vestibulum lectus dictum, a egestas nunc
                sollicitudin. Nulla facilisi.
              </p>
            </div>
            <a className="underline cursor-pointer hover:text-blue-800">more</a>
          </div>
        </div>

        <div className="flex  justify-center gap-16 py-40 px-[10%] text-white bg-primary-color">
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5" data-aos="fade-up">
                Antenna Solutions
              </h2>
              <p data-aos="fade-right" data-aos-duration="1000">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, est id consequat ultricies, nibh lacus
                vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
                sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
                velit metus, laoreet ut justo vitae, venenatis euismod mauris.
                Quisque semper nulla ut augue lobortis, nec rhoncus orci
                iaculis. In hac habitasse platea dictumst. Aliquam fermentum
                magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur
                lobortis quam vestibulum lectus dictum, a egestas nunc
                sollicitudin. Nulla facilisi.
              </p>
            </div>
            <a className="underline cursor-pointer hover:text-blue-800">more</a>
          </div>
          <div className="w-[400px] h-[400px] bg-white rounded-2xl flex justify-center items-center">
            <img
              src={require("../../assets/RFlinear/p6.png")}
              className="w-[100%] rounded-2xl shadow-2xl"
            ></img>
          </div>
        </div>
      </div>
      <CompanyFocus /> <Footer />
    </div>
  );
};

export default TempProduct;

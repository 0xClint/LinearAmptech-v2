import React, { useEffect } from "react";
import { Footer, Slider } from "../Components";
import { NavLink } from "react-router-dom";
import Header from "../Components/Header";
import video1 from "../assets/video/1.mp4";
import {
  BgElement1,
  BgElement2,
  BgElement3,
  BgElement4,
  Element1,
  Element2,
  Element3,
} from "../assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  return (
    <div className="font-Inter">
      <Header />

      {/* *********************Hero Section ****************************** */}

      <div className="heroSection gap-2  h-[88vh] flex flex-col justify-center items-center text-white z-0 overflow-hidden">
        {/* <div className=" bg-slate-600 z-10"></div> */}
        <video autoPlay muted loop src={video1} className="z-10" />
        <div className="absolute w-[100%] h-[50vh] z-10 flex flex-col justify-center items-center">
          <h2 className=" text-[5rem] font-bold drop-shadow-2xl">
            Linear AmpTech
          </h2>
          <p className="text-[2rem] font-mnormal mb-6 ">
            Creating Difference With Technology
          </p>
          <NavLink
            className=" border-[3px] border-white text-white text-[1.1rem] py-3 px-5 hover:scale-110 duration-300"
            to="/about-us"
          >
            Read more
          </NavLink>
        </div>
      </div>

      {/* *********************Intro Section****************************** */}

      <div className="introSection gap-16  flex justify-center items-end px-[10%] h-[100%] p-16">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[2rem] font-bold">
            We're Delivering Only
            <br /> Exceptinal Quality Work
          </h2>
          <Element3 className="h-[400px] w-[400px]" />
        </div>
        <div className=" w-[40%] mb-20">
          <p className=" text-[1.1rem] font-medium leading-loose mb-2 ">
            The linearized amplifier technologies and services private limited
            (linear-amptech) is a start-up company formed by faculty and
            students of IIT Roorkee. The company is dedicated towards indigenous
            development of radio frequency front end and wireless solutions. The
            primary goal is to develop tangible product from in-house R&D and
            bring it to national as well as international market.
          </p>
          <NavLink to="/about-us" className="font-semibold text-[1.1rem]">
            Read more
          </NavLink>
        </div>
      </div>
      <div
        className="w-[100vw] absolute overflow-hidden h-[200px] -translate-y-[200px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <BgElement1 className="w-[200px] absolute origin-center -right-20 -translate-y-[20%]" />
      </div>
      {/* *********************Intro ****************************** */}

      <div className="slider w-[98.9vw] px-[7%] py-14 bg-[#F2F2F2] mt-28">
        <h2 className="text-[2.5rem] font-bold text-center">Our Products</h2>
        <Slider />
      </div>
      {/* *********************Innovation ****************************** */}

      <div className="innovation w-[100%] px-[10%] py-32 flex justify-center gap-20">
        <div className="w-[650px] flex flex-col gap-5">
          <p className="tag text-[#0346B5] text-[1.1rem] font-semibold">
            INNOVATIONS
          </p>
          <h2 className="text-[2.5rem] font-bold">Cloud Project</h2>
          <p className=" text-[1.1rem] leading-loose h-[200px]">
            We focus on the use of IOT data to provide companies with real-time
            observability to increase efficiency, reduce costs predict, possible
            faults and analyse the root of faults.
          </p>
          <NavLink
            to="/innovations"
            className="text-blue-700 underline font-medium cursor-pointer"
          >
            Discover more
          </NavLink>
        </div>
        <Element1 className="h-[450px]" />
      </div>
      <div className="w-[100vw] h-[100px]">
        <div data-aos="fade-up" data-aos-duration="1000">
          <BgElement2 className="w-[300px] absolute origin-center -left-36 -translate-y-[30%]" />
        </div>
      </div>

      {/* *********************Service ****************************** */}
      <div className="flex w-[100%] px-[10%] py-32 gap-20 bg-[#F2F2F2]">
        <div className="left w-1/2 mt-10">
          <div className="upperPart flex">
            <div className="serviceHeading text-[2.5rem] font-bold w-[300px] mb-14">
              Services We’re
              <br /> Offering
            </div>

            <div className="lineStyle h-[6px] w-[335px]  bg-primary-color relative top-7"></div>
          </div>

          <Element2 />
        </div>
        <div className="right w-1/2 flex flex-col gap-7">
          <div className="imgLower h-[400px] w-[100%] flex justify-center items-center  overflow-hidden">
            <BgElement4 className="h-[450px]" />
          </div>
          <div className="text-[1.1rem] flex flex-col gap-4">
            <p>
              Vivamus blandit est vitae nisi pellentesque blandit. Donec
              sagittis tempor sem, eu maximus lacus egestas ut. Vestibulum et
              magna dictum
            </p>
            <p>
              Morbi porttitor neque lacus, in cursus diam suscipit nec.
              Phasellus odio nulla, gravida et odio sed, congue.
            </p>
          </div>
          <NavLink
            to="/innovations"
            className="bg-primary-color text-white text-[1.1rem] py-3 px-5 w-44 flex justify-center items-center hover:scale-110 duration-200"
          >
            Discover more
          </NavLink>
        </div>
      </div>
      <div className="w-[100vw] ">
        <div data-aos="fade-up" data-aos-duration="1500">
          <BgElement3 className="w-[300px] absolute origin-center -right-36 -translate-y-[50%]" />
        </div>
      </div>

      {/* *********************AboutUs ****************************** */}
      <div className="aboutUs w-[100%] px-[10%] flex flex-col justify-center items-center gap-5 py-14 bg-primary-color text-white">
        <h2 className="text-[2.5rem] font-bold text-center">About Us</h2>
        <p className="text-[1.1rem] leading-loose text-center">
          a technology service company that provides innovative solutions to
          help businesses stay ahead of the curve. We specialize in [list your
          main services], and our team of experts is dedicated to providing the
          best possible service to our clients. We believe in the power of
          technology to transform businesses and industries. We are passionate
          about using our skills and knowledge to help our clients harness the
          full potential of technology to achieve their goals.
        </p>
        <NavLink
          to="/about-us"
          className="bg-primary-color text-white text-[1.1rem] py-3 px-6 border-2 border-white hover:scale-105 duration-100"
        >
          Read more
        </NavLink>
      </div>
      {/* *********************Footer ****************************** */}
      <Footer />
    </div>
  );
};

export default Home;

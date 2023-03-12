import React from "react";
import { Footer, Header } from "../Components";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import aboutbg from "../assets/aboutbg.jpg";
import rf from "../assets/rfpower/0.png";
import sdr from "../assets/SDR/1.jpg";
import poweramp from "../assets/PowerAmp/1.png";

import BoardMember from "../Components/BoardMember";

import { boardMember } from "../data/BoardMemberData";

const AboutUs = () => {
  return (
    <div>
      <Header />
      {/* firt section */}

      <div className="heroSection   ">
        <div
          className="  w-[100%] min-h-[400px] flex flex-col justify-center items-center gap-2 text-white"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHRlYW18ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60")`,
          }}
        >
          <h2 className="text-[4rem] font-bold font-Roboto drop-shadow-2xl text-center">
            Get to Know Us
            <br /> Our Passion, Purpose, and People
          </h2>
        </div>
      </div>

      {/* middle */}
      <div className="mt-10 ">
        <section className="bg-white dark:bg-gray-800 lg:pt-12 pb-0 lg:flex lg:justify-center">
          <div className="overflow-hidden bg-white  lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-none ">
            <div className="lg:w-1/2">
              <div
                className="h-64 bg-cover lg:h-full"
                style={{
                  backgroundImage: `url(${aboutbg})`,
                  width: "588px",
                  height: "480px",
                }}
              ></div>
            </div>

            <div className="max-w-xl px-4 lg:pl-12 py-12 lg:max-w-5xl lg:w-1/2">
              <div class="lineStyle h-[6px] w-[111px] bg-[#0465f8] relative top-7 left-1/2"></div>
              <h2 className="text-[40px] font-semibold text-black  ">
                About us
              </h2>

              <p className="mt-4 text-[20px] text-black  ">
                Linear Amplifier Technology & Services private ltd (Linear
                Amp-tech) is a company formed and driven by innovative minds of
                Indian I.I.T Roorkee. The company is Incubated in I.I.T Roorkee
                and includes students and professors on the board of directors.
                The company is focused on innovation to cater to various
                technical challenges in the area of Electronics and Software
                Engineering.
              </p>

              <button className="w-[148.8px] h-[47px] bg-[#0465F8] px-5 py-2 mt-4 text-[18.8px]  text-white  hover:scale-110  duration-300 rounded-none lg:w-auto ">
                Read more
              </button>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-800 lg:pb-12 pt-0 lg:flex lg:justify-center px-4">
          <div className="overflow-hidden bg-white  lg:mx-auto lg:flex lg:max-w-6xl lg:w-full lg:shadow-none ">
            <div className=" px-0 py-12 ">
              <p className="mt-0 text-black  text-[20px] ">
                The company is geared up to take on new technology development
                projects in the relevant areas. The company is primarily
                focusing on various aspects of cyber-physical system design
                including radio-frequency sensors development and addressing the
                cyber domain with Artificial intelligence and Machine Learning.
                The company is geared up to take on new technology development
                projects in the relevant areas. The company is primarily
                focusing on various aspects of cyber-physical system design
                including radio-frequency sensors development and addressing the
                cyber domain with Artificial intelligence and Machine Learning.
              </p>
              <p className="mt-4 text-black  text-[20px]">
                The company also envisages the requirement for the specialized
                technology areas such as Radio-frequency design and hence is
                committed to the development of radios and related components to
                address the immediate needs of country’s self-reliance drive.
                The vision is to foster R&D into product design and development
                competing with cutting-edge technologies for the national and
                international market. The R&D is backed by the know-how
                generated from academics and is therefore capable of embarking
                new and advanced technology into products.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* fetuses area */}

      {/* we build awesome products */}
      <div className="lg:h-[893px] bg-[#292C33]  flex justify-center flex-col align-end items-center mt-12 ">
        <div className="py-16 lg:mt-32">
          <h1 className="text-white text-[48px] font-semibold text-center">
            We build awesome products
          </h1>
        </div>
        <div className=" text-[16px] lg:flex  ">
          <div className="h-[282px] max-w-[477px] bg-[#48484A] text-white p-8 ">
            <h1 className="text-[20px] font-semibold">RF Power Amplifiers</h1>
            <p className="mt-4">
              Linear Amptech provides excellent indigenous power amplifier
              solution for Cellular application and variety of military and
              space applications. We provide vast range of high performance
              power amplifiers with frequency coverage from Dc to 18 GHz.
            </p>
            <div className="w-[114px] h-[36px]  px-5 pt-1 mt-6 text-[14px] border border-white text-white    hover:scale-110 duration-300  ">
              <NavLink to={"/products/rf-power-amplifiers"}>Read more</NavLink>
            </div>
          </div>
          <div className="h-[282px] w-[477px] bg-white">
            <img src={rf} />
          </div>
        </div>

        <div className="lg:flex  ">
          <div className="h-[282px] max-w-[477px] bg-white">
            <img src={sdr} className="h-[100%] " />
          </div>
          <div className="h-[282px] w-[477px] bg-[#0465F8] text-white p-8 ">
            <h1 className="text-[20px] font-semibold">
              Software Defined Point to Point Radio Applications
            </h1>
            <p className="mt-4">
              With the advent of Software Defined Radio (SDR) the radio hardware
              scaled down to software and most of the features is pushed into
              software. In the scenario of war, the communication significantly
              depends on flexibility, interoperability, accuracy, and
              promptness.
            </p>
            <div className="w-[114px] h-[36px]  px-5 pt-1 mt-2  text-[14px] border border-white text-white    hover:scale-110 duration-300  ">
              <NavLink to={"/products/software-defined-radio"}>
                Read more
              </NavLink>
            </div>
          </div>
        </div>

        <div className="lg:flex ">
          <div className="h-[282px] max-w-[477px] bg-[#48484A] text-white p-8 ">
            <h1 className="text-[20px] font-semibold">
              RF linear and nonlinear characterization
            </h1>
            <p className="mt-4">
              Our capabilities lies in the generation of single and multiple
              Tone, modulated signals like QAM, OFDM, LTE, pulse shaping in
              baseband and transmission in analog domain. The testbed designed
              is capable of performing the measurement of active devices as well
              as passive devices.
            </p>
            <div className="w-[114px] h-[36px]  px-5 pt-1 mt-2  text-[14px] border border-white text-white    hover:scale-110 duration-300  ">
              <NavLink to={"/products/rf-linear-nonlinear-characterization"}>
                Read more
              </NavLink>
            </div>
          </div>
          <div className="h-[282px] w-[477px] bg-white border-b border-r border-black">
            <img src={poweramp} />
          </div>
        </div>
      </div>
      {/* BOARD of Directors */}
      <div className="lg:mt-64 mb-20">
        <section className="bg-white ">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-[40px] font-semibold text-center text-black capitalize ">
              Board Of Directors
            </h1>

            <p className="max-w-6xl text-[20px] mx-auto my-6 text-center text-black ">
              Our board of directors comprises seasoned professionals who
              possess a wealth of knowledge and expertise in various fields. We
              are honored to have a world-renowned power amplifier expert Dr.
              Karun Rawat, a professor from IIT Roorkee, and an experienced
              member in the field of electronics communication on our board.
              With their diverse skill sets and leadership, we are well-equipped
              to steer our organization towards success and deliver outstanding
              outcomes to our stakeholders
            </p>

            <div className="grid grid-cols-1 gap-8 mt-2 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
              {boardMember.map((member) => {
                return <BoardMember member={member} />;
              })}
            </div>
          </div>
        </section>
      </div>
      {/* GET to know */}
      <hr />
      <section className=" bg-[#0465F8]">
        <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
          <h2 className="text-[48px]  font-medium tracking-tight xl:text-3xl text-white">
            Get to know today!
          </h2>

          <div className="mt-8 lg:mt-0 ">
            <div className="flex w-36 flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
              <div className="px-6 py-2 text-sm tracking-wide text-white   hover:scale-110 duration-300  border border-white font-semibold ">
                <NavLink
                  to={
                    "https://www.linkedin.com/company/linear-amptech/?originalSubdomain=in"
                  }
                  target="_blank"
                >
                  Read more
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;

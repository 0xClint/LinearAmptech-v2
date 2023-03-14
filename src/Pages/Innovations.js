import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import waitSysVideo from "../assets/video/waitSysVideo.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { BgElement1, BgElement2, BgElement3 } from "../assets";
import bgImg from "../assets/video/img1.jpg";
import solutionBg from "../assets/solutionBg.jpg";

const Innovations = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  return (
    <div>
      <Header />
      <div className="z-10">
        <header>
          <div
            className="w-full lg:h-[620px]  z-0 overflow-hidden  bg-cover py-12 lg:py-0 "
            style={{
              backgroundImage: `url(${bgImg})`,
            }}
          >
            <div className="  z-10  lg:h-[612px] w-[100%] text-white flex justify-center items-center flex-col lg:-mt-12 ">
              <h2 className=" lg:text-[5rem] text-4xl font-bold drop-shadow-2xl  ">
                Innovations
              </h2>
              <p className="text-[1.5rem] text-2xl font-normal mb-6 lg:mt-8">
                Innovation that drives progress
              </p>
              <NavLink
                className=" lg:border-[3px] border border-white text-white text-[1.1rem] lg:py-3 lg:px-5 py-2 px-4 hover:scale-110 duration-300"
                to="/about-us"
              >
                Read more
              </NavLink>
            </div>
            {/* <img
              src={require("../assets/video/img1.jpg")}
              className="z-10 -translate-y-40 w-[100%] "
            ></img> */}
          </div>
        </header>
        <div>
          <section className="bg-white  lg:mt-8 mt-4 xl:mt-12 ">
            <div className="container lg:flex lg:px-[12%] pt-12 mx-auto text-left px-4">
              <div className="lg:w-[50%]">
                <h2 className="font-bold lg:text-[40px] leading-relaxed text-3xl text-black mb-2 ">
                  Shaping the future with creativity and vision.
                </h2>

                <p className=" leading-relaxed w-[95%] mt-8 text-[1.1rem]">
                  Innovations are the lifeblood of progress and have the power
                  to transform the way we live, work, and interact with the
                  world around us. From the wheel to the internet, human beings
                  have been constantly pushing the boundaries of what's
                  possible, seeking new and better ways to solve problems,
                  improve efficiency, and enhance our quality of life.
                  Innovations can take many forms, from breakthrough
                  technologies and scientific discoveries to new business models
                  and social movements. They often require creativity,
                  perseverance, and the courage to challenge conventional
                  thinking. The impact of innovations can be profound and
                  long-lasting, shaping the course of history and defining the
                  future of humanity.
                </p>
              </div>
              <div className="lg:w-[50%] flex justify-center items-center">
                <img
                  src={require("../assets/AI&ML/1.png")}
                  className="w-[500px]"
                ></img>
              </div>
            </div>
          </section>
        </div>
        <div
          className="absolute w-[100vw] overflow-hidden h-[200px]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <BgElement1 className="lg:w-[300px] absolute origin-center w-[180px] -right-20 lg:-right-36 -translate-y-[20%]" />
        </div>
        <div className="lg:pr-44 lg:pl-44 mt-16">
          <section className="bg-white ">
            <div className="container px-4 py-12  mx-auto">
              <h1 className="lg:text-[40px] text-3xl mb-8 font-bold text-black capitalize   ">
                Problems
              </h1>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="text-left border-2 shadow-md border-slate-200  p-8">
                  <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                      />
                    </svg>
                  </span>

                  <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                    Innovation that drives progress
                  </h1>

                  <p className="mt-2 text-black ">
                    The present maintenance process has following limitations
                  </p>

                  <div>
                    <ul className="list-square ml-4">
                      <li className="mt-4 ">
                        Skilled operator are required for analyzing thousands of
                        complex components
                      </li>
                      <li className=" mt-4">
                        Phone to mistakes due to human error
                      </li>{" "}
                      <li className="mt-4">
                        Sensor data can be utilized for predective maintenance
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-left p-8 border-2 shadow-md border-slate-200 ">
                  <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                      />
                    </svg>
                  </span>

                  <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                    Increasing number of devices and sensors data
                  </h1>

                  <p className="mt-2 text-black ">
                    The sheer volume of data being generated can be
                  </p>

                  <div>
                    <ul className="list-square ml-4">
                      <li className="mt-4 ">Overwhelming</li>

                      <li className=" mt-4">
                        Difficult to extract data for meaningful insights
                      </li>

                      <li className="mt-4">Data is not leveraged</li>
                    </ul>
                  </div>
                </div>

                <div className="border-2 shadow-md border-slate-200  p-8 ">
                  <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                      />
                    </svg>
                  </span>

                  <h1 className="mt-4 text-[20px] font-bold font-Poppins text-black ">
                    Untimely maintenance can lead to machine failure
                  </h1>

                  <p className="mt-2 text-black ">
                    At present maintenance is done periodically or after the
                    device has been damaged, which leads to unwanted
                  </p>

                  <div>
                    <ul className="list-square ml-4">
                      <li className="mt-4 ">Downtime additional costs</li>

                      <li className=" mt-4">Negatively affects productivity</li>

                      <li className="mt-4"> Operational efficiency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* solutions */}
        <div className="lg:pr-40 lg:pl-40 mt-16">
          <section className="bg-white ">
            <div className="container px-4 py-10 mx-auto">
              <h1 className="lg:text-[40px] text-3xl font-bold text-black capitalize mb-8   ">
                Solutions
              </h1>

              <div className="mt-2 lg:flex lg:items-center">
                <div className="grid w-full grid-cols-1 gap-4 lg:w-1/2 xl:gap-8 md:grid-cols-2">
                  <div className="space-y-2 border-2 shadow-md border-slate-200  p-4">
                    <span className="inline-block p-3 text-[#0465F8] bg-blue-100   dark:bg-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </span>

                    <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                      Machine Learning
                    </h1>

                    <p className="text-black">
                      It is a generalized ML platform to provide personalized
                      solution for defence and industries.
                    </p>
                  </div>

                  <div className="space-y-2 border-2 shadow-md border-slate-200  p-4">
                    <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                        />
                      </svg>
                    </span>

                    <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                      Real Time Data
                    </h1>

                    <p className="text-black">
                      Use of real-time data predictive analytics to identify and
                      track potential problems before they occur in our assets.
                    </p>
                  </div>

                  <div className="space-y-2  border-2 shadow-md border-slate-200  p-4">
                    <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                        />
                      </svg>
                    </span>

                    <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                      Acuuracy
                    </h1>

                    <p className="text-black">
                      To develop a digital twin of an industrial asset that
                      accurately represents its behavior and performance.
                    </p>
                  </div>

                  <div className="space-y-2 border-2 shadow-md border-slate-200  p-4">
                    <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </span>

                    <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                      Usefullness
                    </h1>

                    <p className="text-black">
                      To predict remaining useful life (RUL) of Machines.
                    </p>
                  </div>
                  <div className="space-y-2 border-2 shadow-md border-slate-200  p-4">
                    <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                      </svg>
                    </span>

                    <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                      Deep Learning
                    </h1>

                    <p className="text-black">
                      Provide research platform where teams can collaborate
                      develop deep learning models and take data driven actions.
                    </p>
                  </div>
                  <div className="space-y-2 border-2 shadow-md border-slate-200  p-4">
                    <span className="inline-block p-3  text-[#0465F8] bg-blue-100    dark:bg-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                        />
                      </svg>
                    </span>

                    <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize ">
                      Premise Solution
                    </h1>

                    <p className="text-black">
                      Provide on premise solution which gives full control of
                      their critical data with security
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex lg:w-1/2 lg:justify-around ml-8">
                  <img
                    className="w-[28rem] h-[28rem] flex-shrink-0 lg:flex-shrink-0 object-cover xl:w-[34rem] xl:h-[760px] "
                    src={solutionBg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="w-[100vw] h-[100px]">
        <div data-aos="fade-up" data-aos-duration="1000">
          <BgElement2 className="lg:w-[300px] absolute origin-center lg:-left-36 -translate-y-[30%] w-[180px] -left-20" />
        </div>
      </div>
      {/* new image box */}
      {/* <div className="lg:pr-44 lg:pl-44">
        <section className="bg-white ">
          <div className="h-[32rem]  ">
            <div className="container  py-32 mx-auto">
              <h1 className="text-2xl font-bold font-Poppins text-center text-black capitalize lg:text-3xl px-4 ">
                Asset tracking by VHR remote sensing data
              </h1>
            </div>
          </div>

          <div className="container px-4 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <div className="flex flex-col items-center  rounded-none dark:-gray-700">
                <img
                  className="object-cover w-full rounded-none aspect-square"
                  src={require("../assets/tracking1.png")}
                  alt=""
                />
              </div>

              <div className="flex flex-col items-center  sm:rounded-none dark:-gray-700">
                <img
                  className="object-cover w-full rounded-none aspect-square"
                  src={require("../assets/tracking2.png")}
                  alt=""
                />
              </div>

              <div className="flex flex-col items-center  sm:rounded-none dark:-gray-700">
                <img
                  className="object-cover w-full rounded-none aspect-square"
                  src={require("../assets/tracking3.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div> */}
      {/* <div
        className="absolute w-[100vw] overflow-hidden h-[200px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <BgElement1 className="w-[200px] absolute origin-center -right-20 -translate-y-[20%]" />
      </div> */}
      <div className="mx-[12%]">
        <h2 className="text-[2.5rem] font-bold ">Falcon Cloud</h2>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-[100%] lg:w-[50%]">
            <h2 className="text-[1.8rem] font-bold mt-5">How it works ?</h2>
            <ul className="list-disc my-3 ml-8 flex flex-col gap-1">
              <li>
                Linear Amptech's Cloud Analytics solution is designed to monitor
                sensors and generate valuable insights from them.
              </li>
              <li>
                The process begins with data ingestion, where data from various
                sensors is collected in real-time and transmitted to our
                cloud-based platform for analysis.
              </li>
              <li>
                Using advanced algorithms and machine learning techniques, we
                process the data and identify patterns and anomalies.
              </li>
              <li>
                A comprehensive analysis report is generated and shown in a user
                friendly dashboard
              </li>
              <li>
                This enables businesses to make informed decisions and take
                action based on real-time data, improving their operational
                efficiency and reducing downtime.
              </li>
            </ul>
            <h2 className="text-[1.8rem] font-bold mt-5">Benefits</h2>
            <ul className="list-disc my-3 ml-8 flex flex-col gap-1">
              <li>
                Reduction of cost for an organisation due to process
                optimization
              </li>
              <li>No code solutions</li>
              <li>
                Reduction in time and cost to develop and deploy the IIoT app
              </li>
              <li>
                Access to advanced techniques to detect issues before the actual
                building
              </li>
            </ul>
          </div>
          <div className="rightBox w-[100%] lg:w-[50%] flex p-5">
            <img
              src={require("../assets/AI&ML/2.png")}
              className="w-[100%] h-auto"
            ></img>
          </div>
        </div>
        {/* <h2 className="text-[1.8rem] font-bold mt-5">Diagram</h2> */}
        <img
          src={require("../assets/falcon1.png")}
          className="my-[1.5rem] "
        ></img>
      </div>
      {/* new two big images */}
      <div className="lg:pr-44 lg:pl-44 my-20 px-4">
        <h1 className="lg:text-[40px] text-3xl font-bold text-black capitalize mb-10 lg:pl-8   ">
          WAIT System
        </h1>
        <section className="bg-[#6A6A6A] max-w-[1085px] m-auto max-h-[564px] border ">
          <video
            src={waitSysVideo}
            controls
            className="z-10"
            data-autoplay="1"
          />
        </section>
        <p className=" leading-relaxed max-w-[1085px] m-auto mt-20 text-[1.1rem] text-justify">
          WAIT System stands for Warning Ahead Of Intersections and Turns.
          <br />
          Driving on rural roads in India can be risky, especially during
          winters when fog reduces visibility. Blind intersections and turns in
          hilly terrain pose a significant danger to drivers who may be slow to
          respond to honking or ignore their lanes. This can result in
          accidents, traffic jams, and road rage. However, Linear Amp Tech has
          developed an innovative solution called the Wait System, which uses
          radar technology to detect approaching vehicles and alert drivers with
          dynamic warning signs. The system can be deployed with road
          infrastructure to automatically manage traffic in remote locations
          prone to traffic jams, making driving safer and more efficient.
        </p>
        <h2 className="lg:text-[2.5rem] text-3xl font-bold mb-5 mt-14">
          LoraWAN
        </h2>
        <div className="lg:flex justify-between">
          <div className="lg:w-[50%]">
            <h2 className="text-[1.8rem] font-bold mt-5">
              Testing Hard Connections
            </h2>
            <ul className=" my-3 ml-8 flex flex-col gap-1 list-square">
              <li>
                Device connected to multiple gateways with varying backhaul
                performance
              </li>
              <li> Adaptive Data Rating </li>
              <li> Rapidly moving devices </li>
              <li> Uncalibrated crystals</li>
            </ul>
            <h2 className="text-[1.8rem] font-bold mt-5">Benefits</h2>
            <ul className=" my-3 ml-8 flex flex-col gap-1 list-square">
              <li> Run application in seconds </li>
              <li>
                Full control over gateway parameters (RSSI, gateways within
                reach)
              </li>
              <li>
                Still LoRaWAN: end-to-end encryption, spreading factors, channel
                hopping
              </li>
              <li>No changes required on network side</li>
            </ul>
          </div>
          <div className="rightBox lg:w-[50%] flex">
            <img src={require("../assets/lorawan1.png")}></img>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <BgElement3 className="lg:w-[300px] w-[200px] absolute origin-center -right-[340px] -translate-y-[50%]" />
        </div>
        {/* <div className="text-[1.8rem] font-bold mt-5">Diagrams</div> */}
        <div className="imgContainer flex flex-col lg:flex-row md:flex-col justify-between items-center gap-5 mt-9">
          <img
            src={require("../assets/InnovationE.png")}
            className="w-[550px]"
          ></img>
          <img
            src={require("../assets/lorawan2.png")}
            className="w-[550px] lg:h-[376px]"
          ></img>
        </div>
        {/* <div className="text-[1.8rem] font-bold mt-16 mb-12">
          Frequency Hopping
        </div>
        <div className="imgContainer flex justify-center items-center gap-24">
          <img
            src={require("../assets/InnovationE2.png")}
            className="w-[900px]"
          ></img>
        </div> */}
      </div>
      {/* BLUE BOX */}
      <div className="lg:pr-48 lg:pl-48 h-[324px] max-w-[100%] bg-[#0465f8] flex justify-center my-4 px-4 lg:m-0 lg:mt-6 justify-items-center mt-20  items-center content-center">
        <p className="text-center text-white lg:text-[20px] text-base leading-relaxed px-2 lg:px-0">
          We are dedicated to exploring new technologies in our core product
          areas and have established a good ecosystem between academics and
          industry for technology development with innovation. We have a strong
          team with I.I.T background who are continuously innovating new
          technology solutions for the company. We believe in continuous
          innovation for bringing cutting-edge technologies to the market.
        </p>
      </div>
      {/* other featues */}
      <div className="lg:pr-48 lg:pl-48 bg-[#F2F2F2]">
        <section className="bg-[#f2f2f2] ">
          <div className="container px-4 py-10 mx-auto">
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
              <div className="p space-y-3  bg-white  ">
                <img
                  className="object-cover object-center w-full lg:w-[354px] rounded-none h-[248px]"
                  src={require("../assets/first.jpg")}
                  alt=""
                />

                <h1 className="text-[20px] font-bold  text-black capitalize  px-4 pt-2">
                  Cyber physical system
                </h1>

                <p className="text-black tracking-wide px-4 pb-6">
                  Refers to a system that integrates physical devices with a
                  cyber interface for monitoring and controlling the physical
                  world. The company is focusing on innovation in CPS for
                  various applications such as
                  <span className="">Traffic Solutions</span>, Industry 4.0, and
                  Defence Platforms, and is seeking unique sensors for
                  innovative solutions such as Gun-Shot Detection, RF
                  Location-Finding, and Correlation Interferometry, amonog
                  others.
                </p>
              </div>

              <div className=" space-y-3 bg-white   rounded-none ">
                <img
                  className="object-cover object-center w-full lg:w-[354px] rounded-none h-[248px]"
                  src={require("../assets/second.png")}
                  alt=""
                />

                <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize px-4 pt-2 ">
                  AI and ML
                </h1>

                <p className="text-black px-4 pb-6">
                  We are committed to evolving as Deep Tech Comapany. Artificial
                  Intelligence and Machine Learning is one the innovative areas
                  to which we are keen to contribute. Our recent innovation
                  involves the development of and ML Pipleline in our own
                  Network-Attached Storage (NAS) and computational Platform for
                  executing all the background algorithms.
                </p>
              </div>

              <div className=" space-y-3 bg-white">
                <img
                  className="object-cover object-center w-full lg:w-[354px] rounded-none h-[248px]"
                  src={require("../assets/third.png")}
                  alt=""
                />

                <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize px-4 pt-2 ">
                  The Radio Frequency Components
                </h1>

                <p className="text-black px-4 pb-6">
                  The company has a strong research background, with directors
                  from I.I.T-Roorkee who are working in cutting-edge radio
                  frequency technologies. Their recent R&D focus includes
                  intelligent reflecting surfaces, multi-octave GAN MMICs, and
                  millimeter-wave RFICs in CMOS and SiGe BiCMOS. Overall, the
                  company is dedicated to pushing the boundaries of radio
                  frequency technology and providing innovative solutions to
                  their clients.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Innovations;

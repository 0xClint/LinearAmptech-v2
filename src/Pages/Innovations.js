import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import waitSysVideo from "../assets/video/waitSysVideo.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { BgElement1, BgElement2, BgElement3 } from "../assets";

const Innovations = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  return (
    <div>
      <Header />

      <div className="z-10">
        <header>
          <div className="w-full h-[612px] z-0 overflow-hidden bg-cover">
            <div className="absolute z-10 h-[612px] w-[100%] text-white flex justify-center items-center flex-col">
              <h2 className=" text-[5rem] font-bold drop-shadow-2xl">
                Innovations
              </h2>
              <p className="text-[1.5rem] font-mnormal mb-6 ">
                Innovation that drives progress
              </p>
              <NavLink
                className=" border-[3px] border-white text-white text-[1.1rem] py-3 px-5 hover:scale-110 duration-300"
                to="/about-us"
              >
                Read more
              </NavLink>
            </div>
            <img
              src={require("../assets/video/img1.jpg")}
              className="z-10 -translate-y-40"
            ></img>
            {/* <div className=" flex items-center justify-center w-full h-full bg-gray-900/40"> */}
            {/* <div className="absolute z-50 text-center">
              <h1 className="text-[24px] font-medium text-black lg:text-[24px]">
                Innovation that drives progress
              </h1>
              <button className=" px-7 py-2 w-[148.83px]  h-[47px] mt-8 text-sm font-medium text-[#0465f8] capitalize transition-colors duration-300 transform bg-white rounded-none lg:w-auto  focus:outline-none">
                Read more
              </button>
            </div> */}
            {/* </div> */}
          </div>
          <div>
            <section className="bg-white  mt-8">
              <div className="container flex px-[12%] pt-12 mx-auto text-left">
                <div className="w-[50%]">
                  <h2 className="font-bold text-[40px] text-black mb-2 ">
                    Shaping the future with creativity and vision.
                  </h2>

                  <p className=" leading-relaxed w-[95%] mt-8 text-[1.1rem]">
                    Innovations are the lifeblood of progress and have the power
                    to transform the way we live, work, and interact with the
                    world around us. From the wheel to the internet, human
                    beings have been constantly pushing the boundaries of what's
                    possible, seeking new and better ways to solve problems,
                    improve efficiency, and enhance our quality of life.
                    Innovations can take many forms, from breakthrough
                    technologies and scientific discoveries to new business
                    models and social movements. They often require creativity,
                    perseverance, and the courage to challenge conventional
                    thinking. The impact of innovations can be profound and
                    long-lasting, shaping the course of history and defining the
                    future of humanity.
                  </p>
                </div>
                <div className="w-[50%] flex justify-center items-center">
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
            <BgElement1 className="w-[200px] absolute origin-center -right-20 -translate-y-[20%]" />
          </div>
          <div className="lg:pr-48 lg:pl-48">
            <section className="bg-white ">
              <div className="container px-6 py-12 mx-auto">
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                >
                  <h1 className="text-[40px] font-bold text-black capitalize   ">
                    Problems
                  </h1>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <div className="text-left border border-black p-8">
                    <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
                      <path
                        d="M29.6931 14.2283L22.7556 6.87823C22.3292 6.426 21.6175 6.40538 21.1652 6.83212C20.7137 7.25851 20.6927 7.9706 21.1195 8.42248L27.3284 15L21.1195 21.5783C20.6927 22.0302 20.7137 22.7419 21.1652 23.1687C21.3827 23.3738 21.6606 23.4754 21.9374 23.4754C22.2363 23.4754 22.5348 23.3569 22.7557 23.1233L29.6932 15.7729C30.1022 15.339 30.1023 14.6618 29.6931 14.2283Z"
                        fill="#2D3748"
                      />
                      <path
                        d="M8.88087 21.578L2.67236 15L8.88087 8.42215C9.30726 7.97028 9.28664 7.25812 8.83476 6.83179C8.38323 6.4054 7.67073 6.42603 7.2444 6.87791L0.306858 14.2279C-0.102245 14.6614 -0.102245 15.3391 0.306858 15.7726L7.24475 23.123C7.466 23.3574 7.76413 23.4755 8.06302 23.4755C8.33976 23.4755 8.61767 23.3735 8.83476 23.1684C9.28705 22.742 9.30726 22.0299 8.88087 21.578Z"
                        fill="#2D3748"
                      />
                      <path
                        d="M16.8201 3.08774C16.2062 2.99476 15.6317 3.41622 15.5379 4.03011L12.2379 25.6302C12.1441 26.2445 12.566 26.8186 13.1803 26.9124C13.238 26.921 13.295 26.9252 13.3516 26.9252C13.898 26.9252 14.3773 26.5266 14.4624 25.97L17.7624 4.3699C17.8562 3.7556 17.4343 3.1815 16.8201 3.08774Z"
                        fill="#4299E1"
                      />
                    </svg>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 50,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                    >
                      <h1 className="mt-4 text-xl font-semibold text-black ">
                        Innovation that drives progress
                      </h1>
                    </motion.div>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 50,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                    >
                      <p className="mt-2 text-black ">
                        The present maintenance process has following
                        limitations
                      </p>
                    </motion.div>
                    <div>
                      <ul className="list-square ml-4">
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 50,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                        >
                          <li className="mt-4 ">
                            Skilled operator are required for analyzing
                            thousands of complex components
                          </li>
                        </motion.div>
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 50,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                        >
                          <li className=" mt-4">
                            Phone to mistakes due to human error
                          </li>
                        </motion.div>{" "}
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 50,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                        >
                          <li className="mt-4">
                            Sensor data can be utilized for predective
                            maintenance
                          </li>
                        </motion.div>
                      </ul>
                    </div>
                  </div>

                  <div className="text-left p-8 border border-black">
                    <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
                      <path
                        d="M27.3633 7.08984H26.4844V6.21094C26.4844 4.75705 25.3015 3.57422 23.8477 3.57422H4.39453C2.94064 3.57422 1.75781 4.75705 1.75781 6.21094V21.1523H0.878906C0.393516 21.1523 0 21.5459 0 22.0312V23.7891C0 25.2429 1.18283 26.4258 2.63672 26.4258H27.3633C28.8172 26.4258 30 25.2429 30 23.7891V9.72656C30 8.27268 28.8172 7.08984 27.3633 7.08984ZM3.51562 6.21094C3.51562 5.72631 3.9099 5.33203 4.39453 5.33203H23.8477C24.3323 5.33203 24.7266 5.72631 24.7266 6.21094V7.08984H20.332C18.8781 7.08984 17.6953 8.27268 17.6953 9.72656V21.1523H3.51562V6.21094ZM1.75781 23.7891V22.9102H17.6953V23.7891C17.6953 24.0971 17.7489 24.3929 17.8465 24.668H2.63672C2.15209 24.668 1.75781 24.2737 1.75781 23.7891ZM28.2422 23.7891C28.2422 24.2737 27.8479 24.668 27.3633 24.668H20.332C19.8474 24.668 19.4531 24.2737 19.4531 23.7891V9.72656C19.4531 9.24193 19.8474 8.84766 20.332 8.84766H27.3633C27.8479 8.84766 28.2422 9.24193 28.2422 9.72656V23.7891Z"
                        fill="#2D3748"
                      />
                      <path
                        d="M24.7266 21.1523H22.9688C22.4834 21.1523 22.0898 21.5459 22.0898 22.0312C22.0898 22.5166 22.4834 22.9102 22.9688 22.9102H24.7266C25.212 22.9102 25.6055 22.5166 25.6055 22.0312C25.6055 21.5459 25.212 21.1523 24.7266 21.1523Z"
                        fill="#4299E1"
                      />
                      <path
                        d="M23.8477 12.3633C24.3331 12.3633 24.7266 11.9698 24.7266 11.4844C24.7266 10.999 24.3331 10.6055 23.8477 10.6055C23.3622 10.6055 22.9688 10.999 22.9688 11.4844C22.9688 11.9698 23.3622 12.3633 23.8477 12.3633Z"
                        fill="#4299E1"
                      />
                    </svg>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 50,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                    >
                      <h1 className="mt-4 text-xl font-semibold text-black ">
                        Increasing number of devices and sensors data
                      </h1>
                    </motion.div>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 50,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                    >
                      <p className="mt-2 text-black ">
                        The sheer volume of data being generated can be
                      </p>
                    </motion.div>
                    <div>
                      <ul className="list-square ml-4">
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 50,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                        >
                          <li className="mt-4 ">Overwhelming</li>
                        </motion.div>
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 50,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                        >
                          <li className=" mt-4">
                            Difficult to extract data for meaningful insights
                          </li>
                        </motion.div>
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 50,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                        >
                          <li className="mt-4">Data is not leveraged</li>
                        </motion.div>
                      </ul>
                    </div>
                  </div>

                  <div className="border border-black p-8 ">
                    <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
                      <g clip-path="url(#clip0)">
                        <path
                          d="M26.599 4.339a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM7.151 25.661a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM23.486 13.163a8.636 8.636 0 00-1.19-2.873l1.123-1.123-2.592-2.59L19.705 7.7a8.636 8.636 0 00-2.873-1.19V4.921h-3.664v1.586a8.634 8.634 0 00-2.873 1.19l-1.122-1.12-2.592 2.589 1.123 1.123a8.636 8.636 0 00-1.19 2.873H4.922l-.002 3.663h1.592A8.626 8.626 0 007.704 19.7l-1.127 1.127 2.59 2.591 1.128-1.127a8.623 8.623 0 002.873 1.19v1.597h3.664v-1.597a8.628 8.628 0 002.873-1.19l1.128 1.128 2.59-2.592-1.127-1.127a8.627 8.627 0 001.19-2.873h1.593v-3.664h-1.593zM15 19.256a4.255 4.255 0 110-8.511 4.255 4.255 0 010 8.51z"
                          fill="#4299E1"
                        />
                        <path
                          d="M5.276 23.2c-.42 0-.823.105-1.182.302A13.853 13.853 0 011.172 15C1.172 7.375 7.375 1.172 15 1.172c.927 0 1.854.092 2.754.274a.586.586 0 00.232-1.149A15.111 15.111 0 0015 0C10.993 0 7.226 1.56 4.393 4.393A14.902 14.902 0 000 15c0 3.37 1.144 6.66 3.228 9.296-.268.4-.413.872-.413 1.365 0 .657.257 1.275.721 1.74a2.444 2.444 0 001.74.721c.658 0 1.276-.256 1.74-.721.465-.465.721-1.083.721-1.74s-.256-1.276-.72-1.74a2.445 2.445 0 00-1.74-.72zm.912 3.373a1.28 1.28 0 01-.912.377 1.28 1.28 0 01-.911-.377 1.28 1.28 0 01-.378-.912c0-.344.134-.668.378-.912a1.28 1.28 0 01.911-.377c.345 0 .668.134.912.378.243.243.377.567.377.911 0 .344-.134.668-.377.912zM26.772 5.703a2.465 2.465 0 00-.308-3.104 2.446 2.446 0 00-1.74-.721c-.658 0-1.276.256-1.74.72a2.445 2.445 0 00-.721 1.74c0 .658.256 1.276.72 1.741.465.465 1.083.72 1.74.72.42 0 .824-.104 1.183-.3A13.854 13.854 0 0128.828 15c0 7.625-6.203 13.828-13.828 13.828-.918 0-1.836-.09-2.728-.269a.586.586 0 00-.23 1.15c.968.193 1.963.291 2.958.291 4.007 0 7.773-1.56 10.607-4.393A14.902 14.902 0 0030 15c0-3.37-1.145-6.66-3.228-9.297zm-2.96-.452a1.28 1.28 0 01-.377-.912c0-.344.134-.668.377-.911a1.28 1.28 0 01.912-.378 1.29 1.29 0 010 2.578 1.28 1.28 0 01-.912-.377z"
                          fill="#2D3748"
                        />
                        <path
                          d="M12.582 25.078c0 .324.263.586.586.586h3.664a.586.586 0 00.586-.586v-1.136a9.179 9.179 0 002.199-.911l.802.802a.586.586 0 00.829 0l2.59-2.592a.586.586 0 000-.828l-.802-.802a9.169 9.169 0 00.911-2.199h1.132a.586.586 0 00.586-.585v-3.664a.586.586 0 00-.586-.586h-1.132a9.17 9.17 0 00-.911-2.199l.797-.797a.587.587 0 000-.829l-2.592-2.59a.586.586 0 00-.829 0l-.795.797a9.177 9.177 0 00-2.2-.912V4.922a.586.586 0 00-.585-.586h-3.664a.586.586 0 00-.586.586v1.126a9.169 9.169 0 00-2.199.91l-.796-.795a.586.586 0 00-.828 0l-2.592 2.59a.585.585 0 000 .828l.797.797a9.173 9.173 0 00-.911 2.199h-1.13a.586.586 0 00-.586.585l-.002 3.664a.585.585 0 00.586.586h1.132c.207.77.512 1.507.911 2.2l-.801.8a.586.586 0 000 .83l2.59 2.59a.586.586 0 00.829 0l.801-.801a9.185 9.185 0 002.2.911v1.136zm-1.97-3.28a.586.586 0 00-.732.078l-.713.714-1.761-1.763.712-.713a.586.586 0 00.078-.732 8.02 8.02 0 01-1.11-2.679.586.586 0 00-.572-.462H5.507l.002-2.492h1.005a.586.586 0 00.572-.463 8.022 8.022 0 011.11-2.678.586.586 0 00-.078-.733l-.708-.708 1.763-1.761.707.707c.196.196.5.228.733.078a8.016 8.016 0 012.678-1.11.586.586 0 00.463-.573v-1h2.492v1c0 .277.193.515.463.573a8.024 8.024 0 012.678 1.11c.232.15.537.118.732-.078l.708-.707 1.762 1.761-.708.708a.586.586 0 00-.078.732 8.027 8.027 0 011.11 2.679c.058.27.297.463.573.463h1.007v2.492h-1.007a.586.586 0 00-.573.462 8.02 8.02 0 01-1.11 2.679.586.586 0 00.078.732l.713.713-1.761 1.762-.714-.713a.586.586 0 00-.732-.078 8.027 8.027 0 01-2.678 1.11.586.586 0 00-.463.573v1.011h-2.492v-1.01a.586.586 0 00-.463-.574 8.021 8.021 0 01-2.678-1.11z"
                          fill="#2D3748"
                        />
                        <path
                          d="M19.841 15A4.847 4.847 0 0015 10.158 4.847 4.847 0 0010.158 15 4.847 4.847 0 0015 19.841 4.847 4.847 0 0019.841 15zm-8.51 0A3.674 3.674 0 0115 11.33 3.674 3.674 0 0118.67 15 3.674 3.674 0 0115 18.67 3.674 3.674 0 0111.33 15z"
                          fill="#2D3748"
                        />
                        <path
                          d="M20.395 2.216a.59.59 0 00.415-.172.593.593 0 00.171-.415.59.59 0 00-.586-.586.589.589 0 00-.586.586.589.589 0 00.586.587zM9.63 27.794a.59.59 0 00-.586.586.59.59 0 00.586.586.59.59 0 00.586-.586.59.59 0 00-.586-.585z"
                          fill="#4299E1"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <path fill="#fff" d="M0 0h30v30H0z" />
                        </clipPath>
                      </defs>
                    </svg>

                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 50,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                    >
                      <h1 className="mt-4 text-xl font-semibold text-black ">
                        Untimely maintenance can lead to machine failure
                      </h1>
                    </motion.div>

                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 50,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                    >
                      <p className="mt-2 text-black ">
                        At present maintenance is done periodically or after the
                        device has been damaged, which leads to unwanted
                      </p>
                    </motion.div>
                    <div>
                      <ul className="list-square ml-4">
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 50,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                        >
                          <li className="mt-4 ">Downtime additional costs</li>
                        </motion.div>

                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 50,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                        >
                          <li className=" mt-4">
                            Negatively affects productivity
                          </li>
                        </motion.div>

                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 50,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                        >
                          <li className="mt-4"> Operational efficiency</li>
                        </motion.div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* solutions */}
          <div className="lg:pr-48 lg:pl-48">
            <section className="bg-white ">
              <div className="container px-6 py-10 mx-auto">
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                >
                  <h1 className="text-[40px] font-bold text-black capitalize   ">
                    Solutions
                  </h1>
                </motion.div>

                <div className="mt-2 lg:flex lg:items-center">
                  <div className="grid w-full grid-cols-1 gap-4 lg:w-1/2 xl:gap-8 md:grid-cols-2">
                    <div className="space-y-2 border border-black p-4">
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
                      <motion.div
                        initial={{ x: -100, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 50,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                      >
                        <h1 className="text-xl font-semibold  text-black capitalize ">
                          Machine Learning
                        </h1>
                      </motion.div>
                      <motion.div
                        initial={{ x: -100, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 50,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                      >
                        <p className="text-black">
                          It is a generalized ML platform to provide
                          personalized solution for defence and industries.
                        </p>
                      </motion.div>
                    </div>

                    <div className="space-y-2 border border-black p-4">
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
                      <motion.div
                        initial={{ x: -100, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 50,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                      >
                        <h1 className="text-xl font-semibold  text-black capitalize ">
                          Real Time Data
                        </h1>
                      </motion.div>
                      <motion.div
                        initial={{ x: -100, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 50,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                      >
                        <p className="text-black">
                          Use of real-time data predictive analytics to identify
                          and track potential problems before they occur in our
                          assets.
                        </p>
                      </motion.div>
                    </div>

                    <div className="space-y-2  border border-black p-4">
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
                      <motion.div
                        initial={{ x: -100, opacity: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 50,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                      >
                        <h1 className="text-xl font-semibold  text-black capitalize ">
                          Acuuracy
                        </h1>
                      </motion.div>
                      <motion.div
                        initial={{ x: -100, opacity: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 50,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                      >
                        <p className="text-black">
                          To develop a digital twin of an industrial asset that
                          accurately represents its behavior and performance.
                        </p>
                      </motion.div>
                    </div>

                    <div className="space-y-2 border border-black p-4">
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
                      <motion.div
                        initial={{ x: -100, opacity: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 50,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                      >
                        <h1 className="text-xl font-semibold  text-black capitalize ">
                          Usefullness
                        </h1>
                      </motion.div>
                      <motion.div
                        initial={{ x: -100, opacity: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 50,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                      >
                        <p className="text-black">
                          To predict remaining useful life (RUL) of Machines.
                        </p>
                      </motion.div>
                    </div>
                    <div className="space-y-2 border border-black p-4">
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
                      <motion.div
                        initial={{ x: -100, opacity: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 50,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                      >
                        <h1 className="text-xl font-semibold  text-black capitalize ">
                          Deep Learning
                        </h1>
                      </motion.div>
                      <motion.div
                        initial={{ x: -100, opacity: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 50,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                      >
                        <p className="text-black">
                          Provide research platform where teams can collaborate
                          develop deep learning models and take data driven
                          actions.
                        </p>
                      </motion.div>
                    </div>
                    <div className="space-y-2 border border-black p-4">
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
                      <motion.div
                        initial={{ x: -100, opacity: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 50,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                      >
                        <h1 className="text-xl font-semibold  text-black capitalize ">
                          Premise Solution
                        </h1>
                      </motion.div>
                      <motion.div
                        initial={{ x: -100, opacity: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 50,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                      >
                        <p className="text-black">
                          Provide on premise solution which gives full control
                          of their critical data with security
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  <div className="hidden lg:flex lg:w-1/2 lg:justify-around ml-8">
                    <img
                      className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[798px] "
                      src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </header>
      </div>
      <div className="w-[100vw] h-[100px]">
        <div data-aos="fade-up" data-aos-duration="1000">
          <BgElement2 className="w-[300px] absolute origin-center -left-36 -translate-y-[30%]" />
        </div>
      </div>
      {/* new image box */}
      <div className="lg:pr-44 lg:pl-44">
        <section className="bg-white ">
          <div className="h-[32rem]  ">
            <div className="container  py-32 mx-auto">
              <h1 className="text-2xl font-semibold text-center text-black capitalize lg:text-3xl ">
                Asset tracking by VHR remote sensing data
              </h1>
            </div>
          </div>

          <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
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
      </div>

      <div className="mx-[12%] my-20">
        <h2 className="text-[2.5rem] font-bold mt-10">Falcon Cloud Project</h2>
        <div className="flex justify-between">
          <div className="w-[50%]">
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
                Access to advanced techniques to detect issues before
                the actual building
              </li>
            </ul>
          </div>
          <div className="rightBox w-[50%] flex p-5">
            <img
              src={require("../assets/AI&ML/2.png")}
              className="w-[100%]"
            ></img>
          </div>
        </div>
        <h2 className="text-[1.8rem] font-bold mt-5">Diagram</h2>
        <img src={require("../assets/falcon1.png")} className="my-[1rem]"></img>
      </div>
      {/* new two big images */}
      <div className="lg:pr-44 lg:pl-44 mt-10">
        <h1 className="text-[40px] font-bold text-black capitalize mb-4 ml-5  ">
          WAIT System
        </h1>
        <section className="bg-[#6A6A6A] w-[1085px] m-auto h-[564px] border ">
          <video src={waitSysVideo} controls className="z-10" />
        </section>
        <p className=" w-[1085px] m-auto mt-20 text-[1.2rem] ">
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
        <h2 className="text-[2.5rem] font-bold mb-5 mt-14">
          IOT Connection ( LoraWAN )
        </h2>
        <div className="flex justify-between">
          <div className="w-[50%]">
            <h2 className="text-[1.8rem] font-bold mt-5">
              Testing Hard Connections
            </h2>
            <ul className="list-disc my-3 ml-8 flex flex-col gap-1">
              <li>
                Device connected to multiple gateways with varying backhaul
                performance
              </li>
              <li> Adaptive Data Rating </li>
              <li> Rapidly moving devices </li>
              <li> Uncalibrated crystals</li>
            </ul>
            <h2 className="text-[1.8rem] font-bold mt-5">Benefits</h2>
            <ul className="list-disc my-3 ml-8 flex flex-col gap-1">
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
          <div className="rightBox w-[50%] flex p-20">
            <div className="fronBox h-[400px] w-[500px] bg-primary-color"></div>
            <div className="backBox absolute h-[400px] w-[500px] bg-[#EFF6FF] translate-x-5 translate-y-5 flex justify-center items-center">
              <img src={require("../assets/lorawan.png")}></img>
            </div>
          </div>
        </div>
        <div className="w-[100vw] h-[100px]">
          <BgElement3 className="w-[300px] absolute origin-center -right-36 -translate-y-[20%]" />
        </div>
        <div className="text-[1.8rem] font-bold mt-5">Diagrams</div>
        <div className="imgContainer flex flex-col justify-center items-center gap-24">
          <img
            src={require("../assets/InnovationE.png")}
            className="w-[800px]"
          ></img>
          <div className="flex gap-16">
            <img
              src={require("../assets/loraWAN1.jpg")}
              className="w-[630px] border rounded-3xl border-[#c0c0c0]"
            ></img>
            <img
              src={require("../assets/loraWAN2.jpg")}
              className="w-[630px] border rounded-3xl border-[#c0c0c0]"
            ></img>
          </div>
        </div>
        <div className="text-[1.8rem] font-bold mt-16 mb-12">
          Frequency Hopping
        </div>
        <div className="imgContainer flex justify-center items-center gap-24">
          <img
            src={require("../assets/InnovationE2.png")}
            className="w-[900px]"
          ></img>
        </div>
      </div>

      {/* BLUE BOX */}
      <div className="lg:pr-48 lg:pl-48 h-[324px] w-[100%] bg-[#0465f8] flex justify-center justify-items-center mt-20  items-center content-center">
        <p className="text-center text-white text-[20px] leading-loose">
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
          <div className="container px-6 py-10 mx-auto">
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
              <div className="p space-y-3  bg-white  ">
                <img
                  className="object-cover object-center w-full lg:w-[354px] rounded-none h-[248px]"
                  src={require("../assets/first.jpg")}
                  alt=""
                />

                <h1 className="text-[20px] font-bold  text-black capitalize  px-6 pt-2">
                  Cyber physical system
                </h1>

                <p className="text-black tracking-wide px-6">
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

                <h1 className="text-[20px] font-bold font-Poppins  text-black capitalize px-6 pt-2 ">
                  AI and ML
                </h1>

                <p className="text-black px-6">
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

                <h1 className="text-[20px] font-bold font-Poppins text-black capitalize px-6 pt-2  ">
                  The Radio Frequency Components
                </h1>

                <p className=" text-black  px-6 ">
                  The company is focused on innovation in the field of active
                  and passive radio frequency components. They specialize in
                  broadband high-power amplifiers, waveguide-based combining,
                  and cavity filters. In addition, they have added innovations
                  in software-defined radios to mitigate impairments.
                </p>
                <p className="text-black px-6 pb-6">
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

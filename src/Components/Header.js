import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiRadio } from "react-icons/fi";
import { VscRadioTower } from "react-icons/vsc";
import { SiPytest, SiGoogleanalytics } from "react-icons/si";
import {
  MdDesignServices,
  MdAnalytics,
  MdSystemUpdateAlt,
  MdTrackChanges,
  MdSettingsSystemDaydream,
  MdMicrowave,
} from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isRFPowerAmp, setIsRFPowerAmp] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  // useEffect(() => {
  console.log(window.innerWidth);
  // }, [window.innerWidth]);

  return (
    <div
      onMouse={() => setIsDropDownOpen(false)}
      className="z-50 bg-white sticky top-0"
    >
      <nav className="relative bg-transparent shadow bg-white z-100 ">
        <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              <img
                className="w-auto h-10 sm:h-16 sm:w-auto"
                src={require("../assets/logo.png")}
                alt="linear-amptec-logo"
              />
            </NavLink>

            <div className="flex lg:hidden">
              <button
                onClick={() => handleClick()}
                type="button"
                className="text-gray-500 focus:outline-none duration-300  "
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={` absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? " translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:mx-6 font-semibold gap-4">
              <NavLink
                className="my-2 text-gray-700  transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
                to="/innovations"
              >
                Innovations
              </NavLink>

              <div
                onMouseEnter={() => setIsDropDownOpen(true)}
                className="my-2 text-gray-700 transition-colors duration-300 z-10 transform md:mx-4 md:my-0 cursor-pointer hover:text-blue-500"
                // to="/products"
              >
                Products
                {isDropDownOpen && (
                  <div className="container ease-in duration-1000 border h-auto  flex flex-wrap gap-10 text-[#929292] absolute min-w-[1300px] left-28 -translate-x-[72%] translate-y-9 bg-white list-none shadow-xl rounded-xl px-10 py-12">
                    <div className="w-[20%] flex flex-col gap-6">
                      <h2 className="text-[1.2rem] font-bold text-[#0346B5]">
                        Linear Amptech
                      </h2>
                      <p>
                        Creating Difference With <br /> Technology
                      </p>
                      <button className=" border-[2px] border-primary-color text-primary-color py-2 px-3 w-32  duration-300">
                        Learn more
                      </button>
                    </div>
                    <div className="w-[25%]">
                      <NavLink to="/products/rf-design-and-signal-processing">
                        <h2 className="text-[1.1rem] font-bold text-black mb-6 hover:text-[#616161]">
                          Radio Frequency Design <br />
                          and Signal Processing
                        </h2>
                      </NavLink>
                      <ul className="flex flex-col gap-5">
                        <NavLink to="/products/rf-design-and-signal-processing">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <FiRadio className="text-[1.5rem]" />
                            </div>
                            <p className="hover:text-[#616161]">
                              Radio Frequency Passive <br /> Components
                            </p>
                          </li>
                        </NavLink>

                        <li
                          className="flex flex-col gap-4   items-start text-[0.95rem]"
                          onMouseLeave={() => setIsRFPowerAmp(false)}
                        >
                          <NavLink
                            to="/products/rf-design-and-signal-processing"
                            onMouseEnter={() => setIsRFPowerAmp(true)}
                          >
                            <div className="flex gap-4 items-center justify-start w-[100%] hover:text-[#616161">
                              <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                                <MdMicrowave className="text-[1.5rem]" />
                              </div>
                              <p className="hover:text-[#616161">
                                Radio Frequency Power <br /> Amplifier
                              </p>
                            </div>
                          </NavLink>
                          {isRFPowerAmp && (
                            <ul className="ml-14 list-disc text-[0.8rem]">
                              <NavLink to="/products/rf-amplifier/lamp-PACF1P9">
                                <li className="hover:text-[#616161]">
                                  LAMP-PACF1P9-10W
                                </li>
                              </NavLink>
                              <NavLink to="/products/rf-amplifier/lamp-PAMOCBJ">
                                <li className="hover:text-[#616161]">
                                  LAMP-PAMOCBJ-10W
                                </li>
                              </NavLink>
                              <NavLink to="/products/rf-amplifier/lamp-PAMOCCE">
                                <li className="hover:text-[#616161]">
                                  LAMP-PAMOCCE-10W
                                </li>
                              </NavLink>
                              <NavLink to="/products/rf-amplifier/lamp-PAMOCCF">
                                <li className="hover:text-[#616161]">
                                  LAMP-PAMOCCF-10W
                                </li>
                              </NavLink>
                            </ul>
                          )}
                        </li>
                        <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                          <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                            <MdDesignServices className="text-[1.5rem]" />
                          </div>
                          <NavLink to="/products/rf-design-and-signal-processing">
                            <p className="hover:text-[#616161]">
                              GaN MMIC Designs
                            </p>
                          </NavLink>
                        </li>
                        <NavLink to="/products/rf-design-and-signal-processing">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <SiPytest className="text-[1.2rem]" />
                            </div>
                            <p className="hover:text-[#616161]">
                              SDR Test-Beds
                            </p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/rf-design-and-signal-processing">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <SiGoogleanalytics className="text-[1.2rem]" />
                            </div>
                            <p className="hover:text-[#616161]">
                              Transmitter Linearization
                            </p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/rf-design-and-signal-processing">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <VscRadioTower className="text-[1.5rem]" />
                            </div>
                            <p className="hover:text-[#616161]">
                              Antenna Solutions
                            </p>
                          </li>
                        </NavLink>
                      </ul>
                    </div>

                    <div className="w-[20%]">
                      <NavLink to="/products/cyber-physical-system-and-signal-processing">
                        <h2 className="text-[1.1rem] font-bold text-black mb-6 hover:text-[#616161]">
                          Cyber Physical Systems <br />
                          and Signal Processing
                        </h2>
                      </NavLink>
                      <ul className="flex flex-col gap-5">
                        <NavLink to="/products/cyber-physical-system-and-signal-processing">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <MdSystemUpdateAlt className="text-[1.4rem]" />
                            </div>
                            <p className="hover:text-[#616161]">WAIT System</p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/cyber-physical-system-and-signal-processing">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <MdTrackChanges className="text-[1.4rem]" />
                            </div>
                            <p className="hover:text-[#616161]">TRACK System</p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/cyber-physical-system-and-signal-processing">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <MdSettingsSystemDaydream className="text-[1.4rem]" />
                            </div>
                            <p className="hover:text-[#616161]">PLAN System</p>
                          </li>
                        </NavLink>
                      </ul>
                    </div>
                    <div className="w-[20%]">
                      <NavLink to="/products/ai-and-ml">
                        <h2 className="text-[1.1rem] font-bold text-black mb-6 hover:text-[#616161]">
                          Artificial Intelligence & <br />
                          Machine Learning
                        </h2>
                      </NavLink>
                      <ul className="flex flex-col gap-5">
                        <NavLink to="/products/ai-and-ml">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <IoMdAnalytics className="text-[1.3rem]" />
                            </div>
                            <p className="hover:text-[#616161]">Analytics</p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/ai-and-ml">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <MdAnalytics className="text-[1.6rem]" />
                            </div>
                            <p className="hover:text-[#616161]">
                              Observability
                            </p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/ai-and-ml">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <TbDeviceDesktopAnalytics className="text-[1.5rem]" />
                            </div>
                            <p className="hover:text-[#616161]">
                              Predictive Maintenance
                            </p>
                          </li>
                        </NavLink>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                className="my-2 text-gray-700 -z-1 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
                to="/news-and-events"
              >
                News & Events
              </NavLink>
              <NavLink
                className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
                to="/team"
              >
                Team
              </NavLink>
              <NavLink
                className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0"
                to="/about-us"
              >
                About us
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

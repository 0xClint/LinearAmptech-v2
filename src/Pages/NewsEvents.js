import Header from "../Components/Header";

import Footer from "../Components/Footer";
import celebrate from "../assets/news/news.jpg";
import celebrate1 from "../assets/news/celebrate (1).jpg";
import celebrate2 from "../assets/news/celebrate (2).jpg";
import celebrate3 from "../assets/news/celebrate (3).jpg";
import celebrate4 from "../assets/news/celebrate (4).jpg";
import celebrate5 from "../assets/news/celebrate (5).jpg";
import celebrate6 from "../assets/news/celebrate (6).jpg";
import celebrate7 from "../assets/news/celebrate (7).jpg";
import celebrate8 from "../assets/news/celebrate (8).jpg";

import news from "../assets/news/news.jpg";
import news1 from "../assets/news/news (1).jpg";
import news2 from "../assets/news/news (2).jpg";
import news3 from "../assets/news/news (3).jpg";
import news4 from "../assets/news/news (4).jpg";
import news5 from "../assets/news/news (5).jpg";
import news6 from "../assets/news/news (6).jpg";
import news7 from "../assets/news/news (7).jpg";
// import news1 from "../assets/news/news (1).jpg";
import news8 from "../assets/news/news (8).jpg";
// import news9 from "../assets/news/news (9).jpg";
// import news8 from "../assets/news/news (8).jpg";
import news9 from "../assets/news/news (12).jpg";

import newsbg from "../assets/news/newsbg.jpg";

const data = [
  {
    photo: news,
    title:
      "We featured on Engineers Tribune. Their partner website is Peigenesis.",
    date: "21 July 2020",
  },
  {
    photo: news1,

    title:
      "Dr. Meenakshi Rawat has presented paper titled, “Linear Vector Signal Generator for X-band Communication” in Radio & Wireless Week, San Antonio, Texas, U.S.A.",
    date: "29 January 2020",
  },
  {
    photo: news2,

    title: `Dr. Meenakshi Rawat has delivered lecture under workshop on :Machine Learning and Dimensionality Reduction Techniques for RF Components and Systems: from Modeling to Linearization" Radio & Wireless Week, San Antonio, Texas, U.S.A.`,
    date: "26 January 2020",
  },
  {
    photo: news9,

    title: `Dr. Meenakshi Rawat was instructor and co-coordinator for Training Program on " Basics of software Defined Radio Architectures and building blocks of SDR Waveform development for SDR " in Bharat Electronics Limited, Bangalore 2019.`,
    date: "5-16 July 2019",
  },
  {
    photo: news3,

    title:
      "Product showcased in two-day event ‘ICT & IOT START UP TECH EXPO 2018' at ITI Limited, Doorvaninagar, Bangalore-560016. Product showcased in C-DOT foundation day ' 5G Technologies, Standardization, Business and applications",
    date: "28-29 August 2018",
  },
  {
    photo: news4,

    title:
      "Dr. Karun Rawat has organized a workshop on “Advanced Applications of Nonlinear Vector Network Measurements for broadband RF Power Amplifiers Design and Linearization” in International Microwave Symposium, Philadelphia, USA.",
    date: "11 June 2018",
  },
  {
    photo: news5,

    title:
      "Dr. Karun Rawat has been invited for a talk on “Bandwidth and Efficiency Enhancement Schemes in Radio Frequency Power Amplifiers” at International Microwave Symposium, Philadelphia, USA.",
    date: "11 June 2018",
  },
  {
    photo: news6,

    title:
      "Dr. Meenakshi Rawat has been invited for a talk on “Multiband/Multichannel Power Amplifier Linearization” at International Microwave Symposium, Philadelphia, USA.",
    date: "11 June 2018",
  },
  {
    photo: news7,

    title:
      "Dr. Meenakshi Rawat has been invited for a talk on “Linearization of Broadband PA and Wireless Transmitters for 5G Applications” at International Microwave Symposium, Philadelphia, USA.",
    date: "11 June 2018",
  },
  {
    photo: celebrate,

    title:
      "Girish Chandra Tripathi was awarded Young Scientiest Award in the 12th Uttarakhand State Science and Technology Congress 2017-18 on 07-08 March at UCOST, Vgyan Dham Dehardun on 22nd May 2018.",
    date: "8 March 2018",
  },
  {
    photo: news8,

    title:
      "Hon'ble Prime Minister has interacted with startups from across India, Dr. Meenakshi Rawat has attended the event on behalf of Linearized amplifier technologies and services private limited",
    date: "06 June 2018",
  },
  {
    photo: celebrate1,

    title:
      "Congratulations to Dr. Meenakshi Rawat on paper “2-D Curtailed Harmonic Memory Polynomial for reduced complexity in Concurrent Dual-Band Modeling and Digital Predistortion with the second band at Harmonic Frequency,” IET Commun., to be published. DOI: 10.1049/iet-com.2017.1376.",
    date: "",
  },
  {
    photo: celebrate2,

    title: `Congratulations to Dr. Meenakshi Rawat on paper, "Low cost RF in -RF out predistorter linearizer for high power amplifier and ultra-wideband signals" IEEE Trans. Instrum. Meas. (accepted).doi: 10.1109/TIM.2018.2811420`,
    date: "06 June 2018",
  },
  {
    photo: celebrate3,

    title:
      "Congratulations to Dr. Meenakshi Rawat on paper, “Complexity Reduced Digital Predistortion Model for MIMO Transmitters”, has been accepted for presentation at IMS2018.",
    date: "June 2018",
  },
  {
    photo: celebrate4,

    title: `Congratulations to Dr. Meenakshi Rawaton paper, "RF in -RF out Linearizer System Design for Satellite Communication," IEEE Transactions on Electron Devices, vol. 65, no. 6, pp. 2378-2384`,
    date: "06 June 2018",
  },
  {
    photo: celebrate5,

    title:
      "Congratulations to Dr. Karun Rawat on paper, “A Wideband Rat-race Coupler Using Stepped Impedance Resonator,” accepted in IEEE International Wireless Symposium, Chengdu, China.",
    date: "May 2018",
  },
  {
    photo: celebrate6,

    title: `Congratulations to Dr. Meenakshi Rawat on paper, "RF Front-End Flexibility, Self-Calibration, and Self-Linearization: Characterizing and Mitigating Nonlinearities in SDR MIMO Systems for Concurrent Multiband Operation," IEEE Microwave Magazine, vol. 19, no. 2, pp. 49-61.`,
    date: "March-April 2018",
  },
  {
    photo: celebrate7,

    title: `Congratulations to Dr. Karun Rawat on paper, "A Design Strategy for Bandwidth Enhancement in Three-stage Doherty Power Amplifier with Extended Dynamic Range", IEEE Transactions on Microwave Theory and Techniques, vol. 66, no. 2, pages: 1024-1033.`,
    date: "Feb 2018",
  },
  {
    photo: celebrate8,

    title:
      "Congratulations to Dr. Karun Rawat on paper, “Quadrature modulation using radio frequency wave correlation in multiport network,” 5th IEEE International Conference on Signal Processing and Integrated Networks (SPIN), New Delhi, India.",
    date: "May 2018",
  },
];

const NewsEvents = () => {
  return (
    <div>
      <Header />

      <div>
        <div
          className="h-[429px]  w-[100%] flex justify-center items-center"
          style={{ backgroundImage: `url(${newsbg})` }}
        >
          <div className=" ">
            <p className="font-bold lg:text-[64px] text-4xl lg:mb-4 text-white text-center">
              News and Events
            </p>
            <p className="text-[24px] text-white font-medium text-center">
              Solutions for a smarter, more connected future
            </p>
          </div>
        </div>
        <section className="bg-white dark:bg-gray-900 mt-6">
          <div className="container lg:flex flex-wrap  mx-auto justify-center gap-2">
            {data
              ? data.map(({ title, date, photo }) => {
                  return (
                    <div className="flex justify-start">
                      <div className="lg:flex border mx-2 lg:my-2 my-2  w-[594px]">
                        <div className="flex flex-col justify-between py-6 mx-6">
                          <img src={photo} className="max-h-80 w-[100%]" />
                          <p className="lg:text-xl lg:font-regular text-md text-black  mt-2   ">
                            {title ? title : "Title"}
                          </p>

                          <span className="text-sm text-gray-800 mt-4 dark:text-gray-300">
                            On: {date ? date : "Date"}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "1"}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default NewsEvents;

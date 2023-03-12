import React, { useEffect } from "react";
import { BgElement2, BgElement1, BgElement3 } from "../../assets";
import { CompanyFocus, Footer, Header } from "../../Components";
import AOS from "aos";
import "aos/dist/aos.css";

const AIandML = () => {
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
          Artificial Intelligence & Machine Learning
        </h2>
        <p className="my-10">
          The company has a strong research background in various RF components
          including Radio Frequency Power Amplifier Design, MMICs, Transmitter
          Linearization, SDR test beds and Radio frequency passive components.
        </p>
        <p>
          Linear Amptech has been making remarkable strides in the field of
          Artificial Intelligence and Machine Learning. Our company has been
          dedicated to developing cutting-edge solutions that utilize the latest
          advancements in AI and ML to help businesses make better decisions,
          improve their operations, and achieve their goals. We specialize in
          four key areas:
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
          {/* <div className="w-[400px] h-[400px] bg-[#F2F2F2] rounded-2xl shadow-md"> */}
          <img
            src={require("../../assets/AI&ML/1.png")}
            className="w-[500px]"
          ></img>
          {/* </div> */}
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5" data-aos="fade-up">
                Analytics
              </h2>
              <p data-aos="fade-left" data-aos-duration="1000">
                At Linear Amptech, we understand the importance of data
                analytics for businesses. Our analytics solutions use advanced
                algorithms to extract meaningful insights from complex data
                sets, helping businesses make informed decisions. Our team of
                experts helps clients identify key performance indicators (KPIs)
                and design dashboards that provide real-time insights into
                business performance.
              </p>
            </div>
            <a className="underline cursor-pointer hover:text-blue-800">more</a>
          </div>
        </div>

        <div className="flex  justify-center gap-16 py-40 px-[10%] text-white bg-primary-color">
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5" data-aos="fade-up">
                Observability
              </h2>
              <p data-aos="fade-right" data-aos-duration="1000">
                Observability is crucial to identifying and resolving issues
                that can impact the performance of a system. Our observability
                solutions provide real-time monitoring of key performance
                metrics, giving businesses the ability to identify and resolve
                issues before they become critical. We use advanced analytics
                and machine learning algorithms to identify anomalies and
                provide actionable insights.
              </p>
            </div>
            <a className="underline cursor-pointer hover:text-blue-800">more</a>
          </div>
          {/* <div className="w-[400px] h-[400px] bg-white rounded-2xl flex justify-center items-center shadow-2xl"> */}
          <img
            src={require("../../assets/AI&ML/2.png")}
            className="w-[500px]"
          ></img>
          {/* </div> */}
        </div>

        <div className="w-[100vw] h-[100px]">
          <div data-aos="fade-up" data-aos-duration="1000">
            <BgElement2 className="w-[300px] absolute origin-center -left-36 -translate-y-[30%]" />
          </div>
        </div>

        <div className="flex  justify-center gap-16 my-40 px-[10%]">
          {/* <div className="w-[400px] h-[400px] bg-[#F2F2F2] rounded-2xl flex justify-center items-center shadow-md"> */}
          <img
            src={require("../../assets/AI&ML/3.png")}
            className="w-[500px]"
          ></img>
          {/* </div> */}
          <div className="w-[800px] flex flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-bold mb-5" data-aos="fade-up">
                Predictive Maintenance
              </h2>
              <p data-aos="fade-left" data-aos-duration="1000">
                Predictive maintenance is a critical aspect of modern
                manufacturing processes. Our predictive maintenance solutions
                utilize advanced machine learning algorithms to predict
                equipment failures before they occur, allowing businesses to
                schedule maintenance and minimize downtime. Our solutions can
                help businesses reduce maintenance costs, improve equipment
                reliability, and increase productivity
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

export default AIandML;

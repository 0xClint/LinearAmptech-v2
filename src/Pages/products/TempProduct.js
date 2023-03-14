import React, { useEffect } from "react";
import { BgElement2, BgElement1, BgElement3 } from "../../assets";
import { CompanyFocus, Footer, Header } from "../../Components";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductLeft from "./ProductLeft";
import p1 from "../../assets/RFlinear/p1.png";
import p2 from "../../assets/RFlinear/p2.png";
import p3 from "../../assets/RFlinear/p3.png";
import p4 from "../../assets/RFlinear/p4.png";
import p6 from "../../assets/RFlinear/p6.png";
import ProductRight from "./ProductRight";

const productDetails = {
  p1: {
    img: p1,
    name: "Radio Frequency Passive Components",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur, est id consequat ultricies, nibh lacus vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eusapien et luctus. Donec eu diam quis nunc interdum luctus. Utvelit metus, laoreet ut justo vitae, venenatis euismod mauris. Quisque semper nulla ut augue lobortis, nec rhoncus orciiaculis. In hac habitasse platea dictumst. Aliquam fermentum magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur lobortis quam vestibulum lectus dictum, a egestas nunc sollicitudin. Nulla facilisi.",
  },
  p2: {
    img: p2,
    name: "Radio Frequency Power Amplifier",
    description: `   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, est id consequat ultricies, nibh lacus
                vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
                sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
                velit metus, laoreet ut justo vitae, venenatis euismod mauris.
                Quisque semper nulla ut augue lobortis, nec rhoncus orci
                iaculis. In hac habitasse platea dictumst. Aliquam fermentum
                magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur
                lobortis quam vestibulum lectus dictum, a egestas nunc
                sollicitudin. Nulla facilisi.`,
  },
  p3: {
    img: p3,
    name: "  GaN MMIC Designs",
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, est id consequat ultricies, nibh lacus
                vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
                sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
                velit metus, laoreet ut justo vitae, venenatis euismod mauris.
                Quisque semper nulla ut augue lobortis, nec rhoncus orci
                iaculis. In hac habitasse platea dictumst. Aliquam fermentum
                magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur
                lobortis quam vestibulum lectus dictum, a egestas nunc
                sollicitudin. Nulla facilisi.`,
  },
  p4: {
    img: p4,
    name: " SDR Test-Beds",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, est id consequat ultricies, nibh lacus
                vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
                sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
                velit metus, laoreet ut justo vitae, venenatis euismod mauris.
                Quisque semper nulla ut augue lobortis, nec rhoncus orci
                iaculis. In hac habitasse platea dictumst. Aliquam fermentum
                magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur
                lobortis quam vestibulum lectus dictum, a egestas nunc
                sollicitudin. Nulla facilisi.`,
  },
  p5: {
    img: p3,
    name: "Transmitter Linearization",
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, est id consequat ultricies, nibh lacus
                vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
                sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
                velit metus, laoreet ut justo vitae, venenatis euismod mauris.
                Quisque semper nulla ut augue lobortis, nec rhoncus orci
                iaculis. In hac habitasse platea dictumst. Aliquam fermentum
                magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur
                lobortis quam vestibulum lectus dictum, a egestas nunc
                sollicitudin. Nulla facilisi.`,
  },
  p6: {
    img: p6,
    name: "Antenna Solutions",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consectetur, est id consequat ultricies, nibh lacus
                vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
                sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
                velit metus, laoreet ut justo vitae, venenatis euismod mauris.
                Quisque semper nulla ut augue lobortis, nec rhoncus orci
                iaculis. In hac habitasse platea dictumst. Aliquam fermentum
                magna neque. Ut vulputate sed dolor ut ullamcorper. Curabitur
                lobortis quam vestibulum lectus dictum, a egestas nunc
                sollicitudin. Nulla facilisi.`,
  },
};

const TempProduct = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 300 });
  }, [AOS]);
  return (
    <div>
      <Header />
      <div className="w-[100%] h-[100%]">
        <div className="absolute w-[100%] h-[100%] lg:top-[35%] md:top-[30%]   sm:top-[25%] top-[15%]">
          <h2
            className="lg:text-[5rem] md:text-6xl text-3xl font-bold font-Roboto drop-shadow-2xl text-center text-white  "
            data-aos="fade"
            data-aos-duration="1000"
          >
            Elevate Your Life with <br />
            Our Products
          </h2>
        </div>
        <img src={require("../../assets/bg.png")} className="w-[100%]"></img>
      </div>
      <div className="text-[1.3rem] leading-relaxed lg:px-[15%] px-6 text-center font-medium">
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
        <ProductLeft
          productImg={productDetails.p1.img}
          productName={productDetails.p1.name}
          productDetails={productDetails.p1.description}
        />

        <ProductRight
          productImg={productDetails.p2.img}
          productName={productDetails.p2.name}
          productDetails={productDetails.p2.description}
        />

        <div className="w-[100vw] h-[100px]">
          <div data-aos="fade-up" data-aos-duration="1000">
            <BgElement2 className="w-[300px] absolute origin-center -left-36 -translate-y-[30%]" />
          </div>
        </div>
        <ProductLeft
          productImg={productDetails.p3.img}
          productName={productDetails.p3.name}
          productDetails={productDetails.p3.description}
        />
        <ProductRight
          productImg={productDetails.p4.img}
          productName={productDetails.p4.name}
          productDetails={productDetails.p4.description}
        />

        <div className="w-[100vw] ">
          <div data-aos="fade-up" data-aos-duration="1500">
            <BgElement3 className="w-[300px] absolute origin-center -right-36 -translate-y-[50%]" />
          </div>
        </div>
        <ProductLeft
          productImg={productDetails.p5.img}
          productName={productDetails.p5.name}
          productDetails={productDetails.p5.description}
        />
        <ProductRight
          productImg={productDetails.p6.img}
          productName={productDetails.p6.name}
          productDetails={productDetails.p6.description}
        />
      </div>
      <CompanyFocus />
      <Footer />
    </div>
  );
};

export default TempProduct;

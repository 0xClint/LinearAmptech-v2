import React from "react";

const CompanyFocus = () => {
  return (
    <div className="text-white text-[1.2rem] leading-normal h-[100%]">
      <div className="absolute py-10 px-[12%] ">
        <h2
          className="text-[3rem] font-bold text-center mb-10"
          data-aos="fade-up"
        >
          What we focus
        </h2>
        <p className="">
          Linear Amplifier Technology & Services private ltd (Linear Amp-tech)
          is a company formed and driven by innovative minds of Indian I.I.T
          Roorkee. The company is Incubated in I.I.T Roorkee and includes
          students and professors on the board of directors.
          <br />
          <br /> The company is focused on innovation to cater to various
          technical challenges in the area of Electronics and Software
          Engineering. The company is geared up to take on new technology
          development projects in the relevant areas. The company is primarily
          focusing on various aspects of cyber-physical system design including
          radio-frequency sensors development and addressing the cyber domain
          with Artificial intelligence and Machine Learning. The company also
          envisages the requirement for the specialized technology areas such as
          Radio-frequency design and hence is committed to the development of
          radios and related components to address the immediate needs of
          countrys self-reliance drive.
          <br />
          <br /> The vision is to foster R&D into product design and development
          competing with cutting-edge technologies for the national and
          international market. The R&D is backed by the know-how generated from
          academics and is therefore capable of embarking new and advanced
          technology into products. <br />
          <br />
          We are dedicated to exploring new technologies in our core product
          areas and have established a good ecosystem between academics and
          industry for technology development with innovation. We have a strong
          team with I.I.T background who are continuously innovating new
          technology solutions for the company. We believe in continuous
          innovation for bringing cutting-edge technologies to the market.
        </p>
      </div>
      <div className="h-[800px] overflow-hidden ">
        <img
          src={require("../assets/product-focus-bg.png")}
          className="w-[100%]"
        ></img>
      </div>
    </div>
  );
};

export default CompanyFocus;

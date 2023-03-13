import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BoardMember from "../Components/BoardMember";
import TeamMember from "../Components/TeamMember";
import teambg from "../assets/teambg.jpg";

import { boardMember } from "../data/BoardMemberData";
import { coreTeam } from "../data/CoreTeamData";
import { softwareTeam } from "../data/SoftwareTeamData";
import { hardwareTeam } from "../data/HardwareTeamData";

const Team = () => {
  return (
    <div>
      <Header />

      <div
        className="h-[429px] w-[100%] flex justify-center items-center"
        style={{
          backgroundImage: `url(${teambg})`,
        }}
      >
        <div className=" ">
          <p className="font-bold lg:text-[64px] text-4xl text-white text-center">
            Meet Our Team
          </p>
          <p className="text-[24px] lg:mt-6 text-white font-medium text-center">
            Solutions for a smarter, more connected future
          </p>
        </div>
      </div>
      <div>
        <section className="bg-white ">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="lg:text-[40px] text-4xl font-semibold text-center text-black capitalize ">
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
      {/* core team  */}
      <div className="mt-2">
        <div>
          <section className="bg-white ">
            <div className="container px-6 py-10 mx-auto">
              <h1 className="lg:text-[40px] text-4xl font-semibold text-center text-black capitalize ">
                Core Team
              </h1>
              <p className="max-w-6xl text-[20px] mx-auto my-6 text-center text-black ">
                Our core team comprises talented individuals with diverse
                backgrounds and experiences. Our members hail from some of the
                largest software companies in the world, including JPMC,
                Enphase, Oracle, Citrix Systems, Sprinklr, Intuit, IHC, and
                Sears. With their extensive expertise in various domains, our
                team is well-equipped to deliver innovative solutions and
                exceptional outcomes to our clients.
              </p>

              <div className="grid grid-cols-1 gap-8 mt-2 xl:mt-4 md:grid-cols-2 xl:grid-cols-4 xl:[&>*:nth-child(5)]:relative xl:[&>*:nth-child(5)]:left-[480px]">
                {coreTeam.map((member) => {
                  return <TeamMember member={member} />;
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Software team */}
      <div className="mt-8">
        <div>
          <section className="bg-white ">
            <div className="container px-6 py-2 mx-auto">
              <h1 className="lg:text-[40px] text-4xl mb-4 font-semibold text-center text-black capitalize ">
                Software Team
              </h1>

              <div className="grid grid-cols-1 gap-8 mt-2 xl:mt-4 md:grid-cols-2 xl:grid-cols-4">
                {softwareTeam.map((member) => {
                  return <TeamMember member={member} />;
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* hardware team */}
      <div className="mt-8 mb-8">
        <div>
          <section className="bg-white ">
            <div className="container px-6 py-2  mx-auto">
              <h1 className="lg:text-[40px] text-4xl mb-4 font-semibold text-center text-black capitalize ">
                Hardware Team
              </h1>

              <div className="grid grid-cols-1 gap-8  xl:mt-4 md:grid-cols-2 xl:grid-cols-4">
                {hardwareTeam.map((member) => {
                  return <TeamMember member={member} />;
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;

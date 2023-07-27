import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const TeamMember = (props) => {
  return (
    <div className="flex flex-col items-center justify-start w-[300px] lg:w-[300px] border">
      <img
        className="object-cover w-[100%]   "
        src={props.member.photo}
        alt=""
      />

      <div className="self-start m-4 justify-self-start font-Roboto">
        <h1 className="mt-2 text-2xl font-semibold text-slate-900 capitalize  group-hover:text-white">
          {props.member.name}
        </h1>

        <p className=" text-slate-800 capitalize text-[18px]  group-hover:text-gray-300">
          {props.member.position}
        </p>

        <div className="flex mt-3 -mx-2 justify-self-end">
          <a
            href={props.member.twitter}
            target="_blank"
            className="mx-2 text-black  "
            aria-label="Reddit"
          >
            <AiFillTwitterCircle size={26} />
          </a>

          <a
            href={props.member.facebook}
            className="mx-2 text-black  "
            aria-label="Facebook"
            target="_blank"
          >
            <BsFacebook size={22} />
          </a>

          <a
            href={props.member.linkedin}
            className="mx-2 text-black  "
            aria-label="Github"
            target={"_blank"}
          >
            <BsLinkedin size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

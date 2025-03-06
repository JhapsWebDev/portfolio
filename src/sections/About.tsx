import { definitions } from "../shared/common-data";
import aboutMe from "../assets/img/aboutMe.png";

const About = () => {
  return (
    <section id="about" className="container flex">
      <div className="flex-2/5 p-[20px] box">
        <figure className="flex items-center justify-center bg-[#c9c9c94a] rounded-[8px]">
          <img src={aboutMe} alt="" />
        </figure>
      </div>
      <div className="flex-4/5 flex flex-col text-headingColor font-[500] justify-between gap-5">
        <h2 className="text-center leading-14 text-headingColor font-[700] text-[24px]">
          About Me
        </h2>
        <p className="text-justify indent-10 text-[15px] leading-6">
          {definitions.aboutMe}
        </p>
        <div className="flex flex-1/2 justify-between items-center p-7">
          {/* <div className="flex flex-col p-10 border rounded-[10px]">
            <span className="">Riders</span>
          </div> */}
          <i className="ri-team-fill text-[70px]">
            <span className="text-[16px]">Family</span>
          </i>
          <i className="ri-motorbike-fill text-[70px]"></i>
          <i className="ri-basketball-fill text-[70px]"></i>
          <i className="ri-headphone-fill text-[70px]"></i>
          <i className="ri-plant-fill text-[70px]"></i>
        </div>
      </div>
    </section>
  );
};

export default About;

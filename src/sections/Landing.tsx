import profile from "../assets/img/aboutMe1.png";
import CountUp from "react-countup";

const Landing = () => {
  const bannerDetails = `"Driven by a strong mindset to become the best version of myself, I am dedicated to constant self-improvement, engaging in ethical practices and behaviors that positively contribute to society, fulfilling my purpose of existence"`;
  return (
    <section id="landing" className="pt-0">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row gap-8">
          {/* Ratings */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="flex md:basis-1/5 justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-items-start md:text-end"
          >
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={10} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Ratings
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={4} duration={1} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Satisfied Companies
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={190} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Completed Projects
              </h4>
            </div>
          </div>

          {/* Profile */}
          <div
            data-aos="zoom-in-up"
            className="basis-1/3 mt-10 sm:mt-0 ease-in"
          >
            <figure className="flex items-center justify-center">
              <img src={profile} alt="" />
            </figure>
          </div>
          {/* hero left content */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello, everyone!
            </h5>
            <h1
              data-aos="fade-right"
              className="text-headingColor font-[700] text-[1.8rem] sm:text-[40px] leading-[56px] sm:leading-[56px] mt-5"
            >
              I'm Jhaps Fajardo
              <br />
              W🕸b Developer👨🏼‍💻
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primary text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] cursor-pointer">
                  <i className="ri-mail-line"></i>Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor py-2 px-0 hover:rounded-[8px] hover:border hover:px-2"
              >
                See portfolio
              </a>
            </div>
            <p
              data-aos="fade-up"
              className="flex italic gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              {bannerDetails}
            </p>
            <div data-aos="fade-up" className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me:
              </span>
              {/* Make this resusable component */}
              <span>
                <a
                  href="#youtube"
                  className="text-primary text-[20px] font-[600]"
                >
                  <i className="ri-youtube-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-primary text-[20px] font-[600]"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-primary text-[20px] font-[600]"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-primary text-[20px] font-[600]"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Landing;

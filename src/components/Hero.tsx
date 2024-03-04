import {
  heroDesktop,
  heroTablet,
  heroMobile,
  heroFull,
  teacherPhoto,
  teacherDesktopSm,
  teacherMobile,
} from "../assets";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="flex flex-col md:flex-row md:items-end md:justify-center max-w-[1440px] mt-16 md:mt-20 gap-5 lg:gap-20 lg:pt-0 px-4 md:px-20 lg:px-32 z-30">
        <div className="md:pt-14">
          <picture>
            <source
              type="image/jpg"
              media="(min-width: 1440px)"
              srcSet={teacherPhoto}
            />
            <source
              type="image/jpg"
              media="(min-width: 1200px)"
              srcSet={teacherDesktopSm}
            />
            <source
              type="image/jpg"
              media="(min-width: 767px)"
              srcSet={teacherDesktopSm}
            />
            <img
              src={teacherMobile}
              className="w-[100%] object-cover"
              alt="teacher Gong"
            />
          </picture>
        </div>
        <div className="flex flex-col gap-2 lg:gap-4">
          <p>STEVEN 龔少</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-[#754444]">
            英文家教老師
          </h1>
          <div className="flex gap-2 lg:gap-3">
            <a href="tel:0987-988258">Tel: 0987-988258</a>
            <a href="https://msng.link/o?luvwinnie7969=ln">
              Line: luvwinnie7969
            </a>
          </div>
        </div>
      </div>
      <div className="top-0 right-0 absolute">
        <picture>
          <source
            type="image/jpg"
            media="(min-width: 1440px)"
            srcSet={heroFull}
          />
          <source
            type="image/jpg"
            media="(min-width: 1200px)"
            srcSet={heroDesktop}
          />
          <source
            type="image/jpg"
            media="(min-width: 768px)"
            srcSet={heroTablet}
          />
          <img
            src={heroMobile}
            className="object-cover"
            alt="letters background"
          />
        </picture>
      </div>
    </div>
  );
};

export default Hero;

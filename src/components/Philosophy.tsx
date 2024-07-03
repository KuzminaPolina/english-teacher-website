import { experience } from "../constants";

const Philosophy = () => {
  return (
    <section id="teaching philosophy" className="px-4 md:px-10 lg:px-32 py-28">
      <div className="max-w-[80rem] mx-auto">
        <div className="relative mb-5 md:mb-20">
          <p className="text-3xl md:text-6xl font-raleway text-[#c8b0c9] text-right">
            {experience.headerEng}
          </p>
          <h2 className="text-4xl md:text-5xl text-[#754444] font-notoSans font-bold text-right mr-24 md:mr-[280px] mt-[-10px] z-20">
            {experience.headerCn}
          </h2>
        </div>
        <div className="flex flex-col gap-5 xl:gap-0 md:grid grid-cols-2">
          <div className="w-full h-[100%] flex justify-end items-center">
            <p className="m-0 p-0 text-[#754444] text-[100px] md:text-[10rem] leading-none text-right font-noto font-bold">
              {experience.word1}
            </p>
          </div>
          <p className="text-[#754444] text-xl xl:text-2xl max-w-[700px] md:mr-0 md:ml-auto font-inter">
            {experience.paragraph1}
          </p>
        </div>
        <div className="flex flex-col-reverse gap-5 xl:gap-0 md:grid grid-cols-2">
          <p className="text-[#754444] font-inter text-xl xl:text-2xl max-w-[700px]">
            {experience.paragraph2}
          </p>
          <div className="w-full h-[100%] flex justify-start items-center">
            <p className="m-0 p-0 text-[#754444] text-[120px] md:text-[10rem] leading-none text-right font-noto font-bold">
              {experience.word2}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 xl:gap-0 md:grid grid-cols-2">
          <div className="w-full h-[100%] flex justify-end items-center">
            <p className="m-0 p-0 text-[#754444] text-[120px] md:text-[10rem] leading-none text-right font-noto font-bold">
              {experience.word3}
            </p>
          </div>
          <p className="text-[#754444] font-inter text-xl xl:text-2xl max-w-[700px] md:mr-0 md:ml-auto">
            {experience.paragraph3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
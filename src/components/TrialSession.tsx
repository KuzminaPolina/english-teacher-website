import { booking } from "../constants";

const TrialSession = () => {
  return (
    <section id="trial" className="diagonal px-4 md:px-10 lg:px-32 py-28">
      <div className="max-w-[80rem] mx-auto mb-10 xl:mb-24">
        <div className="relative">
          <p className="text-3xl md:text-6xl text-[#e1c1e2] text-right">
            {booking.headerEng}
          </p>
          <h2 className="text-4xl md:text-5xl text-[#754444] font-bold font-notoSans text-right mr-28 md:mr-[250px] mt-[-10px] z-20">
            {booking.headerCn}
          </h2>
        </div>
      </div>
      <div className="max-w-[80rem] mx-auto">
        <ul className="flex flex-col md:flex-row md:gap-10">
          <li className="relative self-end lg:self-center">
            <div className=" bg-amber-400 circle p-6 my-5 md:my-0">
              <a href={booking.link} target="_blank">
                <p className="text-xl text-center">
                  {booking.buttonCn}
                </p>
              </a>
            </div>
          </li>
          <li className="text-white flex-1 text-xl">
            <h3 className="text-amber-400 text-2xl xl:text-4xl font-notoSans md:text-5xl font-bold pr-3 mb-10">
              {booking.headerSmall}
            </h3>
            <p className="text-white text-xl xl:text-2xl inline-block font-inter">
              {booking.text}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TrialSession;

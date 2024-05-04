import { advantages } from "../constants";

const Teaching = () => {
  return (
    <section id="teaching" className="px-4 md:px-10 lg:px-32 py-28">
      <div className="max-w-[80rem] mx-auto mb-24">
        <div className="relative">
          <p className="text-3xl md:text-6xl text-[#c8b0c9] text-right">
            Teaching style
          </p>
          <h2 className="text-4xl md:text-5xl text-[#754444] font-notoSans font-bold text-right mr-28 md:mr-[280px] mt-[-10px] z-20">
            教學方式
          </h2>
        </div>
      </div>
      <div className="max-w-[90rem] mx-auto">
        <ul className="grid md:grid-cols-2 gap-5">
          {advantages.map((advantage) => (
            <li className="shadow-xl rounded-3xl p-5 md:flex md:gap-5">
              <div className="w-[100px] center pb-5">
                <img
                  src={advantage.img}
                  width="150"
                  height="150"
                  className="w-[100px] min-w-[100px]"
                  alt="study icon"
                />
              </div>
              <div className="md:flex-1">
                <h3 className="text-2xl font-bold mb-4 font-notoSans md:pl-[30px] text-center md:text-left">
                  {advantage.title}
                </h3>
                <div className="flex items-start">
                  <div>
                    <svg
                      fill="#009e1a"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      data-name="Layer 1"
                      viewBox="0 0 200 200"
                    >
                      <path d="M100 15a85 85 0 1 0 85 85 85 85 0 0 0-85-85Zm0 150a65 65 0 1 1 65-65 64.9 64.9 0 0 1-65 65Zm25-91.5-29 35L76 94c-4.5-3.5-10.5-2.5-14 2s-2.5 10.5 2 14l18.5 13.5c4.5 3 8.5 7.5 14 8 1.5 0 3.5 0 5-1l3-3 22.5-27c4-5 8-9.5 12-14.5 3-4 4-9 .5-13l-1.5-1.5c-3.5-2.5-9.5-2-13 2Z" />
                    </svg>
                  </div>
                  <p className="text-xl font-inter text-green-900 mb-3 ml-3 font-bold">
                    {advantage.contentPositive}
                  </p>
                </div>

                <div className="flex items-start">
                  <div>
                    <svg
                      fill="#ff000060"
                      width="30"
                      height="30"
                      viewBox="0 0 200 200"
                      data-name="Layer 1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Z" />
                      <path d="M128.5,74a9.67,9.67,0,0,0-14,0L100,88.5l-14-14a9.9,9.9,0,0,0-14,14l14,14-14,14a9.9,9.9,0,0,0,14,14l14-14,14,14a9.9,9.9,0,0,0,14-14l-14-14,14-14A10.77,10.77,0,0,0,128.5,74Z" />
                    </svg>
                  </div>
                  <p className="text-xl font-inter text-gray-400 ml-3">
                    {advantage.contentNegative}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Teaching;

import { reviews } from "../constants";
const Reviews = () => {
  return (
    <section id="reviews" className="px-4 md:px-10 lg:px-32 py-28">
      <div className="max-w-[80rem] mx-auto mb-24">
        <div className="relative">
          <p className="text-3xl md:text-6xl text-[#c8b0c9] text-right">
            Students' Reviews
          </p>
          <h2 className="text-4xl md:text-5xl text-[#754444] font-notoSans font-bold text-right mr-28 md:mr-[280px] mt-[-10px] z-20">
            學生評語
          </h2>
        </div>
      </div>
      <div className="max-w-[90rem] mx-auto">
        <ul className="flex flex-col md:grid grid-cols-3 gap-10">
          {reviews.map((reviewItem) => (
            <li className="diagonal p-10">
              <div className="flex items-center gap-5 mb-7">
                <div className="w-[80px] h-[80px] bg-amber-400 flex items-center justify-center rounded-full">
                  <svg
                    width="60px"
                    height="60px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 8 c 1.109375 0 2 -0.890625 2 -2 v -0.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0"
                      fill="#754444"
                    />
                  </svg>
                </div>
                <p className="text-white text-xl font-bold">
                  {reviewItem.name}
                </p>
              </div>
              <p className="text-white text-xl font-inter">
                {reviewItem.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Reviews;

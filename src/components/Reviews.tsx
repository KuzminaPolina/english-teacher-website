import { useState } from "react";
import { reviews } from "../constants";

const Reviews = () => {
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(3);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);

  function prevPage() {
    setDisabledNext(false);
    if (rangeMin === 0 && rangeMax === 3) {
      setDisabledPrev(true);
      return;
    }
    setRangeMin((prevVal) => prevVal - 3);
    setRangeMax((prevVal) => prevVal - 3);
  }

  function nextPage() {
    setDisabledPrev(false);
    if (rangeMax === reviews.length && rangeMin === reviews.length - 3) {
      setDisabledNext(true);
      return;
    }
    setRangeMin((prevVal) => prevVal + 3);
    setRangeMax((prevVal) => prevVal + 3);
  }

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
        <div className="flex justify-between my-10">
          <div>
            <button onClick={prevPage} className="review-button" disabled={disabledPrev}>
              <svg width="50" height="50" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M22 15H11.414l4.121-4.121a.999.999 0 1 0-1.414-1.414l-5.656 5.656a.981.981 0 0 0-.26.879.981.981 0 0 0 .26.879l5.656 5.661a1 1 0 0 0 1.414 0c.391-.39.391-1.03 0-1.42L11.414 17H22a1 1 0 1 0 0-2Zm8 13c0 1.1-.896 2-2 2H4c-1.104 0-2-.9-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24ZM28 0H4a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Z" fill="currentColor" fill-rule="evenodd"/></svg>
            </button>
          </div>
          <div>
            <button onClick={nextPage} className="review-button" disabled={disabledNext}>
              <svg width="50" height="50" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M30 28c0 1.1-.896 2-2 2H4c-1.104 0-2-.9-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24ZM28 0H4a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Zm-4.465 15.121-5.656-5.656a.999.999 0 1 0-1.414 1.414L20.586 15H10a1 1 0 1 0 0 2h10.586l-4.121 4.12a1.006 1.006 0 0 0 0 1.42 1 1 0 0 0 1.414 0l5.656-5.661a.981.981 0 0 0 .26-.879.981.981 0 0 0-.26-.879Z" fill="currentColor" fill-rule="evenodd"/></svg>
            </button>
          </div>
        </div>
        <ul className="flex flex-col md:grid grid-cols-3 gap-10 min-h-[470px]">
          {reviews.slice(rangeMin, rangeMax).map((reviewItem) => (
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
              <p className="text-white text-xl md:text-2xl font-inter">
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

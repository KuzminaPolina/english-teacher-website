const Reviews = () => {
  return (
    <section className="px-4 md:px-10 lg:px-32 py-28">
      <div className="max-w-[70rem] mx-auto mb-24">
        <div className="relative">
          <p className="text-3xl md:text-6xl text-[#c8b0c9] text-right">
            Students' Reviews
          </p>
          <h2 className="text-4xl md:text-5xl text-[#754444] font-bold text-right mr-28 md:mr-[280px] mt-[-10px] z-20">
            學生評語
          </h2>
        </div>
      </div>
      <div className="max-w-[90rem] mx-auto">
        <ul className="flex flex-col md:flex-row gap-10">
          <li className="diagonal p-10">
            <div className="flex items-center gap-5 mb-7">
              <div className="w-[80px] h-[80px] bg-slate-400 rounded-full"></div>
              <p className="text-white text-xl font-bold">王一博</p>
            </div>
            <p className="text-white">
              記共前野敗顔移名察明課念話朝載提室。展何上作動学囲勤岡子抗判。初年余皇動経左点活内連百分崎星府万。
            </p>
          </li>
          <li className="diagonal p-10">
            <div className="flex items-center gap-5 mb-7">
              <div className="w-[80px] h-[80px] bg-slate-400 rounded-full"></div>
              <p className="text-white text-xl font-bold">羅雲熙</p>
            </div>
            <p className="text-white">
              記共前野敗顔移名察明課念話朝載提室。展何上作動学囲勤岡子抗判。初年余皇動経左点活内連百分崎星府万。
            </p>
          </li>
          <li className="diagonal p-10">
            <div className="flex items-center gap-5 mb-7">
              <div className="w-[80px] h-[80px] bg-slate-400 rounded-full"></div>
              <p className="text-white text-xl font-bold">龚俊</p>
            </div>
            <p className="text-white">
              記共前野敗顔移名察明課念話朝載提室。展何上作動学囲勤岡子抗判。初年余皇動経左点活内連百分崎星府万。
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Reviews;

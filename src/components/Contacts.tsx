const Contacts = () => {
  return (
    <section className="px-4 md:px-10 lg:px-32 py-28">
      <div className="max-w-[80rem] mx-auto mb-24">
        <div className="relative mb-20">
          <p className="text-3xl md:text-6xl text-[#c8b0c9] text-right">
            Book a Trial
          </p>
          <h2 className="text-4xl md:text-5xl text-[#754444] font-bold text-right mr-28 md:mr-[280px] mt-[-10px] z-20">
            預定試教
          </h2>
        </div>
      </div>
      <div className="max-w-[90rem] mx-auto">
        <h3 className="text-xl text-center mb-20 p-3 bg-amber-400">
          預定30分鐘的試教!
        </h3>
        <ul className="grid grid-cols-4">
          <li>裁量學生英文水平</li>
          <li>討論學生的學習目標</li>
          <li>選最適合教育資料</li>
          <li>Success!</li>
        </ul>
      </div>
    </section>
  );
};

export default Contacts;

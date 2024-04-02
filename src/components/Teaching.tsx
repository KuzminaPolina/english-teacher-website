import StudyMode from "../assets/sprite/study_mode.svg";
import SelfTest from "../assets/sprite/Self_test.svg";
import Confidence from "../assets/sprite/Improvement.svg";
import Speed from "../assets/sprite/Student.svg";
import Vocab from "../assets/sprite/Vocabulary_type-2.svg";

const Teaching = () => {
  return (
    <section id="teaching" className="px-4 md:px-10 lg:px-32 py-28">
      <div className="max-w-[80rem] mx-auto mb-24">
        <div className="relative">
          <p className="text-3xl md:text-6xl text-[#c8b0c9] text-right">
            Teaching style
          </p>
          <h2 className="text-4xl md:text-5xl text-[#754444] font-bold text-right mr-28 md:mr-[280px] mt-[-10px] z-20">
            教學方式
          </h2>
        </div>
      </div>
      <div className="max-w-[90rem] mx-auto">
        <ul className="grid grid-cols-2 gap-5">
          <li className="shadow-xl rounded-3xl p-5 flex gap-5">
            <div>
              <img src={StudyMode} width="150" alt="study icon" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">學習模式</h3>
              <p>反覆的英文對談加上中翻英訓練</p>
            </div>
          </li>
          <li className="shadow-xl rounded-3xl p-5 flex gap-5">
            <div>
              <img src={SelfTest} width="150" alt="study icon" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">檢驗成效的方法</h3>
              <p>每次英語對談都可自行檢驗</p>
            </div>
          </li>
          <li className="shadow-xl rounded-3xl p-5 flex gap-5">
            <div>
              <img src={Confidence} width="150" alt="study icon" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">學習信心</h3>
              <p>越常講英文，英語能力必定越提升，信心也會隨之增加</p>
            </div>
          </li>
          <li className="shadow-xl rounded-3xl p-5 flex gap-5">
            <div>
              <img src={Speed} width="150" alt="study icon" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">學習速度</h3>
              <p>
                初期學習速度雖較慢，但單字不易忘，文法觀念也具系統性，在後期能培養出強烈語感，學習速度也隨之加快
              </p>
            </div>
          </li>
          <li className="shadow-xl rounded-3xl p-5 flex gap-5">
            <div>
              <img src={Vocab} width="150" alt="study icon" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">背單子</h3>
              <p>
                照音拼字，並知道那些單字無法對應中文，在學習中可大幅降低被中文干擾的狀況
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Teaching;

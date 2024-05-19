import { heroSection } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div id="trial">
      <div id="trial" className="px-4 md:px-10 lg:px-32 py-5 diagonal">        
      </div>
      <div className="max-w-[80rem] mx-auto mb-5">
        <div className="px-4 md:px-10 lg:px-32 py-20">
          <div className="flex flex-col md:flex-row justify-end gap-10">
            <div className="order-2 md:order-1">
              <p className="text-xl font-inter text-right mb-4">{heroSection.teacherName}</p>
              <h1 className="text-3xl md:text-2xl lg:text-3xl font-notoSans font-bold text-[#754444] text-right mb-4">
                {heroSection.tagline}
              </h1>
              <div className="flex flex-col items-end md:items-center gap-1 lg:gap-2 xl:gap-3">
                <a
                  href={heroSection.phoneLink}
                  className="align-middle text-xl flex items-center"
                >
                  <span className="phone content-center">
                    <FontAwesomeIcon icon={faPhone} className="text-white" />
                  </span>
                  {heroSection.phone}
                </a>

                <a href={heroSection.lineLink} className="align-middle text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <path
                      fill="#00c300"
                      d="M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z"
                    />
                    <path
                      fill="#fff"
                      d="M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z M18.875,25.907h-2.604c-0.379,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687c0.379,0,0.687,0.308,0.687,0.687v4.521h1.917c0.379,0,0.687,0.308,0.687,0.687C19.562,25.598,19.254,25.907,18.875,25.907z M21.568,25.219c0,0.379-0.308,0.688-0.687,0.688s-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687s0.687,0.308,0.687,0.687V25.219z M27.838,25.219c0,0.297-0.188,0.559-0.47,0.652c-0.071,0.024-0.145,0.036-0.218,0.036c-0.215,0-0.42-0.103-0.549-0.275l-2.669-3.635v3.222c0,0.379-0.308,0.688-0.688,0.688c-0.379,0-0.688-0.308-0.688-0.688V20.01c0-0.296,0.189-0.558,0.47-0.652c0.071-0.024,0.144-0.035,0.218-0.035c0.214,0,0.42,0.103,0.549,0.275l2.67,3.635V20.01c0-0.379,0.309-0.687,0.688-0.687c0.379,0,0.687,0.308,0.687,0.687V25.219z M32.052,21.927c0.379,0,0.688,0.308,0.688,0.688c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23h1.917c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.309,0.688-0.688,0.688h-2.604c-0.378,0-0.687-0.308-0.687-0.688v-2.603c0-0.001,0-0.001,0-0.001c0,0,0-0.001,0-0.001v-2.601c0-0.001,0-0.001,0-0.002c0-0.379,0.308-0.687,0.687-0.687h2.604c0.379,0,0.688,0.308,0.688,0.687s-0.308,0.687-0.688,0.687h-1.917v1.23H32.052z"
                    />
                  </svg>
                  {heroSection.line}
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-10">
                <h2 className="text-3xl md:text-2xl text-[#754444] font-notoSans z-20 text-right">
                預定你的課
                </h2>
              </div>
              <div className="flex flex-col justify-end items-end w-fit gap-5 mr-0 ml-auto">
                <a href="https://cal.com/teachersteven/30min" className="bg-amber-400 px-5 py-2 rounded-xl">預定30分鐘免費試教</a>
                <a href="https://cal.com/teachersteven/45-min-meeting" className="bg-amber-400 px-5 py-2 rounded-xl">預定45分鐘正常課</a>           
              </div>
            </div>          
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;

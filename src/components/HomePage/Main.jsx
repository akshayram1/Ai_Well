// import man from "../../assets/man.jpg";
import { Link } from "react-router-dom";
// import drop2 from "../../assets/drop2.png";
// import Footer from "../footerSection/footer";
// import { useTranslation } from "react-i18next";
import arrow from "../../assets/up-arrow.png";
import TubeWell from "../../assets/TubeWell.jpeg";
import sustainability from "../../assets/sustainability.png";
import bhujal from "../../assets/atalbhujal.png";

const Main = () => {
  // const { t } = useTranslation();

  return (
    <>
      <div className="font-montserrat-400 mb-0">
        {/* Section1 */}
        <div className="flex flex-col-reverse md:flex-row justify-between mb-5 overflow-y-clip items-center text-dark-brown md:h-[80vh]">
        <div className="w-full md:w-1/2 px-8">
          <h1 className="text-2xl md:text-3xl lg:text-5xl py-5 text-dark-brown font-poppins-700">
            जलं रक्षामः, जीवनं रक्षामः।
          </h1>
          <div className="text-2xl font-bold pb-2">Anticipating Wells, Ensuring Water</div>
          <p className="text-justify font-montserrat-500 mb-5 opacity-90">
            Explore smart well construction with Predictive.Ai! Our advanced
            technology guides you in choosing the best location, depth, and
            drilling method for a sustainable and efficient water supply. Get
            accurate insights on water quantity, quality, and make smart
            decisions for the future of water management. Start today!
          </p>
          <div className="my-10">
            <Link
              to="/prediction"
              className="py-3 shadow-xl text-white border bg-dark-blue text-light-grey text-lg rounded-3xl px-5"
            >
              Predict
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex justify-end items-center">
          <img src={TubeWell} className="rounded-bl-[13em] w-full h-[100%] md:w-[90%]" alt="" />
        </div>
      </div>


        {/* Ṣection 2 */}
        <div className="flex mx-[10%] justify-center flex-col pt-5">
          <h2 className="text-[2.5em] font-bold font-montserrat-700 text-center text-dark-brown">
            Discover Well Distribution
          </h2>
          <div className="relative text-black bg-white shadow-2xl p-5 rounded-2xl flex my-[1em] items-center ">
            {/* <div className="absolute shadow-2xl w-full h-full bg-white rounded-3xl"></div> */}
            <div className="w-[50%]  m-5 p-4 z-10">
              <div className="my-4 text-justify">
                This map shows you the concentration of wells in your area. This
                information can be helpful for understanding water availability
                and resources in your community. Whether you are a homeowner,
                farmer, or just curious, knowing the locations of nearby wells
                can provide insights into your local water supply and help you
                make informed decisions water usage and management.
                <div className="list-disc p-4 flex flex-col gap-4">
                  <li>
                    Red: Indicates a high density of wells in the area,
                    suggesting a significant concentration of water sources.
                  </li>
                  <li>
                    Yellow: Represents a moderate density of wells, signifying a
                    balanced distribution of water sources.
                  </li>
                  <li>
                    Green: Denotes a lower density of wells, indicating fewer
                    water sources in the area.
                  </li>
                </div>
              </div>
              <Link
                to="/visualisation"
                className="p-4 my-5 rounded-md bg-gray-900 text-white"
              >
                Explore more
              </Link>
            </div>
            <div className="w-[50%] p-2 z-20">
              <iframe
                className="rounded-md"
                src="https://northenmed.com/sih/maps/cluster_map.html"
                loading="lazy"
                width="100%"
                height="500px"
              />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="px-4 py-[2em] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-auto lg:pr-5">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-dark-brown sm:text-4xl sm:leading-none font-young-serif">
                Revolutionizing Water Access: <br />
                Our Innovative AI-Powered Well System.
              </h2>
            </div>
            <div className="lg:w-[50%]">
              <p className="text-md text-gray-700 text-justify opacity-90">
                Our groundbreaking AI-powered well system transforms water
                access. By utilizing advanced technology, it ensures reliable,
                efficient, and sustainable clean water distribution. This
                innovative solution addresses water scarcity challenges,
                benefiting communities with improved access to essential
                resources.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="px-[10%]">
          <h2 className="text-[2.5em]  text-center font-bold text-dark-brown my-5">
            Initiatives by Ministry of Jal Shakti
          </h2>

          {/* Cards */}
          <div className="my-5">
            <div className="border rounded-2xl bg-white flex p-[3em] shadow-[0_5px_60px_-20px_rgba(0,0,0,0.2)] hover:translate-x-1 ease-in duration-75">
              <img
                src={sustainability}
                alt=""
                width={200}
                className="rounded-xl"
              />
              <Link to="/sustainability" className="px-[2em] flex flex-col justify-center">
                <h2 className="font-bold text-2xl pb-3 hover:underline text-dark-brown">
                  Sustainability
                </h2>
                {/* icon */}
                <p>
                  Explore measures to safeguard our precious groundwater
                  resources. Click here to discover sustainable practices,
                  conservation methods, and innovative solutions ensuring the
                  longevity of this vital water source.
                  <ul className="list-disc pl-7 font-montserrat-500 py-1">
                    <li>Nalaband</li>
                    <li>Only shaft</li>
                    <li>Checkdam</li>
                    <li>Recharge shaft with Revival</li>
                  </ul>
                </p>
              </Link>
            </div>
          </div>

          <div>
            <Link to="https://ataljal.mowr.gov.in/" className="border rounded-2xl bg-white flex p-[3em] shadow-[0_5px_20px_-5px_rgba(0,0,0,0.2)] hover:translate-x-1 ease-in duration-75">
              <div className="px-[2em] flex flex-col justify-center">
                <h2 className="font-bold text-2xl pb-3 hover:underline text-dark-brown">
                  Atal Bhujal Yojana
                </h2>
                {/* icon */}
                <p>
                  Discover the transformative impact of the Atal Bhujal Yojana,
                  a pioneering initiative by the Ministry of Jal Shakti. Click
                  here to delve into the comprehensive strategies aimed at
                  sustainable groundwater management, community participation,
                  and the preservation of this invaluable resource for future
                  generations.
                </p>
              </div>
              <img src={bhujal} alt="" width={200} className="rounded-xl" />
            </Link>
          </div>
        </div>

        {/* Section 5 */}
        <div className=" py-[5em] px-[10%]">
          <h1 className="font-bold text-[2.5em] font-montserrat-700 text-center mb-[1em] text-dark-brown">
            Visualisations
          </h1>
          <div className="flex">
            <div className="w-[80%] px-5">
              <p className=" text-justify opacity-90">
                Our smart technology uses advanced computer skills to help you
                figure out the best way to dig a well and use water wisely. Our
                system can tell you if a spot is good for well construction, how
                deep you might need to dig to find water, how much water you can
                expect, the best way to drill, and even if the water is good
                quality. Its like having a helpful guide for your water well
                decisions! Easy to use and super accurate, our website is here
                to make sure you make smart choices for a sustainable and
                efficient water supply. Start exploring with Predictive.Ai today
                and be a part of the future of smart water management!
              </p>
            </div>

            <Link
              to={"/visualisation"}
              className="rounded-3xl text-center w-[20%] bg-bg-color flex justify-center items-center cursor-pointer opacity-80 hover:opacity-100 ease-in duration-75 hover:scale-100"
            >
              <img
                src={arrow}
                alt=""
                className="w-[50px] rotate-90 hover:rotate-45 ease-in duration-100"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

import { useState } from "react";
import form from "../../assets/form.gif";
import dth from "../../assets/rotary.gif";
// import { Link } from "react-router-dom";
// https://pranavsangave.pythonanywhere.com/analyze_location/19.08722222/78.33611111

async function callThres() {
  try {
    const response = await fetch(
      "https://northenmed.com/sih/apis/fetch_thresholds.php",
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error during API request: ${error.message}`);
  }
}
async function callApi(apiUrl) {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error during API request: ${error.message}`);
  }
}

const Prediction = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [predictionResult, setPredictionResult] = useState(null);

  const [col, setCol] = useState("Water Bearing");
  const [value1, setValue1] = useState("NA");
  const [value2, setValue2] = useState("NA");
  const [value3, setValue3] = useState("NA");
  const [value4, setValue4] = useState("NA");

  const changeCol = (col, val1, val2, val3, val4) => {
    setCol(col);
    changeValue(val1, val2, val3, val4);
  };

  const changeValue = (val1, val2, val3, val4) => {
    setValue1(val1);
    setValue2(val2);
    setValue3(val3);
    setValue4(val4);
  };

  // const changec1 = () => {
  //   setc1(!c1);
  // };
  // const changec2 = () => {
  //   setc2(!c2);
  // };
  // const changec3 = () => {
  //   setc3(!c3);
  // };

  const api =
    "https://vrd2004.pythonanywhere.com/" + "analyze_location" + "/";

  const handleFormSubmit = async () => {
    try {
      const threshold = await callThres();

      const response = await callApi(
        api + latitude + "/" + longitude + "/" + threshold,
        {}
      );
      console.log(response);
      setPredictionResult(response);
    } catch (error) {
      console.error("Failed to get prediction:", error.message);
    }
  };

  const showPosition = (position) => {
    // Code to handle the geolocation position
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  var strArr = predictionResult?.depth_water_bearing_result?.second.split(",");

  return predictionResult === null ? (
    <>
    <div className="font-montserrat-500 flex justify-center items-center min-h-screen md:flex">
      {/* Input Form */}
      <div className="w-full h-full md:w-1/2 md:p-10 bg-white ">
        <h1 className="text-xl font-bold font-young-serif text-dark-brown">Prediction Page</h1>
        <div className=" p-5">
          <input
            type="text"
            value={latitude}
            placeholder="Enter Latitude"
            onChange={(e) => setLatitude(e.target.value)}
            className="rounded-md p-2 w-full border-2  border-slate-300"
          />
          <input
            type="text"
            value={longitude}
            placeholder="Enter Longitude"
            onChange={(e) => setLongitude(e.target.value)}
            className="p-2 mt-4 rounded-lg w-full border-2 border-slate-300"
          />
        </div>
        <div className=" p-5 flex flex-col justify-between">
          <button
            onClick={getLocation}
            className="py-3 md:mb-3 shadow-xl text-white block bg-dark-blue text-light-grey text-lg rounded-3xl px-3 mb-4"
          >
            Get Location
          </button>
          <button
            onClick={handleFormSubmit}
            className="py-3 shadow-xl text-white block bg-dark-blue text-light-grey text-lg rounded-3xl px-3"
          >
            Get Prediction
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="w-full h-[100%] md:w-1/2 ">
        <img src={form} alt="" className="w-full h-[100%] md:h-[100vh] md:rounded-lg" />
      </div>
    </div>
    </>
  ) : (
    <div className="font-montserrat-500 ">
      {/* Header */}
      <div className="flex flex-col justify-center items-center my-5 text-lg mx-[10%]">
        <h2 className="font-bold text-xl">Adminstration of CGWB</h2>
        <div className="flex justify-between w-full text-[0.9em]">
          <div className="flex gap-10 py-5 ">
            <h3>
              <b>Name:</b> Rohit Jyoti
            </h3>
            <h3>
              <b>Lat:</b> {latitude}
            </h3>
            <h3>
              <b>Long:</b> {longitude}
            </h3>
            <h3>
              <b>Village:</b> Cudalore
            </h3>
            <h3>
              <b>District:</b> Cudalore
            </h3>
            <h3>
              <b>State:</b> Tamil Nadu
            </h3>
          </div>
          <div>Date: 20/12/2023</div>
        </div>
      </div>

      <h2 className="font-bold pt-5 text-center text-[2em] font-montserrat-700 pb-5">
        Prediction Results
      </h2>

      <div>
        <div className="bg-bg-color mx-20 my-10 rounded-3xl flex shadow-xl">
          <div className="w-1/2 px-10 py-14">
            <h2 className="font-bold text-3xl pb-2">Water Bearing Zones</h2>
            <p>Depth of water bearing zones wise</p>
            <ul className="list-disc py-1 pl-5">
              <li>
                Aquifer 1{" "}
                {/* {predictionResult.depth_water_bearing_result.first} */}
              </li>
              <li>
                Aquifer 2{" "}
                {/* {predictionResult.depth_water_bearing_result.second} */}
              </li>
              <li>
                Aquifer 3{" "}
                {/* {predictionResult.depth_water_bearing_result.third} */}
              </li>
              <li>
                Aquifer 4{" "}
                {/* {predictionResult.depth_water_bearing_result.forth} */}
              </li>
            </ul>
            <p>
              Water-bearing zones (aquifers) can be classified on the basis of
              the presence or absence of an overlying confining bed, and the
              resultant potentiometric surface - which is defined as the level
              to which water will rise in a tightly cased well.
            </p>
          </div>

          <div className=" py-5 rounded-xl w-[50%] px-48 h-full flex flex-col justify-center items-end text-white">
            <div className="bg-green-500 w-full text-center h-[10px]"></div>
            <div className="bg-dark-brown w-full text-center">
              Soil till 5 meters
            </div>
            <div className="bg-blue-500 w-full py-6 text-center text-white">
              Aquifer 1:{" "}
              {predictionResult.depth_water_bearing_result.first
                .split(",")
                .join(" to ")}{" "}
              m.masl
            </div>
            <div className="bg-slate-400 w-full text-center">Clay</div>
            <div className="bg-[#327cc9] w-full py-6 text-center text-white">
              Aquifer 2 : {strArr.join("  to  ")} m.masl
            </div>
            <div className="bg-slate-400 w-full text-center">Clay</div>
            <div className="bg-[#0f52ba] w-full py-6 text-center text-white">
              Aquifer 3 :{" "}
              {predictionResult.depth_water_bearing_result.third
                .split(",")
                .join(" to ")}{" "}
              m.masl
            </div>
            <div className="bg-slate-400 w-full text-center">Clay</div>
            <div className="bg-[#004691] w-full py-6 text-center text-white">
              Aquifer 4 :{" "}
              {predictionResult.depth_water_bearing_result.forth
                .split(",")
                .join(" to ")}{" "}
              m.masl
            </div>
            <div></div>
          </div>
        </div>

        {/* <div className="bg-bg-color flex flex-row-reverse">
          <div className="w-1/2 px-10 py-14">
            <h2 className="font-bold text-3xl pb-2">Depth of Water</h2>
            <p>Depth of water</p>
            <h2 className="font-bold">
              {predictionResult.depth_well_result.depth}
            </h2>
            <p>
              Water depth is simply the depth of the water at a specific point.
              In certain areas, water levels have huge effects on ecosystem
              health. For example, fish spawning.
            </p>
          </div>

          <iframe
            src="src\assets\cluster_map.html"
            frameBorder="0"
            className="w-1/2"
          ></iframe>
        </div> */}

        <div className="bg-bg-color mx-20 my-10 rounded-3xl flex flex-row-reverse shadow-xl">
          <div className="w-1/2 px-10 py-14">
            <h2 className="font-bold text-3xl pb-2">Drilling Techniques</h2>
            <p>Drilling Techniques for your site</p>
            <h2 className="font-bold text-lg">
              Predicted:{" "}
              {predictionResult.drilling_technic_result?.drilling_technic}
            </h2>
            <p>
              Water borehole drilling is a type of water well drilling that
              involves drilling a hole deep into the ground to access water. The
              most common method used for water borehole drilling is rotary
              drilling.
            </p>
          </div>

          <img
            src={dth}
            className="w-1/2 px-10 py-5 rounded-xl flex justify-center items-center h-[300px]"
          ></img>
        </div>

        <div className="bg-bg-color flex mx-20 rounded-3xl my-10 shadow-xl">
          <div className="w-1/2 px-10 py-14">
            <h2 className="font-bold text-3xl pb-2">Water Discharge</h2>
            <p className="mb-5">Water Discharge Prediction</p>

            <p>
              Water discharge, also known as flow, is the volume of water that a
              body of water carries in a given amount of time. It is commonly
              expressed in units of cubic feet per second (cfs) or liters per
              second (lps). A discharge is a measure of the quantity of any
              fluid flow over unit time. The quantity may be either volume or
              mass. Thus the water discharge of a tap (faucet) can be measured
              with a measuring jug and a stopwatch.
            </p>
          </div>

          <div className=" py-5 rounded-xl w-1/2 px-48 h-full flex flex-col justify-center items-center text-white">
            <div className="bg-green-500 w-full text-center h-[10px]"></div>
            <div className="bg-dark-brown w-full text-center">
              Soil till 5 meters
            </div>
            <div className="bg-blue-500 w-full py-4 text-center text-white">
              Aquifer 1: {predictionResult?.water_discharge_result?.ans[0]} lps
            </div>
            <div className="bg-slate-400 w-full text-center">Clay</div>
            <div className="bg-[#327cc9] w-full py-4 text-center text-white">
              Aquifer 2 : {predictionResult?.water_discharge_result?.ans[1]} lps
            </div>
            <div className="bg-slate-400 w-full text-center">Clay</div>
            <div className="bg-[#0f52ba] w-full py-4 text-center text-white">
              Aquifer 3 : {predictionResult?.water_discharge_result?.ans[2]} lps
            </div>
            <div className="bg-slate-400 w-full text-center">Clay</div>
            <div className="bg-[#004691] w-full py-4 text-center text-white">
              Aquifer 4 : {predictionResult?.water_discharge_result?.ans[3]} lps
            </div>
            <div></div>
          </div>
        </div>

        <div className="bg-bg-color mx-20 my-10 rounded-3xl flex flex-row-reverse shadow-xl">
          <div className="w-1/2 px-10 py-14">
            <h2 className="font-bold text-3xl pb-2">Water Quality</h2>
            <p>Water Quality Prediction</p>
            <ul>
              <li className="font-bold text-lg my-3">
                Chloride:{" "}
                {predictionResult.water_quality_chloride_result?.chloride_level}
              </li>
              <li className="font-bold text-lg my-3">Arsenic: 0</li>
            </ul>
            <p>
              Groundwater quality is based on standards for total dissolved
              solids (TDS) and electrical conductivity (EC).{" "}
            </p>
            <div className="flex justify-end pr-16">
              <div>
                <p>Legend</p>
                <div className="flex gap-3">
                  <div className="h-[15px] mb-1 bg-blue-500 w-[15px]"></div>
                  <span>Permissible</span>
                </div>
                <div className="flex">
                  <div className="h-[15px] mb-1 bg-red-500 w-[15px]"></div>
                  <span>Not Permissible</span>
                </div>
              </div>
            </div>
          </div>

          <div className=" py-5 rounded-xl w-1/2 px-48 h-full flex flex-col justify-center items-center text-white">
            <div className="bg-green-500 w-full text-center h-[10px]"></div>
            <div className="bg-dark-brown w-full text-center">
              Soil till 5 meters
            </div>
            <div
              className={`w-full py-6 text-center border border-b-1 border-black ${
                predictionResult?.water_quality_all_result?.means?.EC_1 < 2250
                  ? "bg-blue-500"
                  : "bg-red-500"
              } text-white`}
            >
              Aquifer 1: EC:{" "}
              {predictionResult?.water_quality_all_result?.means?.EC_1}| F:{" "}
              {predictionResult?.water_quality_all_result?.means?.F_1}
            </div>
            <div
              className={`w-full py-6 text-center border border-b-1 border-black ${
                predictionResult?.water_quality_all_result?.means?.EC_2 < 2250
                  ? "bg-blue-500"
                  : "bg-red-500"
              } text-white`}
            >
              Aquifer 2: EC:{" "}
              {predictionResult?.water_quality_all_result?.means?.EC_2}| F:{" "}
              {predictionResult?.water_quality_all_result?.means?.F_3}
            </div>
            <div
              className={`w-full py-6 text-center border border-b-1 border-black ${
                predictionResult?.water_quality_all_result?.means?.EC_1 < 2250
                  ? "bg-blue-500"
                  : "bg-red-500"
              } text-white`}
            >
              Aquifer 3: EC:{" "}
              {predictionResult?.water_quality_all_result?.means?.EC_3}| F:{" "}
              {predictionResult?.water_quality_all_result?.means?.F_3}
            </div>
            <div
              className={`w-full py-6 text-center border border-b-1 border-black ${
                predictionResult?.water_quality_all_result?.means?.EC_1 < 2250
                  ? "bg-blue-500"
                  : "bg-red-500"
              } text-white`}
            >
              Aquifer 4: EC:{" "}
              {predictionResult?.water_quality_all_result?.means?.EC_4}| F:{" "}
              {predictionResult?.water_quality_all_result?.means?.F_4}
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* Tabs */}

      <div>
        <ul className="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="me-2">
            <div
              onClick={() =>
                changeCol(
                  "Water Bearing Zone",
                  predictionResult.depth_water_bearing_result.first,
                  predictionResult.depth_water_bearing_result.second,
                  predictionResult.depth_water_bearing_result.third,
                  predictionResult.depth_water_bearing_result.forth
                )
              }
              className="inline-block px-4 py-3 text-gray-800 hover:text-white rounded-lg hover:bg-black" 
              aria-current="page"
            >
              Water Bearing Zone
            </div>
          </li>
          <li className="me-2">
            <div
              onClick={() =>
                changeCol(
                  "Drilling",
                  predictionResult?.drilling_technic_request?.drilling_technic,
                  0,
                  0,
                  0
                )
              }
              className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Drilling
            </div>
          </li>
          <li className="me-2">
            <div
              onClick={() =>
                changeCol(
                  "Water Discharge",
                  predictionResult?.water_discharge_result?.ans[0],
                  predictionResult?.water_discharge_result?.ans[1],
                  predictionResult?.water_discharge_result?.ans[2],
                  predictionResult?.water_discharge_result?.ans[3]
                )
              }
              className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Water Discharge
            </div>
          </li>
          <li className="me-2">
            <div
              onClick={() =>
                changeCol(
                  "Water Quality",
                  predictionResult?.water_quality_chloride_result
                    ?.chloride_level,
                  0,
                  0,
                  0
                )
              }
              className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Water Quality
            </div>
          </li>
        </ul>

        <div className="w-full m-5 flex justify-center">
          <table className="p-5 border flex flex-col">
            <tr className="p-5 bg-gray-200">
              <th className="p-5 text-left">Aquifers</th>
              <th className="p-5 text-left">{col}</th>
            </tr>
            <tr className="border-b">
              <td className="p-5">Aquifer 1:</td>
              <td className="p-5">{value1}</td>
            </tr>
            <tr className="border-b">
              <td className="p-5">Aquifer 2:</td>
              <td className="p-5">{value2}</td>
            </tr>
            <tr className="border-b">
              <td className="p-5">Aquifer 3:</td>
              <td className="p-5">{value3}</td>
            </tr>
            <tr className="border-b">
              <td className="p-5">Aquifer 4:</td>
              <td className="p-5">{value4}</td>
            </tr>
          </table>
        </div>

        <div className="flex justify-center mt-5">

          <a href="https://northenmed.com/sih/pages/newIndex.html" className="p-4 rounded-lg cursor-pointer shadow-xl  text-center bg-dark-brown text-white">Download the Report in PDF format</a>
        </div>


        <div className="p-5 w-1/2 my-16 border-2 rounded-3xl flex gap-5 mx-auto">
            <div>
            We value your input! Share your thoughts to help us improve.<br/> Your feedback is essential to creating a better experience for you.
            </div>
            <div className="flex justify-center items-center">
              <a href="https://northenmed.com/sih/pages/Feedbackform.html" className="p-5 bg-blue-500 rounded-full text-white">Give Feedback</a>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Prediction;

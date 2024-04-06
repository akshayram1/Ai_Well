import drop from "../../assets/drop.jpg";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from "react";

const PredictionPage = () => {
  const [userType, setUserType] = useState("loginUser");

  return (
    <div>
      <div className="h-screen md:flex font-poppins-400">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-dark-blue to-light-blue i justify-around items-center hidden">
          <div className="z-10">
            <h1 className="text-white font-bold text-4xl font-young-serif">
              Predict Water Well
            </h1>
            <p className="text-white mt-1">
              Lets Explore the world of water well and predict the water level
            </p>
            <button
              type="submit"
              className="block w-28 bg-white text-dark-brown mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              Read More
            </button>
          </div>
          <img
            src={drop}
            alt=""
            className="w-full h-full absolute opacity-30 "
          />
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>

        {userType === "loginUser" ? (
<LoginForm
  setUserType={() => setUserType("registerUser")}
/>
        ) : (
<RegisterForm 
  setUserType={() => setUserType("loginUser")}
/>
        )}

        {/* Register */}
      </div>
    </div>
  );
};

export default PredictionPage;

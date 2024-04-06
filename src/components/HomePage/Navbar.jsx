import { useState, useEffect } from "react";
import sih from "../../assets/sih.png";
import cgwb from "../../assets/cgwb.png";
import jalShakti from "../../assets/Jal_shakti_logo.png";
import { Link } from "react-router-dom";
import "../../fonts.css";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Check if the script already exists before appending
    if (!document.getElementById("google-translate-script") && windowWidth > 768) {
      var addScript = document.createElement("script");
      addScript.setAttribute("id", "google-translate-script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }
  }, [windowWidth]);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between font-poppins-400 px-5 bg-bg-color">
        <div className="flex flex-wrap md:flex-nowrap items-center">
          <img src={jalShakti} alt="" className="w-24 h-16 py-2 px-1" />
          <img src={cgwb} alt="azadi" className="w-16 h-16 px-2" />
          <img src={sih} alt="azadi" className="w-24 h-16 my-auto px-3" />
        </div>

        {windowWidth <= 768 ? (
          <>
            <div className="flex items-center absolute top-2  right-0">
              <button onClick={toggleMenu} className="md:hidden p-2 mx-2">
                ☰
              </button>
            </div>
            <ul className={`flex flex-col items-center ${showMenu ? "block" : "hidden"}`}>
              <Link to="/" onClick={closeMenu} className="p-2 my-2 mx-2 hover:border-b-2 border-black">
                Home
              </Link>
              <Link
                to="/visualisation"
                onClick={closeMenu}
                className="p-2 my-2 mx-2 hover:border-b-2 border-black"
              >
                Visualisations
              </Link>
              <Link
                to="/info"
                onClick={closeMenu}
                className="p-2 my-2 mx-2 hover:border-b-2 border-black"
              >
                Info
              </Link>
            </ul>
          </>
        ) : (
          <ul className="flex flex-col md:flex-row md:items-center">
            <Link to="/" className="p-2 my-2 md:my-5 mx-2 hover:border-b-2 border-black">
              Home
            </Link>
            <Link
              to="/visualisation"
              className="p-2 my-2 md:my-5 mx-2 hover:border-b-2 border-black"
            >
              Visualisations
            </Link>
            <Link to="/info" className="p-2 my-2 md:my-5 mx-2 hover:border-b-2 border-black">
              Info
            </Link>
          </ul>
        )}

        {windowWidth > 768 && (
          <div className="flex items-center">
            <Link
              to="/login"
              className="p-2 m-2 md:m-5 rounded-3xl bg-dark-brown text-white px-4"
            >
              Login
            </Link>
          </div>
        )}

        {windowWidth > 768 && <div id="google_translate_element"></div>}
      </div>
    </>
  );
};

export default Navbar;

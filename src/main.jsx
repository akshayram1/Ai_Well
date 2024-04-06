// index.js or index.jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/homePage/Navbar.jsx";
import Footer from "./components/footerSection/footer.jsx";
import { Routes, Route } from "react-router-dom";
import PredictionPage from "./components/predictionPage/Prediction.jsx";
import Visualisation from "./components/visualisationPage/Visualisation.jsx";
import InfoPage from "./components/infoPage/InfoPage.jsx";
import Result from "./components/resultPage/Result.jsx";
import Login from "./components/auth/loginPage/LoginForm.jsx";
import RegisterForm from "./components/auth/signupPage/RegisterForm.jsx";
// import { I18nextProvider } from "react-i18next";
// import {i18next} from "./i18n.js" // Import your i18n configuration file
// import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Suspense fallback="loading"> */}
    {/* <I18nextProvider i18n={i18next}> */}
      <Router>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
        <Routes>
          <Route path="/visualisation" element={<Visualisation />} />
        </Routes>
        <Routes>
          <Route path="/prediction" element={<PredictionPage />} />
        </Routes>
        <Routes>
          <Route path="/info" element={<InfoPage />} />
        </Routes>
        <Routes>
          <Route path="/result" element={<Result />} />
        </Routes>
        <Footer />
      </Router>
     {/* </I18nextProvider> 
     </Suspense> */}
  </React.StrictMode>
);

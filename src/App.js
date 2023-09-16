import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Contact from "./components/Contact";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [textchangeMode, settextchangeMode] = useState("DarkMode");
  // const [MBTC, setMBTC] = useState("dark");

  const BgChange = () => {
    if (mode === "light") {
      setmode("dark");
      settextchangeMode("LightMode");
      document.body.style.backgroundColor = "#07192c";
      // setMBTC("light")
      sowAlert("success", "This is Dark Mode");
      document.title = "TextUtils -DarkMode";
      // setInterval(() => {
      //   document.title = "TextUtils -Amazing Web";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "! Install TextUtils -Now";
      // }, 1700);
    } else {
      setmode("light");
      settextchangeMode("DarkMode");
      document.body.style.backgroundColor = "white";
      // setMBTC("dark")
      sowAlert("success", "This is LIght Mode");
      document.title = "TextUtils -LightMode";
    }
  };
  const [alertTxt, setalertTxt] = useState(null);

  const sowAlert = (type, massage) => {
    setalertTxt({ type: type, msg: massage });
    setTimeout(() => {
      setalertTxt(null);
    }, 1500);
  };
  return (
    <>
      <div>
        <Navbar
          title="MyReactApp"
          about="About Us"
          ThimeMode={mode}
          ChangeThime={BgChange}
          TCM={textchangeMode}
          // MBTC={MBTC}
        />
        <Alert alertTxt={alertTxt} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                txtHeadding="Enter the text to analyze below"
                ThimeMode={mode}
                sowAlert={sowAlert}
              />
            }
          />
          <Route path="about/*" element={<About ThimeMode={mode} />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

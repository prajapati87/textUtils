import React, { useState } from "react";

export default function TextForm(props) {
  const [txt, settxt] = useState("");
  const handleUpClick = () => {
    settxt(txt.toUpperCase());
    props.sowAlert("success", "Text is converted in Uppercase");
  };
  const handleLowClick = () => {
    settxt(txt.toLowerCase());
    props.sowAlert("success", "Text is converted in Lowercase");
  };
  const handleCleanClick = () => {
    settxt("");
    props.sowAlert("warning", "Text is cleared");
  };
  const handleOnChange = (event) => {
    settxt(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(txt);
    props.sowAlert("success", "Text is copied");
  };
  const handleRemoveES = () => {
    let newTaxt = txt.split(/[  ]+/);
    settxt(newTaxt.join(" "));
    props.sowAlert("primary", "Extra space removed");
  };
  return (
    <div>
      <div
        className="container"
        style={{ color: props.ThimeMode === "light" ? "black" : "white" }}
      >
        <h2>{props.txtHeadding}</h2>
        <textarea
          style={{
            backgroundColor: props.ThimeMode === "light" ? "white" : "#07192c",
            color: props.ThimeMode === "light" ? "black" : "white",
          }}
          onChange={handleOnChange}
          rows="8"
          className="form-control"
          //   placeholder="Please enter txt here"
          value={txt}
        ></textarea>
        <button
          disabled={txt.length === 0}
          onClick={handleUpClick}
          className="btn btn-primary my-2"
        >
          Change to uppercash
        </button>
        <button
          disabled={txt.length === 0}
          onClick={handleLowClick}
          className="btn btn-primary my-2 mx-2"
        >
          Change to lowerCash
        </button>
        <button
          disabled={txt.length === 0}
          onClick={handleCleanClick}
          className="btn btn-primary my-2 mx-2"
        >
          Clear text
        </button>
        <button
          disabled={txt.length === 0}
          onClick={handleCopy}
          className="btn btn-primary my-2 mx-2"
        >
          Copy Text
        </button>
        <button
          disabled={txt.length === 0}
          onClick={handleRemoveES}
          className="btn btn-primary my-2 mx-2"
        >
          Remove Extra Space
        </button>
        <h3>Text summary here</h3>
        <p>
          {
            txt.split(" ").filter((x) => {
              return x.length !== 0;
            }).length
          }{" "}
          Words and {txt.length} Characters
        </p>
        <h3>Priview</h3>
        <p>{txt.length > 0 ? txt : "Nothing to priview "}</p>
      </div>
    </div>
  );
}

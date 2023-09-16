import React from "react";

export default function Alert(props) {
  const Upercase = (word) => {
    const x = word;
    x.toLowerCase();
    return x.charAt(0).toUpperCase() + x.slice(1);
  };
  return (
    props.alertTxt && (
      <div
        className={`alert alert-${props.alertTxt.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong> {Upercase(props.alertTxt.type)}</strong> : {props.alertTxt.msg}
      </div>
    )
  );
}

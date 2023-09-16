// import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // if (props.ThimeMode === "light") {
  //   setmyStyle({
  //     color: "black",
  //     backgroundColor: "white",
  //   });
  // } else {
  //   setmyStyle({
  //     color: "white",
  //     backgroundColor: "black",
  //     border: " 1px solid white",
  //   });
  // }

  return (
    <div>
      <div
        className="accordion container my-2"
        id="accordionExample"
        style={{
          backgroundColor: props.ThimeMode === "light" ? "white" : "#07192c",
          color: props.ThimeMode === "light" ? "black" : "white",
          border: " 1px solid",
        }}
      >
        <h2 className="my-2 mx-1">About Us</h2>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.ThimeMode === "light" ? "white" : "#07192c",
            color: props.ThimeMode === "light" ? "black" : "white",
            border: " 1px solid",
          }}
        >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor:
                  props.ThimeMode === "light" ? "white" : "#07192c",
                color: props.ThimeMode === "light" ? "black" : "white",
              }}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor:
                  props.ThimeMode === "light" ? "white" : "#07192c",
                color: props.ThimeMode === "light" ? "black" : "white",
              }}
            >
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.ThimeMode === "light" ? "white" : "#07192c",
            color: props.ThimeMode === "light" ? "black" : "white",
            border: " 1px solid",
          }}
        >
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={{
                backgroundColor:
                  props.ThimeMode === "light" ? "white" : "#07192c",
                color: props.ThimeMode === "light" ? "black" : "white",
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor:
                  props.ThimeMode === "light" ? "white" : "#07192c",
                color: props.ThimeMode === "light" ? "black" : "white",
              }}
            >
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div
          className="accordion-item mb-3"
          style={{
            backgroundColor: props.ThimeMode === "light" ? "white" : "#07192c",
            color: props.ThimeMode === "light" ? "black" : "white",
            border: " 1px solid",
          }}
        >
          <h2 className="accordion-header" id="headingThree">
            <button
              style={{
                backgroundColor:
                  props.ThimeMode === "light" ? "white" : "#07192c",
                color: props.ThimeMode === "light" ? "black" : "white",
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor:
                  props.ThimeMode === "light" ? "white" : "#07192c",
                color: props.ThimeMode === "light" ? "black" : "white",
              }}
            >
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

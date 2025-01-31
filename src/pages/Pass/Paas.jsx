import React from "react";
import HeadingAnimation from "../../Component/HeadingAnimation/HeadingAnimation";
import "./Paas.css";
import CTAButton from "../../Component/CommonComponent/CTAButton";

export default function Paas() {
  return (
    <div className="saas_container">
      <div className="saasPageCss heading">
        <div className="underline_overflow">
          <svg
            width="221"
            height="45"
            viewBox="0 0 221 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M221 15.2854C131.721 -13.7817 37.6122 5.19267 1.71781 18.3133"
              stroke="url(#paint0_linear_2258_10798)"
              stroke-width="7"
              fill="none"
            >
              <animate
                attributeName="stroke-dasharray"
                from="0,1000"
                to="1000,0"
                dur="2s"
                fill="freeze"
              ></animate>
            </path>
            <defs>
              <linearGradient
                id="paint0_linear_2258_10798"
                x1="0"
                y1="13.5"
                x2="221"
                y2="13.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00E6FF"></stop>
                <stop offset="1" stop-color="#0066FF"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <HeadingAnimation
          ArrayText={[
            {
              text: "ESDS’s",
            },
            {
              text: "AI-",
            },
            {
              text: "Driven",
            },
            {
              text: "SaaS",
            },
            {
              text: "Is",
            },
            {
              text: "Here",
            },
            {
              text: "To",
            },
            {
              text: "Empower",
            },
            {
              text: "Your",
            },
            {
              text: "Business",
            },
          ]}
          classNameOfHead={"Saas_banner_head"}
        />
      </div>
      <div className="saas_cta">
        <CTAButton
          buttonText={"Unlock Your Potential NOW"}
          hoverText={"Unlock Your Potential NOW"}
          route_link={"contact-us"}
          // color="red"
        />
      </div>
    </div>
  );
}

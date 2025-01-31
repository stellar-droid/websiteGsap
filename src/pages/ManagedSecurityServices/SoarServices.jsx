import React from "react";
import "../../css/SoarServices.css";
import Header from "../../Component/CommonComponent/Header";
import BgSoar from "../../assets/images/SoarServices/BgSoar.png";
import SoarImg1 from "../../assets/images/SoarServices/SoarImg1.png";
import CTAButton from "../../Component/CommonComponent/CTAButton";
const SoarServices = () => {
  return (
    <>
      <div className=" bg-white bg-no-repeat bg-cover bg-center relative">
        <Header />

        <div
          className=" cyberSecuritySection1 flex flex-col items-center "
          style={{ background: `#00000b url(${BgSoar})` }}
        >
          <h1 className="text-4xl text-white font-bold text-center pt-60">
            Harness the power of Intelligent &{" "}
            <br className="hidden lg:block" />
            Automated IT Security with SOAR Solutions
          </h1>
          <p className=" mb-5 text-white whitespace-pre-line m-auto w-6/12 text-center text-lg mt-4">
            SOAR (Security Orchestration, Automation, and Response) redefines
            your IT security landscape by blending intelligent automation with
            seamless orchestration. Empowers your business to proactively manage
            threats, streamline operations, and create a unified defense
            strategy.
          </p>
          <div className="mb-11">
            <CTAButton
              buttonText={"Learn More"}
              hoverText={"Learn More"}
              route_link={"saas"}
            />
          </div>

          {/* <button className="text-white m-auto">Learn More</button> */}
        </div>

        <section
          className="cyberSecuritySection2 flex flex-row "
          style={{ background: "#000819" }}
        >
          <div className="cyberSecurityContainer">
            <div className="cyberSecurityText text-white w-6/12 space-y-1">
              <h3 className=" cs-heading text-4xl">
                What is the{" "}
                <span className=" text-white font-bold">Cost of Ignoring</span>{" "}
                Cybersecurity?
                <br className="hidden lg:block" />
                <span
                  style={{ color: "#00a3ff" }}
                  className="text-lg font-bold"
                >
                  The Reality Check
                </span>
              </h3>

              <p className="cs-heading-p">
                60% – Of small businesses go out of business within six months
                of a cyberattack, primarily due to the financial and
                reputational damage.
                <br className="hidden lg:block" />
                Only 14% – Of organizations report being fully prepared for a
                cyberattack, leaving 86% vulnerable to significant damage.
              </p>
              <h1
                style={{ color: "#00a3ff" }}
                className=" relative  left-[27px] text-lg font-bold"
              >
                Ask yourself the tough question – Does your business have the
                tools and expertise to counter a cyber-attack?
              </h1>
              <span className="relative  left-[20px]">
                <CTAButton
                  buttonText={"Get Started"}
                  hoverText={"Get Started"}
                  route_link={"cybersecurity"}
                />
              </span>
            </div>
            <div className="cyberSecurityImg w-6/12   ">
              <img src={SoarImg1} alt="Cyber Security Image" />
            </div>
          </div>
        </section>

        <section
          style={{ background: "#000819" }}
          className="cyberSecurityApproach text-white"
        >
          <div className="cyberSecurityContainer">
            <div className="cyberSecurityText text-center ">
              <h3 className="text-4xl mb-5">
                How Can <span className=" font-bold">ESDS SOAR</span> Transform
                <br className="hidden lg:block" />
                Your Cybersecurity Approach?
              </h3>
              <p className="text-lg">
                ESDS SOAR solution combines adavanced threat intelligence,
                <br className="hidden lg:block" />
                AI-driven  automation, and real-time collaboration to :
              </p>
            </div>
            <div className="securityGradientCard flex m-auto w-10/12 content-between">
              <div className="securityCard">
                <div className="securityCircle">
                  <h3>Identify Threats</h3>
                </div>
                <div className="securityCardText">
                  <p>early with predictive analysis</p>
                </div>
              </div>
              <div className="securityCard">
                <div className="securityCircle">
                  <h3>Automate responses</h3>
                </div>
                <div className="securityCardText">
                  <p>to minimize human errors and delays</p>
                </div>
              </div>
              <div className="securityCard">
                <div className="securityCircle">
                  <h3>Integrate seamlessly</h3>
                </div>
                <div className="securityCardText">
                  <p>across your security tools for unified protection</p>
                </div>
              </div>
              <div className="securityCard">
                <div className="securityCircle">
                  <h3>Prioritize potential threats</h3>
                </div>
                <div className="securityCardText">
                  <p>for more efficient handling</p>
                </div>
              </div>
              <div className="securityCard">
                <div className="securityCircle">
                  <h3>Respond to threats</h3>
                </div>
                <div className="securityCardText">
                  <p>with precision and speed, ensuring minimal disruption</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SoarServices;

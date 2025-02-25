import React from "react";
import gsap from "gsap";
import "../../css/SoarServices.css";
import Header from "../../Component/CommonComponent/Header";
import BgSoar from "../../assets/images/SoarServices/BgSoar.png";
import SoarImg1 from "../../assets/images/SoarServices/SoarImg1.png";
import ItSecurityImg from "../../assets/images/SoarServices/ItSecurityImg.png";
import CTAButton from "../../Component/CommonComponent/CTAButton";
const SoarServices = () => {

  const liRefs = React.useRef([]);

  React.useEffect(() => {
    const handleScroll = () => {
      liRefs.current.forEach((li) => {
        if (li) {
          const rect = li.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
            gsap.to(li, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
            });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount to check already visible elements

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  React.useLayoutEffect(() => {
    

    let tl1 = gsap.timeline();

    tl1.fromTo(
      ".waveEffect",
      { opacity: 0 },
      {
        scale: 2.5,
        opacity: 0.5,
        duration: 1.5,
        stagger: { each: 0.5, repeat: 1, yoyo: true }, // Creates the ripple effect
        ease: "power2.out",
      }
    );

    // Nest the timeline inside a master timeline
    let masterTl = gsap
      .timeline({
        repeat: -1,
        repeatDelay: 1, // Delay between cycles
      })
      .add(tl1);
  }, []);

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
            <div className="cyberSecurityText text-center mb-5 ">
              <h3 className="text-4xl mb-5">
                How Can <span className=" font-bold">ESDS SOAR</span> Transform
                <br className="hidden lg:block" />
                Your Cybersecurity Approach?
              </h3>
              <p className="text-lg mt-16">
                ESDS SOAR solution combines adavanced threat intelligence,
                <br className="hidden lg:block" />
                AI-driven automation, and real-time collaboration to :
              </p>
            </div>
            <div className="securityGradientCard flex m-auto w-10/12 content-between">
              <div className="securityCard">
                <div className="securityCircle ">
                  <div className="waveEffect"></div>
                  <h3>Identify Threats</h3>
                </div>
                <span className="securityCircleArrow"></span>
                <div className="securityCardText">
                  <p>early with predictive analysis</p>
                </div>
              </div>
              <div className="securityCard">
                <div className="securityCircle">
                  <div className="waveEffect"></div>
                  <h3>Automate responses</h3>
                </div>
                <span className="securityCircleArrow"></span>
                <div className="securityCardText">
                  <p>to minimize human errors and delays</p>
                </div>
              </div>
              <div className="securityCard">
                <div className="securityCircle">
                  <div className="waveEffect"></div>
                  <h3>Integrate seamlessly</h3>
                </div>
                <span className="securityCircleArrow"></span>
                <div className="securityCardText">
                  <p>across your security tools for unified protection</p>
                </div>
              </div>
              <div className="securityCard">
                <div className="securityCircle">
                  <div className="waveEffect"></div>
                  <h3>Prioritize potential threats</h3>
                </div>
                <span className="securityCircleArrow"></span>
                <div className="securityCardText">
                  <p>for more efficient handling</p>
                </div>
              </div>
              <div className="securityCard">
                <div className="securityCircle">
                  <div className="waveEffect"></div>
                  <h3>Respond to threats</h3>
                </div>
                <span className="securityCircleArrow"></span>
                <div className="securityCardText">
                  <p>with precision and speed, ensuring minimal disruption</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="itSecuritySection" style={{ background: "#000819" }}>
          <div className="itSecurityContainer">
            <div className="itSecurityImageText">
                  <div className="itSecurityText">
                    <h3 className="text-white text-4xl">Why Trust ESDS for your IT security</h3>
                    <p className="text-customBlue">We are revolutionizing the IT Cybersecurity landscape by delivering:</p>
                  </div>
                  <div className="itSecurityImage">
                    <img src={ItSecurityImg} alt="IT Cyber Security" />
                  </div>
            </div>
            <div className="itSecurityDescription text-white">
              <ul>
              {[
                  "ESDS is Amongst India's top 3 commercial Tier III Compliant DCs...",
                  "ESDS powers the world’s No.1 website by unique daily visitors...",
                  "Extensive experience managing IT Security for 500+ clients...",
                  "227,273+ Security scans performed to ensure optimal security posture...",
                  "1,000,000+ Websites scanned to identify vulnerabilities and threats...",
                  "Offers actionable intelligence, hybrid remediation services...",
                  "122,000+ Monthly alerts triggered, ensuring timely threat detection...",
                  "ESDS plays a pivotal role in consulting, monitoring, detecting, and protecting critical IT assets..."
                ].map((text, index) => (
                  <li
                    key={index}
                    ref={(el) => (liRefs.current[index] = el)}
                    className="opacity-0 translate-y-10 transition-all duration-1000"
                  >
                    {text}
                  </li>
                ))}
              </ul>
              <span><CTAButton buttonText={"Get Started"} hoverText={"Get Started"}/></span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SoarServices;

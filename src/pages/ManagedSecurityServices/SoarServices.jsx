import React,{useRef,useLayoutEffect} from "react";
import {Link} from "react-router-dom"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/SoarServices.css";
import Header from "../../Component/CommonComponent/Header";
import BgSoar from "../../assets/images/SoarServices/BgSoar.png";
import SoarImg1 from "../../assets/images/SoarServices/SoarImg1.png";
import ItSecurityImg from "../../assets/images/SoarServices/ItSecurityImg.png";
import CTAButton from "../../Component/CommonComponent/CTAButton";
import { ArrowUpRight } from "lucide-react";
import DYK from "../../assets/images/SoarServices/DYK.png";
import easyPay from "../../assets/images/SoarServices/easyPay.png";
import eMudra from "../../assets/images/SoarServices/eMudra.png";
import sidbi from "../../assets/images/SoarServices/sidbi.png";
import siem from "../../assets/images/SoarServices/siem.svg";
import threatDetection from "../../assets/images/SoarServices/threatDetection.svg";
import msirm from "../../assets/images/SoarServices/msirm.svg";
import securityOperation from "../../assets/images/SoarServices/securityOperation.svg";
import managedSecurity from "../../assets/images/SoarServices/managedSecurity.svg";
import Footer from "../../Component/CommonComponent/Footer";

gsap.registerPlugin(ScrollTrigger);

const SoarServices = () => {
  const liRefs = React.useRef([]);

  React.useLayoutEffect(() => {
    gsap.fromTo(
      liRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2, // Creates a delay between animations
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".itSecurityDescription ul",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart none none none",
        },
      }
    );
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

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // Add cards to the ref array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el) && el.classList.contains('managedSecurityOrchestrationCard')) {
      cardsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    // Store context to easily kill animations on unmount
    let ctx = gsap.context(() => {
      // Clear any existing ScrollTriggers
      // ScrollTrigger.getAll().forEach(st => st.kill());
      
      // Reset card refs array for potential re-renders
      cardsRef.current = cardsRef.current.slice(0, 5);
      
      // Initial setup - make sure cards are visible but styled
      cardsRef.current.forEach((card, i) => {
        gsap.set(card, {
          transformOrigin: "top center",
          scale: 0.8,
          opacity: 0,
          y: 50
        });
      });
      
      // Create a separate animation for each card that triggers when the card comes into view
      cardsRef.current.forEach((card, i) => {
        gsap.to(card, {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Starts animation when card is 80% from the top of the viewport
            end: "bottom 20%",
            toggleActions: "play none none reverse", // play on enter, reverse on leave
            markers: false // Remove in production
          }
        });
        
        // Add perspective effect as you scroll
        gsap.to(card, {
          rotationX: i % 2 === 0 ? 10 : -10, // Alternate rotation directions
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1, // Smooth scrubbing effect
          }
        });
      });
      
      // Add hover effects
      cardsRef.current.forEach(card => {
        card.addEventListener("mouseenter", function() {
          gsap.to(this, {
            scale: 1.05,
            rotationX: 0, // Reset rotation on hover
            // boxShadow: "0 0 35px rgba(0, 194, 255, 0.5)",
            duration: 0.3,
            ease: "power1.out",
            zIndex: 10
          });
        });
        
        card.addEventListener("mouseleave", function() {
          gsap.to(this, {
            scale: 1,
            // boxShadow: "0 0 25px rgba(0, 132, 255, 0.3)",
            duration: 0.3,
            ease: "power1.in",
            zIndex: 1
          });
        });
      });
    }, sectionRef);
    
    // Cleanup function
    return () => {
      ctx.revert(); // This will clean up all GSAP animations created by this context
    };
  }, []); // Empty dependency array means it runs once after mount

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
          style={{ background: "#00000b" }}
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
          style={{ background: "#00000b" }}
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

        <section
          className="itSecuritySection"
          style={{ background: "#00000b" }}
        >
          <div className="itSecurityContainer">
            <div className="itSecurityImageText">
              <div className="itSecurityText">
                <h3 className="text-white text-4xl">
                  Why Trust ESDS for your IT security
                </h3>
                <p className="text-customBlue">
                  We are revolutionizing the IT Cybersecurity landscape by
                  delivering:
                </p>
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
                  "ESDS plays a pivotal role in consulting, monitoring, detecting, and protecting critical IT assets...",
                ].map((text, index) => (
                  <li key={index} ref={(el) => (liRefs.current[index] = el)}>
                    {text}
                  </li>
                ))}
              </ul>
              <span>
                <CTAButton
                  buttonText={"Get Started"}
                  hoverText={"Get Started"}
                />
              </span>
            </div>
          </div>
        </section>

        <section className="doUKnowSection" style={{ background: "#00000b" }}>
          <div className="doUKnowImg">
            <img src={DYK} alt="Did you know" />
            <div className="dukAchivements mb-7 mt-5 text-white whitespace-pre-line m-auto w-8/12 text-center text-lg ">
              ESDS secures the 450+ banks of India and monitors critical IT
              assets for over 500 + clients,
              <br className="hidden lg:block" />
              including managing government entities and 50 of India’s Fortune
              500 companies.
            </div>
          </div>

          <div className="dukInfo flex flex-row ">
            <div className="dukInfoText  w-6/12">
              <span className="text-white text-2xl">
                A Trusted Choice <br className="hidden lg:block" />
                for Leading Organizations
              </span>
              <br className="hidden lg:block" />
              <span className="text-[#00a3ff] font-bold  m-auto  text-center text-lg">
                Our IT Security solutions are trusted{" "}
                <br className="hidden lg:block" />
                by top banks, government agencies,
                <br className="hidden lg:block" /> and enterprises across India.
              </span>
            </div>
            <div className="dukInfoCardContainer w-6/12 flex">
              <div className="dukInfoCard w-6/12">
                <div className="dukInfoCircle">
                  <span className="text-white logoSpan">
                    <img src={easyPay} alt="easyPay" />
                  </span>
                </div>
                <div className="dukInfoCircleText text-white">
                  <p>
                    EasyPay leverages IT security services to secure
                    unpredictable digital transactions.
                  </p>
                </div>
              </div>
              <div className="dukInfoCard w-6/12">
                <div className="dukInfoCircle">
                  <span className="text-white logoSpan">
                    <img src={eMudra} alt="eMudra" />
                  </span>
                </div>
                <div className="dukInfoCircleText text-white">
                  <p>
                    EasyPay leverages IT security services to secure
                    unpredictable digital transactions.
                  </p>
                </div>
              </div>
              <div className="dukInfoCard w-6/12">
                <div className="dukInfoCircle">
                  <span className="text-white logoSpan">
                    <img src={sidbi} alt="sidbi" />
                  </span>
                </div>
                <div className="dukInfoCircleText text-white">
                  <p>
                    EasyPay leverages IT security services to secure
                    unpredictable digital transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="managedSecurityOrchestration"
          style={{ background: "#00000b" }}
          ref={sectionRef}
        >
          <div className="managedSecurityOrchestrationHeadText text-center mb-5">
            <h3 className="text-4xl text-white">
              ESDS Comprehensive{" "}
              <span className="font-bold">
                Managed Security Orchestration{" "}
                <br className="hidden lg:block" />
                Automation and Response
              </span>{" "}
              (SOAR) Offerings -
            </h3>
          </div>
          <div ref={containerRef} className="managedSecurityOrchestrationContainer ">
            <div ref={addToRefs} className="managedSecurityOrchestrationCard">
              <span className="cardImg">
                <img src={siem} alt="card" />
              </span>
              <div className="card">
                <h4>SIEM Integration:</h4>
                <p>
                  SOAR integrates with your SIEM platform for continuous,
                  real-time threat detection and incident management.
                </p>
              </div>
            </div>
            <div ref={addToRefs} className="managedSecurityOrchestrationCard">
              <span className="cardImg">
                <img src={threatDetection} alt="card" />
              </span>
              <div className="card">
                <h4>Advanced Threat Detection:</h4>
                <p>
                  SOAR integrates with intelligent threat-hunting tools to
                  automatically detect and respond to complex threats.
                </p>
              </div>
            </div>
            <div ref={addToRefs} className="managedSecurityOrchestrationCard">
              <span className="cardImg">
                <img src={msirm} alt="card" />
              </span>
              <div className="card">
                <h4>Managed Security & Incident Response Management:</h4>
                <p>
                  SOAR integrates with your SIEM platform for continuous,
                  real-time threat detection and incident management.
                </p>
              </div>
            </div>
            <div ref={addToRefs} className="managedSecurityOrchestrationCard">
              <span className="cardImg">
                <img src={securityOperation} alt="card" />
              </span>
              <div className="card">
                <h4>Security Operations Automation:</h4>
                <p>
                  Automate common security tasks like log collection, threat
                  analysis, and breach audits with custom playbooks.
                </p>
              </div>
            </div>
            <div ref={addToRefs} className="managedSecurityOrchestrationCard">
              <span className="cardImg">
                <img src={managedSecurity} alt="card" />
              </span>
              <div className="card">
                <h4>Managed Security Orchestration:</h4>
                <p>
                  SOAR integrates diverse security tools and technologies into
                  one unified platform for streamlined operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="leadingOrganization"
          style={{ background: "#00000b" }}
        >
          <div className="leadingOrganizationContainer text-white py-16 mx-auto px-4 max-w-6xl">
            <div className="leadingOrganizationHeader">
              <h2 className="text-4xl font-light text-center mb-8">
                A Trusted <span className="font-bold">Choice for Leading</span>{" "}
                Organizations
              </h2>

              <p className="text-center mb-14">
                Our IT Security solutions are trusted by top banks, government
                agencies, and enterprises across India.
              </p>
            </div>

            <div className="leadingOrganizationInfo space-y-6 mb-16">
              <div className="leadingOrganization1 flex items-center justify-between border-b border-gray-700 pb-5">
                <div className="leadingOrganizationSection1 flex items-center gap-6">
                  <img src={easyPay} alt="EasyPay Logo" className="h-10" />
                  <p>
                    <span className="text-cyan-400 font-medium">EasyPay</span>{" "}
                    Leverages IT Security Services To Secure Unpredictable
                    Digital Transactions.
                  </p>
                </div>
                 <Link to="">
                 <ArrowUpRight className=" leadingOrganizationSection1 text-white h-6 w-6" />
                 </Link> 
              </div>

              <div className="leadingOrganization2 flex items-center justify-between border-b border-gray-700 pb-5">
                <div className="leadingOrganizationSection1 flex items-center gap-6">
                  <img src={eMudra} alt="MUDRA Logo" className="h-12" />
                  <p>
                    <span className="text-cyan-400 font-medium">MUDRA</span>{" "}
                    Relies On ESDS For Exclusive Security Solutions.
                  </p>
                </div>
                <ArrowUpRight className="leadingOrganizationSection2 text-white h-6 w-6" />
              </div>

              <div className="leadingOrganization3 flex items-center justify-between border-b border-gray-700 pb-5">
                <div className="leadingOrganizationSection1 flex items-center gap-6">
                  <img src={sidbi} alt="SIDBI Logo" className="h-10" />
                  <p>
                    <span className="text-cyan-400 font-medium">SIDBI</span>{" "}
                    Partners With ESDS For Faster Threat Detection And Response.
                  </p>
                </div>
                <ArrowUpRight className="leadingOrganizationSection2 text-white h-6 w-6" />
              </div>
            </div>

            <div className="leadingOrganisationFooter text-center">
              <h3 className="text-3xl font-light mb-4">
                The Real-World Impact of{" "}
                <span className="font-bold">
                  ESDS Government
                  <br />
                  Community Cloud
                </span>
              </h3>
            </div>
          </div>
        </section>
        <Footer BgColor={"#00000b"} />
      </div>
    </>
  );
};

export default SoarServices;

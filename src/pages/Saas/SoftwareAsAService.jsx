import './softwareAsService.css'
import Slider from "react-slick";
import banner from '../../assets/images/Saas/Banner.jpg'
import HeadingAnimation from '../../Component/HeadingAnimation/HeadingAnimation'
import transformation from '../../assets/images/Saas/transformation-img.png'
import famrut from '../../assets/images/Saas/famrut-img.png'
import LCM from '../../assets/images/Saas/LCM-img.png'
import infra_img from '../../assets/images/Saas/infra-img.png'
import IPAS from '../../assets/images/Saas/IPAS-img.png'
import underline from '../../assets/images/Saas/underline.svg'
import grad_line from '../../assets/images/Saas/line.svg'
import Header from '../../Component/CommonComponent/Header'
import CTAButton from '../../Component/CommonComponent/CTAButton'
import CountUp from 'react-countup';
import Partner from '../../Component/CommonComponent/Partner';
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import FooterTopsection from '../../Component/CommonComponent/FooterTopsection';
import { useState } from 'react';
import logo1 from '../../assets/images/partners/partner1.png'
import logo2 from '../../assets/images/partners/partner2.png'
import logo3 from '../../assets/images/partners/partner3.png'
import logo4 from '../../assets/images/partners/partner4.png'
import logo5 from '../../assets/images/partners/partner5.png'
import logo6 from '../../assets/images/partners/partner6.png'
import Footer from '../../Component/CommonComponent/Footer';


export default function SoftwareSolution() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows : false
      };
      let logoArray = [logo1, logo2,logo3, logo4,logo5, logo6,logo3, logo4]
      let [counter, setcounter] = useState(false)
      useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        let t2 = gsap.timeline({
            scrollTrigger : {
                trigger : ".revolution-impact",
                start : "top 50%",
                end: "top top",
                onEnter: () => {
                    setcounter(true)
                }
            } 
        })
      },[])
    return(
        <div>
            <Header />
              <section className=" Saas_banner">
                <img className="banner_img" src={banner} alt="saas-banner" />
                <div className="saas_container">
                    <div className="saasPageCss heading">
                       <div className="underline_overflow">
                       <svg width="221" height="45" viewBox="0 0 221 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M221 15.2854C131.721 -13.7817 37.6122 5.19267 1.71781 18.3133" stroke="url(#paint0_linear_2258_10798)" stroke-width="7" fill="none"><animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="2s" fill="freeze"></animate></path><defs><linearGradient id="paint0_linear_2258_10798" x1="0" y1="13.5" x2="221" y2="13.5" gradientUnits="userSpaceOnUse"><stop stop-color="#00E6FF"></stop><stop offset="1" stop-color="#0066FF"></stop></linearGradient></defs></svg>
                       </div>
                        <HeadingAnimation ArrayText={[
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
                        
                            ]} classNameOfHead={"Saas_banner_head"}/>
                    </div>
                    <div className="saas_cta">
                       <CTAButton buttonText={"Unlock Your Potential NOW"} hoverText={"Unlock Your Potential NOW"} route_link={"contact-us"} />
                    </div>  
                </div>
            </section>
            <section className="section-container indian_saas">
                <div className="saas_second_container">
                    <div className="heading_link">
                        <h3 className="saas_header">The Indian SaaS Market Is On The Charge</h3>
                        <p>Are you aware of recent revolution in the SaaS industry?
                        </p>
                        <p> The recent numbers in 2024 reveal that over 70% of Indian businesses are exploring or adopting SaaS solutions to streamline operations.</p>
                    
                        <div className="india_cta">
                            <CTAButton buttonText={"Tap Into Growth"} hoverText={"Tap Into Growth"} route_link={"contact-us"} />
                        </div>
                    </div>
                    <div className="booming_market">
                        <div className="outline_box1">
                            <div className="booming_box">
                            The booming market is projected to grow to a staggering <span>$50</span> billion by 2030.
                            </div>
                        </div>
                        <div className="empty_outline">

                        </div>
                        <div className="outline_box2">
                            <div className="buisness_box">
                            Businesses leveraging AI powered SaaS solutions, have shown a <span>70%</span> reduction in repetitive tasks, <span>20%</span> increase in decision-making accuracy, and a <span>40%</span> improvement in customer satisfaction.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="product-slider" className=" section-container product-slider">
                <div className="heading">
                    <h3 className="saas-header">What Does This Mean For Your <span>Business?<img src={underline} alt="underline" /></span> </h3>

                    <h4>Bring a whole new level of efficiency, productivity, and customer satisfaction with SaaS solutions </h4>
                </div>
                <div className="product-container">
                    <Slider {...settings}>
                        <div className="prod-slides">
                            <div className="slide-container">
                                <div className="famrut-img">
                                    <img src={famrut} alt="Famrut" />
                                </div>
                                <div className="famrut-description">
                                    <h3 className="">Empowering You, Revolutionizing Your Farming Experience.</h3>
                                    <h5>Digitalizing Indian Farming inside out</h5>
                                    <p>At Famrut, our focus is completely on digitally overhauling the Indian farming industry. Bringing the farmer at the forefront of digitally transforming Indian Farming. Our purpose is to empower and foster a sustainable future for Indian agriculture.</p>
                                    <div className="CTA-btn">
                                        <button onClick={() => { navigate('/contact-us') }} className="CTA-button" data-text="Awesome">
                                            <span className="actual-text">&nbsp;Discover Now&nbsp;</span>
                                            <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(93deg, rgba(243,247,29,1) 0%, rgba(82,202,0,1) 100%)", WebkitTextStroke: "1px transparent", fontWeight: "600", borderRight: "6px solid rgba(82,202,0,1)" }} aria-hidden="true" className="hover-text">&nbsp;Discover&nbsp;Now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="prod-slides">
                            <div className="slide-container">

                                <div className="LCM-description">
                                    <h3 className="">The BEST Enterprise-Grade Low Code Platform.</h3>
                                    <h5>Crafting the Future of Innovation</h5>
                                    <p>Low Code Magic offers a powerful set of features designed to revolutionize the way you approach application development. With our platform, you can create robust, scalable, and user-friendly applications while simplifying the development process.</p>
                                    <div className="CTA-btn">
                                        <button onClick={() => { navigate('/contact-us') }} className="CTA-button" data-text="Awesome">
                                            <span className="actual-text">&nbsp;Discover Now&nbsp;</span>
                                            <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(93deg, rgba(128,43,236,1) 0%, rgba(247,102,224,1) 100%)", WebkitTextStroke: "1px transparent", fontWeight: "600", borderRight: "6px solid rgba(128,43,236,1)" }} aria-hidden="true" className="hover-text">&nbsp;Discover&nbsp;Now</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="LCM-img">
                                    <img src={LCM} alt="LCM" />
                                </div>
                            </div>

                        </div>
                        <div className="prod-slides">
                            <div className="slide-container">
                                <div className="IPAS-img">
                                    <img src={IPAS} alt="IPAS" />
                                </div>
                                <div className="IPAS-description">
                                    <h3 className="">Your All in One Project Management Solution </h3>
                                    <h5>Experience Efficiency and Mobility with iPAS</h5>
                                    <p>With iPAS, our mission is to create an innovative and intelligent project management solution that revolutionizes how governments and organizations operate, communicate with people, and deliver services.</p>
                                    <div className="CTA-btn">
                                        <button onClick={() => { navigate('/contact-us') }} className="CTA-button" data-text="Awesome">
                                            <span className="actual-text">&nbsp;Discover Now&nbsp;</span>
                                            <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(93deg, rgba(0,125,216,1) 0%, rgba(0,209,255,1) 100%)", WebkitTextStroke: "1px transparent", fontWeight: "600", borderRight: "6px solid rgba(0,125,216,1)" }} aria-hidden="true" className="hover-text">&nbsp;Discover&nbsp;Now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Slider>
                </div>
            </section>
            <section id="Infra-product" className="section-container Infra-product">
                <div className="infra-container">
                    <h3 className="saas-header">Infra Products</h3>
                    <div className="center-img">
                        <div>
                            <img src={infra_img} alt="Infra Product" />
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <img src={grad_line} alt="gradient-line" />
                            <h4>eNlight 360</h4>
                            <h5>Private Cloud Orchestration</h5>
                            <p>Hand your business a superpower when it comes to IT operations and Infrastructure Management capabilities.</p>
                        </div>
                        <div className="card">
                        <h4>eNlight WAF</h4>
                            <h5>Web Application Firewall</h5>
                            <p>Specially engineered intelligent Cloud Hosted Web Application Firewall to filter web traffic, block threats and attacks of the OWASP Top 10.</p>
                        </div>
                        <div className="card">
                        <img src={grad_line} alt="gradient-line" />
                        <h4>VTM Scan</h4>
                            <h5>Web Vulnerability Scanner</h5>
                            <p>Supercharge your website's security with the best vulnerability scanner offering malware and security threat detection in advance.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-container saas-transformation">
                    <div className="transformation-container">
                        <div className="heading">
                        <h2 className="saas-header">What Transformation Can SaaS Bring To Your <span>Business? <img src={underline} alt="underline" /></span></h2>
                       
                        </div>
                      
                        <div className="transformations-split">
                            <div className="img-div">
                                <img src={transformation} alt="saas-transformation" />
                            </div>
                            <div className="transf-text">
                                <div className="">
                                    <h4>Reduce Costs</h4>
                                    <p>Replacing your legacy applications with SaaS solutions can lead to substantial cost savings by removing the need for upfront purchase or installation fees, as well as ongoing maintenance.</p>
                                </div>
                                <div className="">
                                    <h4>Seamless Availability & Scalability</h4>
                                    <p>SaaS provides secure, scalable, and reliable access to your applications, ensuring they are always available. This enhances productivity across your organization.</p>
                                </div>
                                <div className="">
                                    <h4>Faster Time to Benefit & Higher User Adoption</h4>
                                    <p>Once activated, end users can immediately access the SaaS application and start reaping its benefits. The ease of use promotes quicker adoption and increased user engagement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <section className="revolution-impact">
                <div className="revolution-conatiner">
                    <div className="heading">
                        <h3 className="saas-header">We're leading a Revolution In Impact. <span> Be a Part Of It <img src={underline} alt="underline" /></span></h3> 
                    </div>
                    <div className="text-counter">
                        <div className='revolution-counter'>
                            <span>{counter ? <CountUp duration={5} end={154000} />: <span>0</span> }  +</span>
                            <p>Indian citizens impacted through iPAS - project management solution</p>
                        </div>
                        <div className='revolution-counter'>
                            <span>{counter ? <CountUp duration={5} end={9000} /> : <span>0</span> } +</span>
                            <p>Projects monitored through iPAS - project management solution</p>
                        </div>
                        <div className="revolution-counter">
                            <span>{counter ? <CountUp duration={5} end={1000} /> : <span>0</span>} +</span>
                            <p>Works verified monthly through iPAS - project management solution </p>
                        </div>
                        <div className='revolution-counter'>
                            <span>{counter ? <CountUp duration={5} end={25000} /> : <span>0</span>}+</span>
                            <p>VM’s managed on eNlight 360 IT infra management tool </p>
                        </div>
                        <div className="revolution-counter">
                            <span>{counter ? <CountUp duration={5} end={85000} /> : <span>0</span>} +</span>
                            <p>Devices monitored on eNlight 360 with our IT infra management tool </p>
                        </div>
                        <div className='revolution-counter'>
                            <span>{counter ? <CountUp duration={5} end={227273} /> : <span>0</span>} +</span>
                            <p>Scans performed on VTM scan website scanner </p>
                        </div>
                        <div className='revolution-counter'>
                            <span> {counter ? <CountUp duration={5} end={766744} /> : <span>0</span>}+</span>
                            <p>Vulnerabilities detected on VTM Scan website scanner</p>
                        </div>
                        <div className='revolution-counter'>
                            <span> {counter ? <CountUp duration={5} end={1000000} /> : <span>0</span>}+</span>
                            <p>Websites Scanned on VTM Scan website scanner </p>
                        </div>
                    </div>
                </div>
            </section>
            <Partner logosArray={logoArray} PartnerTitle={"Building Trust Across The Board"} colors={"#000"}  />
            <FooterTopsection question={"Want To Experience A Similar Transformation In Your Business?"} answers={"Join the revolution and unlock yours."} />
            <Footer BgColor={"#000"} />
        </div>
    )
}

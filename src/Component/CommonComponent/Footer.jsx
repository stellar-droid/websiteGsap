
import { Link } from "react-router-dom";
import { IoIosArrowRoundUp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './Footer.css'
import footeresds from '../../assets/images/Footer/footer-ESDS.svg'


export default function Footer({BgColor}) {
    let bgcolor= BgColor.toString()
    const email = 'getintouch@esds.co.in';
    const number = '1800-209-3006'
//on click copy functionality of email and number 
  const handleCopy = (e,title) => {
    navigator.clipboard.writeText(title).then(() => {
        e.target.lastElementChild.style.opacity = 1
    setTimeout(() => {
        e.target.lastElementChild.style.opacity = 0
    }, 2000);
    //   alert('Email copied to clipboard!');
    }).catch(err => {
    //   console.error('Failed to copy: ', err);
    });
  };

    return (
    
            <section style={{background : bgcolor}} className="footer-final">
                <div className="footer-final-container">
                    <div className="left-side">
                        <div className="social-contact">
                            <div className="mail-number">
                                <p onClick={(event) => {handleCopy(event,email)}}>getintouch@esds.co.in <span>Email Copied</span></p>
                                <p onClick={(event) => {handleCopy(event,number)}}>1800-209-3006 <span>Number Copied</span></p>
                            </div>
                            <div className="social-icon">
                              <Link target="_blank" to={"https://www.youtube.com/@esdsdc"}><span><FaYoutube /></span></Link>
                              <Link target="_blank" to={"https://www.instagram.com/esds.dc?igsh=NnQ4b2V4NmhuYWxu"}> <span><FaInstagram /></span></Link>
                              <Link target="_blank" to={"https://x.com/esdsdatacenter"}> <span><FaXTwitter /></span></Link>
                              <Link target="_blank" to={"https://www.linkedin.com/company/esdsdc/"}> <span><FaLinkedinIn /></span> </Link>
                              <Link target="_blank" to={"https://www.facebook.com/ESDSdc"}>  <span><FaFacebookF /></span></Link>
                            </div>
                        </div>

                        <div className="ESDS-title">
                           <img src={footeresds} alt="ESDS" />
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="innerpage-link">
                            <Link to={'/cloud-services'}>Cloud Services</Link>
                            <Link to={'/colocation-data-centre-services'}>Colocation Services</Link>
                            <Link to={'/software-as-a-service'}>SaaS</Link>
                            <Link to={'/managed-services'}>Managed Services</Link>
                            <Link to={'/soc-as-a-service'}>Managed Security Services</Link>
                            <Link to={'/platform-as-a-service'}>PaaS</Link>
                            <Link target="_blank" to={'https://esds.co.in/esds-peoples/careers/'}>Careers</Link>
                            <Link target="_blank" to={'https://esds.co.in/esds-peoples/news-events/'}>News & Events</Link>
                            <Link to={'/about-esds'}>About</Link>
                        </div>
                        <div className="contact-number">
                            <div className="india">
                                <h5>India</h5>
                                <p>+91-7030-365-247</p>
                                <p>+91-(253)-711-2233</p>
                            </div>
                            <div className="united-kingdom">
                                <h5>United Kingdom</h5>
                                <p>+44-2034-576-776</p>
                            </div>
                            <div className="United States">
                                <h5>United States</h5>
                                <p>+1-8443-245-054</p>
                            </div>
                        </div>
                        <div className="last-link">
                            <Link target="_blank" to={"https://www.esds.co.in/sitemap"}>Sitemap</Link>
                            <Link target="_blank" to={"https://www.esds.co.in/service-level-agreement"}>Legal</Link>
                            <Link target="_blank" to={"https://www.esds.co.in/cookie-policy"}>Cookies</Link>
                            <Link target="_blank" to={"https://www.esds.co.in/support"}>Support</Link>
                            <span>
                                <svg width="calc(clamp(1.875rem, 3.356vw - 0.277rem, 3.75rem))" height="calc(clamp(1.875rem, 3.356vw - 0.277rem, 3.75rem))" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M33.2259 26.4807L33.2584 27.1966H33.9751H38.9478H39.7304L39.6971 26.4148C39.6383 25.0325 39.3724 23.7448 38.8574 22.5633C38.3493 21.3976 37.6543 20.365 36.737 19.5089C35.8262 18.6588 34.7408 17.9985 33.492 17.5228C32.221 17.0386 30.8488 16.8347 29.3636 16.8347C27.4758 16.8347 25.7755 17.154 24.3168 17.8529C22.8977 18.5329 21.6947 19.4305 20.7275 20.6093C19.7735 21.772 19.059 23.1134 18.6143 24.6553C18.1809 26.1576 17.9182 27.728 17.9182 29.4191V30.1692C17.9182 31.8516 18.1505 33.4217 18.5865 34.933C19.031 36.4739 19.746 37.8189 20.7058 38.9586C21.6654 40.0981 22.8655 41.0275 24.3007 41.6853C25.7456 42.3476 27.438 42.698 29.3358 42.698C30.7283 42.698 32.038 42.4607 33.2605 42.0134C34.4802 41.5672 35.5611 40.9385 36.4956 40.1245C37.4221 39.3176 38.1809 38.3804 38.7296 37.283C39.2705 36.2013 39.6111 35.0379 39.642 33.7712L39.6607 33.0029H38.8922H33.9195H33.2044L33.1704 33.7172C33.1475 34.1978 33.0347 34.6234 32.832 35.0287C32.629 35.4347 32.3589 35.7742 32.0115 36.0752C31.6664 36.3744 31.2767 36.6043 30.8104 36.7675L30.8104 36.7674L30.7989 36.7717C30.3905 36.9221 29.9387 36.9753 29.3842 37.0027C28.473 36.9742 27.803 36.7954 27.3286 36.486L27.3232 36.4826C26.7285 36.1019 26.2605 35.6081 25.9343 35.0254C25.5874 34.4061 25.3128 33.6584 25.188 32.8349C25.0537 31.9484 24.9742 31.0419 24.9742 30.1692V29.4191C24.9742 28.4909 25.0537 27.6122 25.188 26.7257C25.312 25.9073 25.5847 25.1871 25.9343 24.5629C26.2599 23.9814 26.7267 23.4883 27.3198 23.108C27.8282 22.7913 28.5059 22.6138 29.4406 22.5856C29.9986 22.6122 30.4792 22.7092 30.8978 22.884C31.3787 23.1016 31.7876 23.3805 32.0934 23.7081C32.412 24.0495 32.6762 24.4742 32.9022 24.9765C33.1026 25.4218 33.201 25.9337 33.2259 26.4807ZM29.7803 1.25C14.0314 1.25 1.25 14.0314 1.25 29.7803C1.25 45.5292 14.0314 58.3106 29.7803 58.3106C45.5292 58.3106 58.3106 45.5292 58.3106 29.7803C58.3106 14.0314 45.5292 1.25 29.7803 1.25ZM29.7803 51.2545C17.9434 51.2545 8.30606 41.6172 8.30606 29.7803C8.30606 17.9434 17.9434 8.30606 29.7803 8.30606C41.6172 8.30606 51.2545 17.9434 51.2545 29.7803C51.2545 41.6172 41.6172 51.2545 29.7803 51.2545Z" stroke="white" strokeWidth="1.5" />
                                </svg>

                              <span>2024</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
      
    )
}
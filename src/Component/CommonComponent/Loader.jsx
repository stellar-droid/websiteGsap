
import gsap from "gsap"
import { CSSRulePlugin, CustomEase } from "gsap/all"
import { useLayoutEffect } from "react"

export default function Loader() {
    useLayoutEffect(() => {
        gsap.registerPlugin(CustomEase)
        CustomEase.create(
            "cloudSplash",
            "0.445, 0.05, 0.55, 0.95"
          );
          CustomEase.create(
            "zoomText",
            "0.23, 1, 0.32, 1"
          );
          
        
          gsap.to('.loader_name', { delay: 0.25, x: 0, duration: 0.9, ease : "zoomText"});
          gsap.to('.loader_name', { delay: 1.5, color: "#fff", duration: 1.1, ease : "cloudSplash"});
          gsap.to('.overflow-div', {delay: 2.5, scale: 1.8, duration :0.85, ease : "zoomText" })
          gsap.to(".background-before", { delay : 3, rotate: "-5deg", y: "-100vw", duration : 1.8, ease : "power3.inOut"})
          gsap.to(".loader_mss", { delay : 3.5, opacity : 0 , duration : 0.8, ease : "power2.inOut"})
    },[])

    return(
        <div>
            <div className="loader_mss">
                {/* <div className="cloudshape_neumor">

                </div> */}
                <div className="background-before">

                </div>
                <div className="hello_text">
                   <div className="overflow-div"> <p className="esds_name loader_name">Namaste</p></div>
                   <div className="overflow-div"> <p className="esds_name loader_name">Bonjour</p></div>
                   <div className="overflow-div"> <p className="esds_name2 loader_name">Ciao</p></div>
                   <div className="overflow-div"> <p className="esds_name3 loader_name">Olá</p></div>
                </div>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom";
import "../../css/CTAButton.css"
export default function CTAButton({buttonText, hoverText, route_link,color="#00d9ff"}) {
    const formattedHoverText = hoverText.split(' ').join('&nbsp;');
    return(
        <Link to={`/${route_link}`}>
            <button className="CTA-button" style={{"--btn-color":`${color}`}} data-text="Awesome">
                <span className="actual-text">&nbsp;{buttonText}&nbsp;</span>
                <span
          aria-hidden="true"
          className="hover-text"
          dangerouslySetInnerHTML={{
            __html: `&nbsp;${formattedHoverText}&nbsp;`,
          }}
        ></span>
            </button>
            </Link>
    )
}
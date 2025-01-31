
import './FooterTopsection.css'
import CTAButton from './CTAButton'

export default function FooterTopsection({question, answers, CTA, color, MSS, answer1, answer2}) {
   
    return(
      
            <section style={{background : color}} className="question-answer">

                <div className="question">{question}</div>
               { MSS ? <div className="two-answer"> <span className="textCenter" style={{color:"#f66b6b"}}>{answer1}</span> <span> <button onClick={() => { navigate("/contact-us") }} className="CTA-button" data-text="Awesome">
                            <span className="actual-text">&nbsp;Secure Your Zone Today&nbsp;</span>
                            <span aria-hidden="true" className="hover-text">&nbsp;Secure&nbsp;your&nbsp;Zone&nbsp;Today</span>
                        </button></span></div> : <div className="answer">{answers}</div>}
               {
                MSS ? "" : <div className="QNA-CTA">
                
        <CTAButton buttonText={"Connect Now"} hoverText={"Connect Now"} route_link={"contact-us"} />
               
        </div>
               }
            </section>
     
    )
}
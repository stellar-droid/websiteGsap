
import './Partner.css'

export default function Partner({PartnerTitle, colors, logosArray}) {
 
    return (
       <section style={{background: colors}} className="partner">
       {PartnerTitle ?  <h3 className="partner-heading">{PartnerTitle}</h3> : ""}
       <div className="bg_gradient"></div>
       <section className="wrapper">
       
                    {
                        logosArray.map((logo, index) => {
                            return (
                                <div className={`item item${index}`} key={index}><img src={logo} alt={logo} /></div>
                            )
                        })
                    }
                </section>
       </section>
    )
}
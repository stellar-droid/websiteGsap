import Styles from './SuccesStories.css'
import { GoArrowUpRight } from "react-icons/go";
import { useState } from 'react';
import SuccessStoriesForm from './SuccessStoriesForm'
import HeadingBottomLine from '../Text animation/HeadingBottomLine';

export default function SuccessStories({SuccesStoriesTitle, CaseStudiesArray, isImagePresent,typeOfCase, color}) {
    
    const [caseStudyId, setCaseStudyId] = useState('');
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleOpen  = (id) => {
        console.log('link', id)
        setCaseStudyId(id)
        setOpen(true);
    };

    return (
        <section style={{background : color}} className={Styles.banking_reimagined}>
                <div className={Styles.heading}>
                    <h3>{SuccesStoriesTitle}</h3>
                 
                </div>
                <div className={Styles.bank_reimagined_list}>
                    {
                        CaseStudiesArray.map((cases,index) => {
                            return (
                                <div className={Styles.BR_list} id={cases.id} onClick={() => handleOpen(cases.id)}>
                               {isImagePresent ?  <div className={Styles.bank1_img}>
                                    <img src={cases.image} alt='case study ' />
                                </div> : null}
                                <div className={Styles.list_content}>
                                    <div>
                                    <p><span>{cases.name}</span></p>
                                    <p>{cases.description}</p>
                                    </div>                             
                                    <span className={Styles.arrow}> <GoArrowUpRight /></span>
                                </div>
                                
                            </div>
                            )
                        })
                    }
                        
                       
                </div>
                <SuccessStoriesForm isOpen={open} onClose={handleClose} caseStudyId={caseStudyId} type={typeOfCase} />
            </section>
           
    )
}

import { useState } from "react"
import CountUp from "react-countup"
export default function CounterComponent({managedCounterArray}) {
    let [countNumber, setcountNumber] = useState(true)
    
    return (
       
    managedCounterArray.map((element, index) => (
            <div className={styles.counter_div} key={index}>
                <div className={styles.numbers}>
                    {countNumber ? <CountUp duration={5} end={element.endNumber} /> : <span>0</span>} <span>+</span>
                </div>
                <div className={styles.count_title}>{element.subtitleText}</div>
            </div>
        ))

    )
}

import './HeadingAnimation.css'
import { motion } from "framer-motion";
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';
import { useLayoutEffect } from 'react';

export default function HeadingAnimation({ArrayText, classNameOfHead}) {
            // const letters = text.split("");
            const wordsArray = ArrayText.map((word) => {
              return {
                ...word,
                text: word.text.split(""),
              };
            });
          useLayoutEffect(() => {
            
            gsap.registerPlugin(CustomEase)
            CustomEase.create(
                "manatitle",
                "0.895, 0.03, 0.685, 0.22"
              );
              gsap.fromTo(".heading-char", {y : 80}, {y : 0,stagger :0.025, duration : 1.4, ease : "manatitle"})
          })
           
            return (
              <motion.h1 className={classNameOfHead}
               
                style={{ display: "flex", flexWrap: "wrap" }} // Ensures letters stay inline
              >
               {wordsArray.map((word, idx) => {
            return (
              <span style={{display: "inline-block", overflow : 'hidden'}}>
                {word.text.map((char, index) => (
                 <motion.span className="heading-char" key={index}  style={{ display: "inline-block" }}>
                 {char}
               </motion.span>
             
                ))}
                &nbsp;
              </span>
            );
          })}
                 
              </motion.h1>
            );
 };




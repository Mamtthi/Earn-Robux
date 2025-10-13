import styles from "./TaskMathAddition.module.css";
import Input from "../../../components/Input";
import SolutionSection from "../../../components/SolutionSection";
import GraduateSection from "../../../components/GraduateSection";
import {useState} from "react";
import {getSum,compareSolution} from "../../../utils/helperFunctions";

export default function AdditionSection ({num1,num2}) {
    const [answer,setAnswer] = useState("");
    const [showSolution,setShowSolution] = useState(false);
    const [graduate,setGraduate] = useState(false);
    const [isSubmitted,setIsSubmitted] = useState(false);
    const solution = getSum(num1,num2);

    const handleComplete = (value) => {
        if (compareSolution(value,solution)==false){
            // Bei falsch: richtige Ergebnis anzeigen
            setShowSolution(true);
        }
        else {
            // Bei richtig: Anzeige und Update der Punkte
            setGraduate(true);
        }     
    }    

    return (
        <section className={styles.additionTask}>
            <p className="" id="first-summand">{num1}</p>
            <p className="" id="second-summand">+{num2}</p>
            <p className="" id="estimation">Überschläge</p>
            <p className={styles.line}></p>
            <Input answer={answer} setAnswer={setAnswer} handleComplete={handleComplete} />
            { showSolution == true && (
                <SolutionSection solution={solution}/>
                )} 
            { graduate == true && (
                <GraduateSection />
            )}
        </section>
    );
}
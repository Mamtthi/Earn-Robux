import styles from "./AdditionSection.module.css";
import Input from "../../../components/Input";
import SolutionSection from "../../../components/SolutionSection";
import GraduateSection from "../../../components/GraduateSection";
import {useState} from "react";
import {getSum,compareSolution} from "../../../utils/helperFunctions";
import {ResetButton} from "../../../components/Button";

export default function AdditionSection ({num1,num2,onReset}) {
    const [answer,setAnswer] = useState("");
    const [showSolution,setShowSolution] = useState(false);
    const [graduate,setGraduate] = useState(false);
    const [disabled,setDisabled] = useState(false);
    const solution = getSum(num1,num2);

    const handleComplete = (value) => {
        setDisabled(true);
        if (compareSolution(value,solution)==false){
            // Bei falsch: richtige Ergebnis anzeigen
            setShowSolution(true);
        }
        else {
            // Bei richtig: Anzeige und Update der Punkte
            setGraduate(true);
        }     
    }
    
    const handleResetButton = () => {
        setDisabled(false);
        setShowSolution(false);
        setGraduate(false);
        setAnswer("");
        onReset();
    }

    return (
        <section className={styles.additionTask}>
            <p className="" id="first-summand">{num1}</p>
            <p className="" id="second-summand">+{num2}</p>
            <p className="" id="estimation">Überschläge</p>
            <p className={styles.line}></p>
            { showSolution == false && graduate==false &&(
                <Input answer={answer} setAnswer={setAnswer} handleComplete={handleComplete} disabled={disabled}/>
            )}    
            { showSolution == true && (
                <SolutionSection solution={solution}/>
                )} 
            { graduate == true && (
                <GraduateSection />
            )}
            { disabled == true && (
                <ResetButton onClick={handleResetButton} />
            )}
        </section>
    );
}
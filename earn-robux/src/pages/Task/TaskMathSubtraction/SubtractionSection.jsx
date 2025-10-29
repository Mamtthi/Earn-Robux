import styles from "./SubtractionSection.module.css";
import {useState} from "react";
import TaskBlockSection from "../../../components/TaskBlockSection";
import SolutionSection from "../../../components/SolutionSection";
import GraduateSection from "../../../components/GraduateSection";
import {ResetButton} from "../../../components/Button";
import Input from "../../../components/Input"
import {compareSolution,getDifference} from "../../../utils/helperFunctions";


export default function SubtractionSection ({num1,num2,onReset,addPoints,sessionPoints}) {
    const [showSolution,setShowSolution] = useState(false);
    const [graduate,setGraduate] = useState(false);
    const [disabled,setDisabled] = useState(false);
    const [answer,setAnswer] = useState("");

    const solution = getDifference(num1,num2);

    const handleComplete = (value) => {
        setDisabled(true);
        if (compareSolution(value,solution)==false) {
            // Bei falsch: richtige Ergebnis anzeigen
            setShowSolution(true);
            }
        else {
            // Bei richtig: Anzeige und Update der Punkte
            setGraduate(true);
            addPoints(3);
        } 
    }

    const handleReset = () =>{
        setDisabled(false);
        setShowSolution(false);
        setGraduate(false);
        setAnswer("");
        onReset();
    }

    return (
        <section className={styles.mainSection}>
            <TaskBlockSection num1={num1} num2={num2} operation={"subtraction"}/>
            {showSolution == false && (
                <Input answer={answer} setAnswer={setAnswer} handleComplete={handleComplete} disabled={disabled} />
            )}
            {showSolution == true && (
                <SolutionSection solution={solution} />
            )}
            {graduate == true && (
                <GraduateSection />
            )}
            {disabled == true && (
                <ResetButton onClick={handleReset} />
            )}       
        </section>
    )
}
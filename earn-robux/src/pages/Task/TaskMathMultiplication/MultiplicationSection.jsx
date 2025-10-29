import styles from "./MultiplicationSection.module.css";
import Input from "../../../components/Input";
import SolutionSection from "../../../components/SolutionSection";
import GraduateSection from "../../../components/GraduateSection";
import TaskBlockSection from "../../../components/TaskBlockSection";
import {ResetButton} from "../../../components/Button";
import {useState,useEffect} from "react";
import {getProduct,compareSolution} from "../../../utils/helperFunctions";

export default function MultiplicationSection({num1,num2,onReset,addPoints,sessionPoints}) {
    const [answer,setAnswer] = useState("");
    const [showSolution,setShowSolution] = useState(false);
    const [graduate,setGraduate] = useState(false);
    const [disabled,setDisabled] = useState(false);
    const solution = getProduct(num1,num2);
    const [timeLeft, setTimeLeft] = useState(5);

    useEffect(() => { 
        if (!showSolution && timeLeft > 0 && !graduate) {
            const interval = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else if (timeLeft === 0 && !graduate) {
            setShowSolution(true);
            setDisabled(true);
        }
    }, [showSolution, timeLeft]);

    

    const handleComplete = (value) => {
        setDisabled(true);
        if (compareSolution(value,solution)==false){
            // Bei falsch: richtige Ergebnis anzeigen
            setShowSolution(true);
        }
        else {
            // Bei richtig: Anzeige und Update der Punkte
            setGraduate(true);
            addPoints(1);
        }     
    }
    
    const handleResetButton = () => {
        setDisabled(false);
        setShowSolution(false);
        setGraduate(false);
        setAnswer("");
        onReset();
        setTimeLeft(5);
    }

    return (
        <section className={styles.mainSection}>
            <TaskBlockSection num1={num1} num2={num2} operation={"multiplication"} />
            { showSolution == false && graduate==false &&(
                <Input answer={answer} setAnswer={setAnswer} handleComplete={handleComplete} disabled={disabled}/>
            )}
            {!showSolution && !graduate && (
                <p>Zeit: {timeLeft}s</p>
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
    )
}
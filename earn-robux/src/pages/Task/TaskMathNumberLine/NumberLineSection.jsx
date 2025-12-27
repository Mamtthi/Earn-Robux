import styles from "./NumberLineSection.module.css";
import Input from "../../../components/Input";
import SolutionSection from "../../../components/SolutionSection";
import GraduateSection from "../../../components/GraduateSection";
import {ResetButton} from "../../../components/Button";
import TaskBlockSectionNumberLine from "../../../components/TaskBlockSectionNumberLine";
import {useState,useEffect} from "react";
// import {getSum,compareSolution} from "../../../utils/helperFunctions";


export default function NumberLineSection ({num1, num2, onReset, addPoints, sessionPoints}) {  //sessionPoints werden demnächst live angezeigt
    const [answer,setAnswer] = useState("");
    const [showSolution,setShowSolution] = useState(false);
    const [graduate,setGraduate] = useState(false);
    const [disabled,setDisabled] = useState(false);
    const solution = getSum(num1,num2);

    const handleComplete = async (value) => {
        setDisabled(true);
        if (compareSolution(value,solution)==false){
            // Bei falsch: richtige Ergebnis anzeigen
            setShowSolution(true);
        }
        else {
            // Bei richtig: Anzeige und Update der Punkte
            setGraduate(true);
            addPoints(3);
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
        <section className={styles.mainSection}>
            <TaskBlockSectionNumberLine />
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
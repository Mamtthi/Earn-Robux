import stylesGlobal from "../Task.module.css";
import styles from "./TaskMathDivision.module.css";
import {GoBackButton,StartButton} from "../../../components/Button";
import DivisionSection from "./DivisionSection";
import userSelection from "../../../utils/userSelection";
import {useState} from "react";

export default function TaskMathDivision () {
    const [showDivision,setShowDivision] = useState(false);
    const [disabled,setDisabled] = useState(false);
    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);

    const handleClickOnStartButton = () =>{
        userSelection("division",setNum1,setNum2);
        setShowDivision(true);
        setDisabled(true);
    };
    
    const handleReset = () => {
        // Neue Aufgabe generieren
        userSelection("division", setNum1, setNum2);
    };

    return (
        <>
            <ul className={stylesGlobal.list}>
                <li className={stylesGlobal.listItem}><GoBackButton /></li>
                <li className={stylesGlobal.listItem}><StartButton onClick={handleClickOnStartButton} disabled={disabled} /></li>
            </ul>
            {showDivision == false && (
                <h1 className={styles.text}>Hier erscheint deine Divisionsaufgabe, sobald du auf "Start der Aufgabe" klickst.</h1>
            )}
            {showDivision && (
                <section aria-label="main" className={styles.sectionMain}>
                    <DivisionSection num1={num1} num2={num2} onReset={handleReset} />
                </section>
            )}
        </>

    );
}
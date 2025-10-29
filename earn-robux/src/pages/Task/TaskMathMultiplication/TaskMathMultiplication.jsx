import stylesGlobal from "../Task.module.css";
import styles from "./TaskMathMultiplication.module.css";
import {GoBackButton,StartButton} from "../../../components/Button";
import MultiplicationSection from "./MultiplicationSection";
import userSelection from "../../../utils/userSelection";
import {useState} from "react";

export default function TaskMathMultiplication ({addPoints,sessionPoints}) {
    const [showMultiplication,setShowMultiplication] = useState(false);
    const [disabled,setDisabled] = useState(false);
    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);

    const handleClickOnStartButton = () =>{
        userSelection("multiplication",setNum1,setNum2);
        setShowMultiplication(true);
        setDisabled(true);
    };
    
    const handleReset = () => {
        // Neue Aufgabe generieren
        userSelection("multiplication", setNum1, setNum2);
    };

    return (
        <>
            <ul className={stylesGlobal.list}>
                <li className={stylesGlobal.listItem}><GoBackButton /></li>
                <li className={stylesGlobal.listItem}><StartButton onClick={handleClickOnStartButton} disabled={disabled} /></li>
            </ul>
            {showMultiplication == false && (
                <h1 className={styles.text}>Hier erscheint deine Multiplikationsaufgabe, sobald du auf "Start der Aufgabe" klickst.</h1>
            )}
            {showMultiplication && (
                <section aria-label="main" className={styles.sectionMain}>
                    <MultiplicationSection num1={num1} num2={num2} onReset={handleReset} addPoints={addPoints} sessionPoints={sessionPoints}/>
                </section>
            )}
        </>

    );
}
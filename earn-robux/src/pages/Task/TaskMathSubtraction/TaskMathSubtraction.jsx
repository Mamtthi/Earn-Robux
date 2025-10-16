import stylesGlobal from "../Task.module.css";
import styles from "./TaskMathSubtraction.module.css";
import {GoBackButton,StartButton} from "../../../components/Button";
import SubtractionSection from "./SubtractionSection";
import userSelection from "../../../utils/userSelection";
import {useState} from "react";

export default function TaskMathSubtraction () {
    const [showSubtraction,setShowSubtraction] = useState(false);
    const [disabled,setDisabled] = useState(false);
    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);

    const handleClickOnStartButton = () =>{
        userSelection("subtraction",setNum1,setNum2);
    }

    const handleReset = () =>{
        // neue Subtraktionsaufgabe generieren
        userSelection("subtraction", setNum1, setNum2);
    }

    return (
        <>
            <ul className={stylesGlobal.list}>
                <li className={stylesGlobal.listItem}><GoBackButton /></li>
                <li className={stylesGlobal.listItem}><StartButton onClick={handleClickOnStartButton} disabled={disabled}/></li>
            </ul>
            {showSubtraction == false && (
                <h1 className={styles.text}>Hier erscheint deine Subtraktionsaufgabe, sobald du auf "Start der Aufgabe" klickst.</h1>
            )}
            {showSubtraction && (
                <section aria-label="main" className={styles.sectionMain}>
                    <SubtractionSection num1={num1} num2={num2} onReset={handleReset} />
                </section>
            )}
        </>
    );
}
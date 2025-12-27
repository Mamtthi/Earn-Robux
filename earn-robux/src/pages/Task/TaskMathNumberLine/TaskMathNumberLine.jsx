import stylesGlobal from "../Task.module.css";
import styles from "./TaskMathNumberLine.module.css";
import {GoBackButton,StartButton} from "../../../components/Button";
import  userSelection  from "../../../utils/userSelection";
import NumberLineSection from "./NumberLineSection";
import {useState} from "react";


export default function TaskMathNumberLine ({ addPoints, sessionPoints }) {
    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    const [showNumberLineSection,setShowNumberLineSection] = useState(false);
    const [disabled,setDisabled] = useState(false);

    const handleClickOnStartButton = () =>{
        userSelection("numberLine",num1,num2);
        setShowNumberLineSection(true);
        setDisabled(true);
    };

    const handleReset = () => {
        // Neue Aufgabe generieren
        userSelection("numberLine",num1,num2);
     };

    return (
        <>
            <ul className={stylesGlobal.list}>
                <li className={stylesGlobal.listItem}><GoBackButton /></li>
                <li className={stylesGlobal.listItem}><StartButton onClick={handleClickOnStartButton} disabled={disabled}/></li>
            </ul>
            {showNumberLineSection == false && (
                <h1 className={styles.text}>Hier erscheint deine Aufgabe zu Zahlenstrahl, sobald du auf "Start der Aufgabe" klickst.</h1>
            )}
            {showNumberLineSection && (
                <section aria-label="main" className={styles.sectionMain}>
                    <NumberLineSection num1={num1} num2={num2} onReset={handleReset} addPoints={addPoints} sessionPoints={sessionPoints}/>
                </section>
            )}
            
        </>
    );
}
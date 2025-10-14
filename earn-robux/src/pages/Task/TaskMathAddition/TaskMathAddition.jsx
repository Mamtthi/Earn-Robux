import stylesGlobal from "../Task.module.css";
import styles from "./TaskMathAddition.module.css";
import {GoBackButton,StartButton} from "../../../components/Button";
import  userSelection  from "../../../utils/userSelection";
import AdditionSection from "./AdditionSection";
import {useState} from "react";


export default function TaskMathAddition () {
    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    const [showAdditionSection,setShowAdditionSection] = useState(false);
    const [disabled,setDisabled] = useState(false);

    const handleClickOnStartButton = () =>{
        userSelection("addition",setNum1,setNum2);
        setShowAdditionSection(true);
        setDisabled(true);
    };

    const handleReset = () => {
        // Neue Aufgabe generieren
        userSelection("addition", setNum1, setNum2);
     };

    return (
        <>
            <ul className={stylesGlobal.list}>
                <li className={stylesGlobal.listItem}><GoBackButton /></li>
                <li className={stylesGlobal.listItem}><StartButton onClick={handleClickOnStartButton} disabled={disabled}/></li>
            </ul>
            {showAdditionSection == false && (
                <h1 className={styles.text}>Hier erscheint deine Additionsaufgabe, sobald du auf "Start der Aufgabe" klickst.</h1>
            )}
            {showAdditionSection && (<section aria-label="main" className={styles.sectionMain}>
                <AdditionSection num1={num1} num2={num2} onReset={handleReset}/>
            </section>)}
            
        </>
    );
}
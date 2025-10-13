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

    const handleClickOnStartButton = () =>{
        userSelection("addition",setNum1,setNum2);
        setShowAdditionSection(true);
    };

    return (
        <>
            <ul className={stylesGlobal.list}>
                <li className={stylesGlobal.listItem}><GoBackButton /></li>
                <li className={stylesGlobal.listItem}><StartButton onClick={handleClickOnStartButton} /></li>
            </ul>
            {showAdditionSection && (<section aria-label="main" className={styles.sectionMain}>
                <h1 className={styles.text}>zeigt Additionsaufgaben</h1>
                <AdditionSection num1={num1} num2={num2}/>
            </section>)}
            
        </>
    );
}
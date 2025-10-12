import styles from "../../styles/TaskMath.module.css";
import {GoBackButton,StartButton} from "../../components/Button";
import Input from "../../components/Input";
import  userSelection  from "../../utils/userSelection";
import {useState} from "react";

export default function TaskMathAddition () {
    const [answer,setAnswer] = useState("");

    const handleComplete = (value) => {
        // Hier muss das Ergebnis abgeglichen werden
        // Bei richtig: Anzeige und Update der Punkte
        // Bei falsch: richtige Ergebnis anzeigen
        

    }
    return (
        <>
            <ul className={styles.list}>
                <li className={styles.listItem}><GoBackButton /></li>
                <li className={styles.listItem}><StartButton userSelect="addition" userSelection={userSelection} /></li>
            </ul>
            <section name="main" className={styles.sectionMain}>
                <h1 className={styles.text}>zeigt Additionsaufgaben</h1>
                <section name="addition-task" className={styles.additionTask}>
                    <p name="first-summand" className="" id="first-summand">Zahl1</p>
                    <p name="second-summand" className="" id="second-summand">Zahl2</p>
                    <p name="estimation" className="" id="estimation">Überschlag</p>
                    <p name="line" className={styles.line}></p>
                    <Input answer={answer} setAnswer={setAnswer} handleComplete={handleComplete} />
                    <p name="solution" className="">richtige Lösung</p>
                </section>
            </section>
        </>
    );
}
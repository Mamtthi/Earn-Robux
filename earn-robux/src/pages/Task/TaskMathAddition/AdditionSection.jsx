import styles from "./TaskMathAddition.module.css";
import Input from "../../../components/Input";
import {useState} from "react";

export default function AdditionSection () {
    const [answer,setAnswer] = useState("");

    const handleComplete = (value) => {
        // Hier muss das Ergebnis abgeglichen werden
        // Bei richtig: Anzeige und Update der Punkte
        // Bei falsch: richtige Ergebnis anzeigen
    }    

    return (
        <section className={styles.additionTask}>
            <p className="" id="first-summand">Zahl1</p>
            <p className="" id="second-summand">Zahl2</p>
            <p className="" id="estimation">Überschläge</p>
            <p className={styles.line}></p>
            <Input answer={answer} setAnswer={setAnswer} handleComplete={handleComplete} />
            <p className={styles.solution} id="solutionAddition">richtige Lösung</p>
        </section>
    );
}
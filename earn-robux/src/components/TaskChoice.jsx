import styles from "./TaskChoice.module.css";
import {Link} from "react-router-dom";

export default function () {
    return (
        <section className={styles.sectionChoice}>
            <p className={styles.sectionChoiceText}>Wähle deine Aufgaben aus!</p>
            <ul className={styles.sectionChoiceList}>
                <li className={styles.sectionChoiceItem}><Link to="/Task/TaskMathAddition">Addition</Link></li>
                <li className={styles.sectionChoiceItem}>Subtraktion</li>
                <li className={styles.sectionChoiceItem}>Multiplikation</li>
                <li className={styles.sectionChoiceItem}>Division</li>
            </ul>
        </section>
    )
}
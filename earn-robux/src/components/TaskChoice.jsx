import styles from "./TaskChoice.module.css";
import {Link} from "react-router-dom";

export default function () {
    return (
        <section className={styles.sectionChoice}>
            <p className={styles.sectionChoiceText}>Wähle deine Aufgaben aus!</p>
            <ul className={styles.sectionChoiceList}>
                <li className={styles.sectionChoiceItem}><Link to="/task/taskmathaddition">Addition</Link></li>
                <li className={styles.sectionChoiceItem}><Link to="/task/taskmathsubtraction">Subtraktion</Link></li>
                <li className={styles.sectionChoiceItem}><Link to="/task/taskmathmultiplication">Multiplikation</Link></li>
                <li className={styles.sectionChoiceItem}><Link to="/task/taskmathdivision">Division</Link></li>
            </ul>
        </section>
    )
}
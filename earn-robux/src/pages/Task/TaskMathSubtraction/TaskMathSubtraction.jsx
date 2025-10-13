import styles from "../Task.module.css";
import {GoBackButton,StartButton} from "../../../components/Button";

export default function TaskMathSubtraction () {
    return (
        <>
            <ul className={styles.list}>
                <li className={styles.listItem}><GoBackButton /></li>
                <li><StartButton /></li>
            </ul>
            <section className={styles.sectionMain}>
                 <h1 className={styles.text}>zeigt Subtraktionsaufgaben</h1>
             </section>
        </>
    );
}
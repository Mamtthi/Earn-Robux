import styles from "../Task.module.css";
import {GoBackButton,StartButton} from "../../../components/Button";

export default function TaskMathDivision () {
    return (
        <>
            <ul className={styles.list}>
                <li className={styles.listItem}><GoBackButton /></li>
                <li className={styles.listItem}><StartButton /></li>
            </ul>
            <section className={styles.sectionMain}>
                    <h1 className={styles.text}>zeigt Divisionsaufgaben</h1>
            </section>
        </>
    );
}
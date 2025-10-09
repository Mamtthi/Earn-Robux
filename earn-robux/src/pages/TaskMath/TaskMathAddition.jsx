import styles from "../../styles/TaskMathAddition.module.css";
import {GoBackButton,StartButton} from "../../components/Button";

export default function TaskMathAddition () {
    return (
        <div className={styles.container}>
            <div className={styles.containerItem}><GoBackButton /></div>
            <div className={styles.containerItem}><StartButton /></div>
            <h1 className={styles.text}>zeigt Additionsaufgaben</h1>
        </div>
    );
}
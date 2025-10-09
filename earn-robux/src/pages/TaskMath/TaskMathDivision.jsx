import styles from "../../styles/TaskMathDivision.module.css";
import {GoBackButton,StartButton} from "../../components/Button";

export default function TaskMathDivision () {
    return (
        <>
            <GoBackButton />
            <StartButton />
            <h1 className={styles.text}>zeigt Divisionsaufgaben</h1>
        </>
    );
}
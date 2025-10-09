import styles from "../../styles/TaskMathMultiplication.module.css";
import {GoBackButton,StartButton} from "../../components/Button";

export default function TaskMathMultiplication () {
    return (
        <>
            <GoBackButton />
            <StartButton />
            <h1 className={styles.text}>zeigt Multiplikationsaufgaben</h1>
        </>
    );
}
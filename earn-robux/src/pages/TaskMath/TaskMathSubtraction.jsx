import styles from "../../styles/TaskMathSubtraction.module.css";
import {GoBackButton,StartButton} from "../../components/Button";

export default function TaskMathSubtraction () {
    return (
        <>
            <GoBackButton />
            <StartButton />
            <h1 className={styles.text}>zeigt Subtraktionsaufgaben</h1>
        </>
    );
}
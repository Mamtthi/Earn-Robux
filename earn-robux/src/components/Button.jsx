import styles from "./Button.module.css";
import { useNavigate } from 'react-router-dom';


export function GoBackButton () {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <button
            className={styles.button}
            onClick={goBack}
            label="Zurückbutton"
            title="back"
            aria-label="go to previous site">
        Zurück &#127939;
        </button>

    );
}

export function StartButton ({onClick,disabled}) {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            label="Startbutton"
            title="start"
            aria-label="starting task"
            disabled={disabled}>
        Start der Aufgabe &#127947;
        </button>
    );
}

export function ResetButton ({onClick}) {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            label="Resetbutton"
            titel="Reset"
            aria-label="reset task">
        Neue Aufgabe &#128526; ?       
        </button>
    )
}

export function BuyRobuxButton ({onClick,minPointsReached}) {
    return (
        <button
            className={ minPointsReached == true ? styles.button : styles.buttonDeactived }
            onClick={onClick}
            label="BuyRobux"
            titel="BuyRobux"
            aria-label="reduce Points">
            Kaufe Robux
        </button>
    )
}


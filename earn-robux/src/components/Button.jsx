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
        Zurück &#129339;
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


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
        Zurück
        </button>

    );
}

export function StartButton ({onClick}) {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            label="Startbutton"
            title="start"
            aria-label="starting task">
        Start der Aufgabe
        </button>
    );
}


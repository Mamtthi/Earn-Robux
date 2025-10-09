import styles from "./Button.module.css";
import { useNavigate } from 'react-router-dom';
import userSelection from "../utils/userSelection";


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
            accessibilityLabel="go to previous site">
        Zurück
        </button>

    );
}

export function StartButton ({userSelect}) {
    return (
        <button
            className={styles.button}
            onClick={() => userSelection(userSelect)}
            label="Startbutton"
            title="start"
            accessibilityLabel="starting task">
        Start
        </button>
    );
    
}


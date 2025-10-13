import styles from "./Input.module.css";

export default function Input ({answer, setAnswer, handleComplete}) {
    return (
    <form 
        className={styles.form}
        onSubmit={ (e) => {
            e.preventDefault();
            handleComplete(answer);
        }}>
        <input
            type="text"
            pattern="\d*" 
            inputMode="numeric"
            value={answer}
            onChange={ (e) => setAnswer(e.target.value) }
            id={styles.input}
        />
        <button
            type="submit"
            className={styles.submit}
        >Das ist meine Lösung</button>
    </form>
    );
}
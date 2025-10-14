import styles from "./SolutionSection.module.css";

export default function SolutionSection({solution}) {
    return (
        <section className={styles.section}>
            <p className={styles.wrongSolutionText}>Das ist leider falsch!</p>
            <p className={styles.solution}>Das richtige Ergebnis wäre: {solution}</p>
        </section>
        
    );
}
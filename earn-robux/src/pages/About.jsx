import styles from "../styles/About.module.css";

export default function About () {
    return (
        <section className={styles.setion}>
            <h1>Hallo Amon!</h1>
            <p>Hier eine kurze Erklärung wie das hier funktioniert.</p>
            <p>Unter Startseite kommst du immer zum Anfang zurück.
               Unter Informationen, wo du gerade bist, kannst du dir noch mal alles durchlesen.</p>
            <p>Unter Rechnen findest du den Aufgabenfelder. Addition (bis 1000), Subtraktion (bis 1000), kleine Einmaleins und die Division.
               Letztere beiden sind Kopfrechenaufgaben und haben ein Zeitlimit. Bei den Malaufgaben hast du 5 Sekunden und bei der Division 30 Sekunden.
               Schaffst du es nicht, wird dir das richtige Ergebnis angezeigt und du kannst dir eine neue Aufgabe geben lassen.</p>
            <p>Die Punkteverteilung sieht so aus:</p>
            <p>Addition 2 Punkte</p>
            <p>Subtraktion 3 Punkte</p>
            <p>Multiplikation 1 Punkt</p>
            <p>Division 2 Punkte</p>
            <p>Wenn du 600 Punkte erreicht hast, darfst du sie <strong>nur bei mir</strong> in Robux einlösen.
               Nach den ersten eingelösten Robux wird der Schwierigkeitsgrad erhöht. Weitere Übungsaufgaben kommen mit neuen Schulstoff.</p>
            <p>Unter Dashbord kannst du jederzeit deine Gesamtpunktzahl sehen und deine Punktzahl die du seit Aufruf der App erreicht hast.</p>
            <p>Unter Kontakt kommen meine Daten später rein, ist für dich unwichtig.</p>
        </section>
        
        
    );
}
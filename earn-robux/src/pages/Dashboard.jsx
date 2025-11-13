import { BuyRobuxButton } from "../components/Button";
import styles from "../styles/Dashboard.module.css";

export default function Dashboard ({ sessionPoints,totalPoints,reducePoints }) {
    let errmsg = "";
    const handleBuyRobux = (totalPoints) => {    
        if (totalPoints > 600) {
            const newTotalPoints = totalPoints-600;
            reducePoints(newTotalPoints);
        }
        else {
            errmsg = "Es sind noch nicht genug Punkte vorhanden."
        }
    }

    return (
        <section className={styles.section}>
            <h2>Deine Anzahl deines Punkteguthabens:</h2>
            <p>{totalPoints}</p>
            <h2>Deine heute erreichten Punkte:</h2>
            <p>{sessionPoints}</p>
            <BuyRobuxButton onClick={handleBuyRobux} />
            <p className={styles.errmsg}>{errmsg}</p>
        </section>
    );
}
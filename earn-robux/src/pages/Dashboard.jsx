import { BuyRobuxButton } from "../components/Button";
import styles from "../styles/Dashboard.module.css";
import { useState,useEffect } from "react";

export default function Dashboard ({ sessionPoints,totalPoints,reducePoints }) {
    const [minPointsReached,setMinPointsReached] = useState(false);
    const [errmsg,setErrMsg] = useState("");

    useEffect(() => { 
            if (totalPoints >= 600) {
                setMinPointsReached(true);
                setErrMsg("");
            }
        }, [totalPoints]);

    const handleBuyRobux = () => {    
        if (minPointsReached == true) {
            const newTotalPoints = totalPoints-600;
            reducePoints(newTotalPoints);
        }
        else {
            setErrMsg("Es sind noch nicht genug Punkte vorhanden.");
        }
    }

    return (
        <section className={styles.section}>
            <h2>Deine Anzahl deines Punkteguthabens:</h2>
            <p>{totalPoints}</p>
            <h2>Deine heute erreichten Punkte:</h2>
            <p>{sessionPoints}</p>
            <BuyRobuxButton onClick={handleBuyRobux} minPointsReached={minPointsReached}/>
            <p className={styles.errmsg}>{errmsg}</p>
        </section>
    );
}
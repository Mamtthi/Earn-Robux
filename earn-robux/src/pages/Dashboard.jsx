import {useState,useEffect} from "react";

export default function Dashboard ({sessionPoints}) {
    const [points,setPoints] = useState(0);

    useEffect(() => {
    async function getPoints() {
      try {
        const res = await fetch("/punkte.json"); // auf richtigen Server punkte.php nutzen
        const data = await res.json();
        setPoints(data.punkte ?? 0);
      } catch (err) {
        console.error("Fehler beim Laden der Punkte:", err);
      }
    }

    getPoints();
    }, []);
    return (
        <section>
            <h1>Deine Anzahl deines Punkteguthabens:</h1>
            <p>{points}</p>
            <h1>Deine heute erreichten Punkte:</h1>
            <p>{sessionPoints}</p>
        </section>
    );
}
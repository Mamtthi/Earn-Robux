import {useState,useEffect} from "react";

export default function useSessionPoints( initialValue = 0 ){

    const [sessionPoints,setSessionPoints] = useState(initialValue);
    const [totalPoints, setTotalPoints] = useState(0);

        useEffect(() => {
            const fetchPoints = async () => {
                try {
                    const res = await fetch("/.netlify/functions/value");
                    const data = await res.json();
                    setTotalPoints(data.punkte ?? 0);
                } catch (err) {
                    console.error(err);
                }
            };
            fetchPoints();
        }, []);

        // --- Punkte hinzufügen & in DB speichern ---
    const addPoints = async (number = 1) => {
        setSessionPoints(prev => prev + number);
        try {
            await fetch("/.netlify/functions/value", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: new URLSearchParams({ points: totalPoints }),
            });
            setTotalPoints(prev => prev + number); // optional, synchron mit Session
        } catch (err) {
            console.error(err);
        }
    };

    const resetPoints = async () => {
        setSessionPoints(0);

        try {
            await fetch("/.netlify/functions/value", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: new URLSearchParams({ points: -totalPoints }), // setzt Gesamtpunkte auf 0
            });
            setTotalPoints(0);
        } catch (err) {
            console.error("Fehler beim Zurücksetzen der Punkte:", err);
        }
    };

    return {sessionPoints, totalPoints, addPoints, resetPoints};
}
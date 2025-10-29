import {useState,useEffect} from "react";

export default function useSessionPoints( sessionPoints, setSessionPoints ){

    const [totalPoints, setTotalPoints] = useState(0);

        useEffect(() => {
            const fetchPoints = async () => {
                try {
                    const res = await fetch("/api/value");
                    const data = await res.json();
                    setTotalPoints(data.points ?? 0);
                } catch (err) {
                    console.error(err);
                }
            };
            fetchPoints();
        }, []);

        // --- Punkte hinzufügen & in DB speichern ---
    const addPoints = async (number = 1) => {
        
        const newSession = sessionPoints + number;
        const newTotal = totalPoints + number;

        setSessionPoints(newSession);
        setTotalPoints(newTotal);

        try {
            await fetch("/api/value", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ points: newTotal }),
            });
            setTotalPoints(prev => prev + number); // optional, synchron mit Session
        } catch (err) {
            console.error(err);
        }
    };

    const resetPoints = async () => {
        setSessionPoints(0);
        setTotalPoints(0);

        try {
            await fetch("/api/value", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ points: 0 }), // setzt Gesamtpunkte auf 0
            });
            setTotalPoints(0);
        } catch (err) {
            console.error("Fehler beim Zurücksetzen der Punkte:", err);
        }
    };

    return {sessionPoints, totalPoints, addPoints, resetPoints};
}
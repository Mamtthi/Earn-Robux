import {useState,useEffect} from "react";

export default function useSessionPoints( initialValue = 0 ){

    const [sessionPoints,setSessionPoints] = useState(initialValue);
    const [totalPoints, setTotalPoints] = useState(0);

    const PHP_URL = "https://amonslernseite.loveslife.biz/punkte.php";

        useEffect(() => {
            const fetchPoints = async () => {
                try {
                    const res = await fetch(PHP_URL);
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
            await fetch(PHP_URL, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({ delta: number }),
            });
            setTotalPoints(prev => prev + number); // optional, synchron mit Session
        } catch (err) {
            console.error(err);
        }
    };

    const resetPoints = async () => {
        setSessionPoints(0);

        try {
            await fetch(PHP_URL, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({ delta: -totalPoints }), // setzt Gesamtpunkte auf 0
            });
            setTotalPoints(0);
        } catch (err) {
            console.error("Fehler beim Zurücksetzen der Punkte:", err);
        }
    };

    return {sessionPoints, totalPoints, addPoints, resetPoints};
}
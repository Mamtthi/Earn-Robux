

export default function Dashboard ({ sessionPoints,totalPoints }) {

    return (
        <section>
            <h1>Deine Anzahl deines Punkteguthabens:</h1>
            <p>{totalPoints}</p>
            <h1>Deine heute erreichten Punkte:</h1>
            <p>{sessionPoints}</p>
        </section>
    );
}
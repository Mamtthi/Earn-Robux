export default function Input ({answer, setAnswer, handleComplete}) {
    return (
    <form onSubmit={ (e) => {
        e.preventDefault();
        handleComplete(answer);
    }}>
        <input
            type="number"
            value={answer}
            onChange={ (e) => setAnswer(e.target.value) }
            className=""
        />
        <button
            type="submit"
        >Das ist meine Lösung</button>
    </form>
    );
}
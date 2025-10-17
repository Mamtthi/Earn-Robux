import styles from "./TaskBlockSection.module.css";

export default function TaskBlock ({num1,num2,operation}) {
    let operationSign="";
    if (operation==="addition") operationSign = " + ";
    else if (operation==="subtraction") operationSign = " - ";
    else if (operation==="multiplication") operationSign = " * ";
    else operationSign = " : ";

    return (
        <section className={styles.mainSection}>
            <p>{num1}</p>
            <p>{operationSign}</p>
            <p>{num2}</p>
            {/*<p className="" id="estimation">Überschläge</p>*/}
            {operation !== "multiplication" && operation !== "division" && (
                <p className={styles.line}></p>
            )}
            
        </section> 
    )
}
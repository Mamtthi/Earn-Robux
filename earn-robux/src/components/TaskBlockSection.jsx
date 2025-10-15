import styles from "./TaskBlockSection.module.css";

export default function TaskBlock ({num1,num2,operation}) {
    let operationSign="";
    if (operation==="addition") operationSign="+";
    else operationSign="-";

    return (
        <>
            <p>{num1}</p>
            <p>{operationSign}   {num2}</p>
            {/*<p className="" id="estimation">Überschläge</p>*/}
            <p className={styles.line}></p>
        </> 
    )
}
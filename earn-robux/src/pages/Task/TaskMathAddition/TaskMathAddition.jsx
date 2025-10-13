import stylesGlobal from "../Task.module.css";
import styles from "./TaskMathAddition.module.css";
import {GoBackButton,StartButton} from "../../../components/Button";
import  userSelection  from "../../../utils/userSelection";
import AdditionSection from "./AdditionSection";


export default function TaskMathAddition () {
    return (
        <>
            <ul className={stylesGlobal.list}>
                <li className={stylesGlobal.listItem}><GoBackButton /></li>
                <li className={stylesGlobal.listItem}><StartButton userSelect="addition" userSelection={userSelection} /></li>
            </ul>
            <section aria-label="main" className={styles.sectionMain}>
                <h1 className={styles.text}>zeigt Additionsaufgaben</h1>
                <AdditionSection />
            </section>
        </>
    );
}
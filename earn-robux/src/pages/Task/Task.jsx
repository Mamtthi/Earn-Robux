import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import TaskChoice from "../../components/TaskChoice";
import TaskMathAddition from "./TaskMathAddition/TaskMathAddition";
import TaskMathSubtraction from "./TaskMathSubtraction/TaskMathSubtraction";
import TaskMathMultiplication from "./TaskMathMultiplication/TaskMathMultiplication";
import TaskMathDivision from "./TaskMathDivision/TaskMathDivision";


export default function Task ({addPoints,sessionPoints}) {
    return (
        <>
            <Routes>
                <Route index element={ <TaskChoice/> } />
                <Route path="taskmathaddition" element={ <TaskMathAddition addPoints={addPoints} sessionPoints={sessionPoints}/> } />
                <Route path="taskmathsubtraction" element={ <TaskMathSubtraction addPoints={addPoints} sessionPoints={sessionPoints}/> } />
                <Route path="taskmathmultiplication" element={ <TaskMathMultiplication addPoints={addPoints} sessionPoints={sessionPoints}/> } />
                <Route path="taskmathdivision" element={ <TaskMathDivision addPoints={addPoints} sessionPoints={sessionPoints}/> } />
            </Routes>
            <Outlet />
        </>

    );
}
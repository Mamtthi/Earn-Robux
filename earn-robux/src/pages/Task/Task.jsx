import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import TaskChoice from "../../components/TaskChoice";
import TaskMathAddition from "./TaskMathAddition/TaskMathAddition";
import TaskMathSubtraction from "./TaskMathSubtraction/TaskMathSubtraction";
import TaskMathMultiplication from "./TaskMathMultiplication/TaskMathMultiplication";
import TaskMathDivision from "./TaskMathDivision/TaskMathDivision";


export default function Task () {
    return (
        <>
            <Routes>
                <Route index element={ <TaskChoice/> } />
                <Route path="taskmathaddition" element={ <TaskMathAddition/> } />
                <Route path="taskmathsubtraction" element={ <TaskMathSubtraction/> } />
                <Route path="taskmathmultiplication" element={ <TaskMathMultiplication/> } />
                <Route path="taskmathdivision" element={ <TaskMathDivision/> } />
            </Routes>
            <Outlet />
        </>

    );
}
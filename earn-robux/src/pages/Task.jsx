import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import TaskChoice from "../components/TaskChoice";
import TaskMathAddition from "./TaskMath/TaskMathAddition";
import TaskMathSubtraction from "./TaskMath/TaskMathSubtraction";
import TaskMathMultiplication from "./TaskMath/TaskMathMultiplication";
import TaskMathDivision from "./TaskMath/TaskMathDivision";


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
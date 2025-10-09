import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import TaskChoice from "../components/TaskChoice";
import TaskMathAddition from "./TaskMathAddition";


export default function Task () {
    return (
        <>
            <TaskChoice />
            <Routes>
                <Route path="/TaskMathAddition" element={ <TaskMathAddition/> } />
            </Routes>
            <Outlet />
        </>

    );
}
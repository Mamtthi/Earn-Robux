import {useState} from "react";

export default function useSessionPoints( initialValue = 0 ){
    const [sessionPoints,setSessionPoints] = useState(initialValue);

    const addPoints = (number = 1) => setSessionPoints(prev => prev + number);
    const resetPoints = () => setSessionPoints(0);

    return {sessionPoints, setSessionPoints, addPoints, resetPoints};
}
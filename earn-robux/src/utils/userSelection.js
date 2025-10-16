import { generateNumber, getSum } from "./helperFunctions";

export default function userSelection(operation,setNum1,setNum2){
    switch (operation) {
        case "addition": {
            let num1=0;
            let num2=0;
            while (getSum(num1,num2)<=0 || getSum(num1,num2)>=1000 || num1<10 || num2<10) {
                num1=generateNumber(1000);
                num2=generateNumber(1000);
            }
            setNum1(num1);
            setNum2(num2);          
            break;
        };
        case "subtraction": {
            let num1=generateNumber(1000);
            let num2=generateNumber(1000);
            while (num1<num2 || num1<100 || num2<10) {
                num1=generateNumber(1000);
                num2=generateNumber(1000);
            }
            setNum1(num1);
            setNum2(num2);          
            break;
        }
        case "multiplication": {
            let num1=generateNumber(10);
            let num2=generateNumber(10);
            while ( num1<0 || num2<0 ) {
                num1=generateNumber(10);
                num2=generateNumber(10);
            }
            setNum1(num1);
            setNum2(num2);          
            break;
        }
        case "division": {
            setNum1(generateNumber());
            setNum2(generateNumber());          
            break;
        }
        default: console.log("Fehler in der Rechnenoperation!");break;
    }
};
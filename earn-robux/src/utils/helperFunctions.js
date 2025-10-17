export function generateNumber(max) {
    let number = 0;
    while (number<=0){
        number = Math.floor(Math.random()*max);
    }
    return number;
}

export function getSum(num1,num2){
    return num1+num2;
}

export function compareSolution (userSolution,solution){
    let booleanSolution;
    if (userSolution==solution) booleanSolution=true;
    else booleanSolution=false;
    return booleanSolution;
}

export function getDifference (num1,num2) {
    return num1-num2;
}

export function getProduct (num1,num2) {
    return num1*num2;
}

export function getQuotient (num1,num2) {
    return num1/num2;
}
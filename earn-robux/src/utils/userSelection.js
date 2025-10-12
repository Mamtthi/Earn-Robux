import addition from "./addition";

export default function userSelection(userSelect){
    switch (userSelect) {
        case "addition": addition();
        break;
    }
};
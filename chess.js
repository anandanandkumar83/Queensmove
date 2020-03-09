console.log("Queen's Move")
queen = {
    direction: "S",
    position: {
        x1: 4,
        y1: 4
    }
}
console.log("Default position of queen: " + queen.position.x1, queen.position.y1);
function updatePosition(x, y) {
    queen.position.x1 = x;
    queen.position.y1 = y;
} 
function jumpMoveForward(direction, Steps) {
    var temp = 0;
    var temp1 = 0;
    Steps=parseInt(Steps)
    switch (direction) {
        case "N":
            temp = queen.position.y1 - Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.y1 = queen.position.y1 - Steps;
            } else {
                console.log("Invalid Move : N");
            }
            break;
        case "S":
            temp = queen.position.y1 + Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.y1 = queen.position.y1 + Steps;
            } else {
                console.log("Invalid Move : S");
            }
            break;
        case "E":
            temp = queen.position.x1 + Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.x1 = queen.position.x1 + Steps;
            } else {
                console.log("Invalid Move : E");
            }
            break;
        case "W":
            temp = queen.position.x1 - Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.x1 = queen.position.x1 - Steps;
            } else {
                console.log("Invalid Move : W");
            }
            break;
        case "NE":
            temp = queen.position.y1 + Steps;
            temp1 = queen.position.x1 + Steps;
            if (temp < 8 && temp >= 0 && temp1 < 8 && temp1 >= 0) {
                
                    queen.position.y1 = queen.position.y1 + Steps;
                    queen.position.x1 = queen.position.x1 + Steps;
            }
            else {
                console.log("Invalid Move : NE");
            }
            break;
            case "NW":
                temp = queen.position.y1 - Steps;
                temp1 = queen.position.x1 - Steps;
                if (temp < 8 && temp >= 0 && temp1 < 8 && temp1 >= 0) {
                        queen.position.y1 = queen.position.y1 + Steps;
                        queen.position.x1 = queen.position.x1 - Steps;
                }
                else {
                    console.log("Invalid Move : NW");
                }
                break;
            case "SE":
            temp = queen.position.y1 + Steps;
            temp1 = queen.position.x1 + Steps;
            if (temp < 8 && temp >= 0 && temp1 < 8 && temp1 >= 0) {                
                    queen.position.y1 = queen.position.y1 + Steps;
                    queen.position.x1 = queen.position.x1 + Steps;             
            }
            else {
                console.log("Invalid Move : SE");
            }
            break;
            case "SW":
                temp = queen.position.y1 + Steps;
                temp1 = queen.position.x1 - Steps;
                if (temp < 8 && temp >= 0 && temp1 < 8 && temp1 >= 0) {
                        queen.position.y1 = queen.position.y1 + Steps;
                        queen.position.x1 = queen.position.x1 - Steps;
                }
                else {
                    console.log("Invalid Move : SW");
                }
                break;
            default :
            console.log("Hello");     
    }
}

let direction=prompt("Enter the direction");
let Steps=prompt("Enter the steps");
jumpMoveForward(direction,Steps);
console.log("Updated position of queen : "+queen.position.x1,queen.position.y1);

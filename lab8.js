let username = prompt("Enter your nickname:");
if(!username){
    username = "User";
}
document.getElementById("username").textContent = `Hi ${username}!`;

let user = 0;
let computer = 0;
const end = 3;

function game(){
    if (user >= end || computer >= end){
        return;
    }

    const usernumb = Math.floor(Math.random() * 20) + 1;
    const compnumb = Math.floor(Math.random() * 20) + 1;

    let resmess = ` ${username} got a number: ${usernumb},
    Computer got number: ${compnumb} `;

    if(usernumb > compnumb){
        user++;
        resmess += ` ${username} gets a point `;

    }
    else if (usernumb < compnumb){
        computer++;
        resmess += " Computer gets a point ";
    }
    else{
        resmess += "Draw";
    }    

    document.getElementById("score").textContent = `User: ${usernumb} | Computer: ${compnumb} `;
    document.getElementById("res").textContent = resmess;

    if(user === end){
        document.getElementById("res").textContent += `${username} you won `;
        document.getElementById("play").disabled = true;
    }
    else if (computer === end){
        document.getElementById("res").textContent += `Computer won `;
        document.getElementById("play").disabled = true;
    }
}

document.getElementById("play").addEventListener("click", game);
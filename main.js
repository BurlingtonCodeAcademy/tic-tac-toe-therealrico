let statusArea = document.getElementById("status");
let startArea = document.getElementById("start");
let player = "X";
let cell0 = document.getElementById("cell-0");
let cell1 = document.getElementById("cell-1");
let cell2 = document.getElementById("cell-2");
let cell3 = document.getElementById("cell-3");
let cell4 = document.getElementById("cell-4");
let cell5 = document.getElementById("cell-5");
let cell6 = document.getElementById("cell-6");
let cell7 = document.getElementById("cell-7");
let cell8 = document.getElementById("cell-8");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let player1name;
let player2name;


player1.addEventListener("keyup", function(){player1name = player1.nodeValue});
player2.addEventListener("keyup", function(){player2name = player2.nodeValue});
startArea.addEventListener("click", function(){startArea.disabled = true
    timer()
    if (player2.value === "computer") {
         computerToe();
    }
    else {
        humanToe() 
    }
    startArea.textContent = "Player X's turn"
console.log("Click Here")}) 

function humanToe() {
for (let i = 0; i < 9; i++) { 
    document.getElementById("cell-" + i).addEventListener("click", function(){
       if (document.getElementById("cell-" + i).innerHTML === "X" || document.getElementById("cell-" + i).innerHTML === "O") {
           alert("That cell is taken!");
       } else {
       document.getElementById("cell-" + i).innerHTML = player;
       if (player === "X") {
           winner();
            player = "O";
    startArea.textContent = "Player " + player + "'s turn";
    } else {
        winner();
        player = "X";
    startArea.textContent = "Player " + player + "'s turn";
    }
       }
    
    });
}
}

function computerToe() {
    for (let i = 0; i < 9; i++) { 
        document.getElementById("cell-" + i).addEventListener("click", function(){
           if (document.getElementById("cell-" + i).innerHTML === "X" || document.getElementById("cell-" + i).innerHTML === "O") {
            console.log("computertoe 1");   
            alert("That cell is taken!");
           } else {
           document.getElementById("cell-" + i).innerHTML = player;
           if (player === "X") {
               winner();
                player = "O";
                computerPicks();
                console.log("computertoe 2");   

        startArea.textContent = "Player " + player + "'s turn";
        } else {
            winner();
            player = "X";
        startArea.textContent = "Player " + player + "'s turn";
        }
           }
        
        });
    }
}

function computerPicks() {
    let num = Math.floor(Math.random() * 9);
    if (document.getElementById("cell-" + num).innerHTML === "") {
        document.getElementById("cell-" + num).click()
        console.log("computer picks 1");   

    }
    else {
        computerPicks();
        console.log("computer picks 1");   

    }
}

function winner() {
    if (cell0.innerHTML === player && cell1.innerHTML === player && cell2.innerHTML === player) {
        cell0.style.setProperty("text-decoration", "line-through");
        cell1.style.setProperty("text-decoration", "line-through"); 
        cell2.style.setProperty("text-decoration", "line-through");  
        setTimeout(function(){alert("Congratulations! Player" + player + " wins!")},500);
    }
    else if (cell3.innerHTML === player && cell4.innerHTML === player && cell5.innerHTML === player) {
        cell3.style.setProperty("text-decoration", "line-through");
        cell4.style.setProperty("text-decoration", "line-through"); 
        cell5.style.setProperty("text-decoration", "line-through");  
        setTimeout(function(){alert("Congratulations! Player" + player + " wins!")},500);
    }
    else if (cell6.innerHTML === player && cell7.innerHTML === player && cell8.innerHTML === player) {
        cell6.style.setProperty("text-decoration", "line-through");
        cell7.style.setProperty("text-decoration", "line-through"); 
        cell8.style.setProperty("text-decoration", "line-through");  
        setTimeout(function(){alert("Congratulations! Player" + player + " wins!")},500);
    }
    else if (cell0.innerHTML === player && cell3.innerHTML === player && cell6.innerHTML === player) {
        cell0.style.setProperty("text-decoration", "line-through");
        cell3.style.setProperty("text-decoration", "line-through"); 
        cell6.style.setProperty("text-decoration", "line-through");  
        setTimeout(function(){alert("Congratulations! Player" + player + " wins!")},500);
    }
    else if (cell1.innerHTML === player && cell4.innerHTML === player && cell7.innerHTML === player) {
        cell1.style.setProperty("text-decoration", "line-through");
        cell4.style.setProperty("text-decoration", "line-through"); 
        cell7.style.setProperty("text-decoration", "line-through");  
        setTimeout(function(){alert("Congratulations! Player" + player + " wins!")},500);
    }
    else if (cell2.innerHTML === player && cell5.innerHTML === player && cell8.innerHTML === player) {
        cell2.style.setProperty("text-decoration", "line-through");
        cell5.style.setProperty("text-decoration", "line-through"); 
        cell8.style.setProperty("text-decoration", "line-through");  
        setTimeout(function(){alert("Congratulations! Player" + player + " wins!")},500);
    }
    else if (cell0.innerHTML === player && cell4.innerHTML === player && cell8.innerHTML === player) {
        cell0.style.setProperty("text-decoration", "line-through");
        cell4.style.setProperty("text-decoration", "line-through"); 
        cell8.style.setProperty("text-decoration", "line-through");  
        setTimeout(function(){alert("Congratulations! Player" + player + " wins!")},500);
    }
    else if (cell2.innerHTML === player && cell4.innerHTML === player && cell6.innerHTML === player) {
        cell2.style.setProperty("text-decoration", "line-through");
        cell4.style.setProperty("text-decoration", "line-through"); 
        cell6.style.setProperty("text-decoration", "line-through");  
        setTimeout(function(){alert("Congratulations! Player" + player + " wins!")},500);
    }

}

function timer() {
    let minutes = 0;
    let seconds = 0;
    setInterval(() => {
        seconds++
        if (seconds > 60) {
            minutes++;
            seconds = 0;
        }
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
    }, 1000);
}

let userS = 0;
let compS = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");


const showWinner =(userWin) =>{
    if(userWin){
        userS++;
        userScore.innerText = userS;
        console.log("you win");
        msg.innerText = "you win";
        msg.style.backgroundColor = "green";
        
    }
    else{
        compS++;
        compScore.innerText = compS;
        console.log("you loose");
        msg.innerText = "you lost";
        msg.style.backgroundColor = "red";
    }
}
const genCompChoice =() =>{
   const options = ["rock","paper","scissors"];
   const random = Math.floor( Math.random() * 3);
    return options[random];
}

const playGame =(userChoice) =>{
 console.log("user choice =",userChoice);  
 const compChoice = genCompChoice();
 console.log("computer choice =",compChoice);

 if(userChoice === compChoice){
 console.log("DRAW");
    msg.innerText = "Draw";
    msg.style.backgroundColor = "black";
 }
 else{
    let userWin= true;
    if(userChoice === "rock"){
        //paper sissor
        userWin = compChoice === "paper" ? false:true;
 }
 else if(userChoice ==="paper"){
    //stone sissor
    userWin = compChoice ==="scissors" ? false:true;
 }else{
    userWin = compChoice ==="rock"?false:true;
 }
 showWinner(userWin);
 }
};


choices.forEach((choice) =>{
    choice.addEventListener("click" ,() =>{
        let userChoice = choice.id;
        // console.log("choice was clicked" ,userChoice);
        playGame(userChoice); 
    });


})

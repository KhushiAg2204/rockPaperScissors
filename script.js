let userScore=0;
let compScore=0;
const user=document.querySelector("#user");
const comp=document.querySelector("#comp");
const msg=document.querySelector(".msg");
const msgCont=document.querySelector(".msg-cont");
  
//for comp choice
const compChoice=()=>{
    const options=["rock","paper","scissors"];
    const RandIdx=Math.floor(Math.random() * 3);
    //floor-> to remove ecimal part
    //random-> to generate random number 
    // if we want to generate till 2 then multiply with 3
    return options[RandIdx];
};

//Show Winner
const ShowWinner=(userWin,userChoice,CompChoice)=>{
    if(userWin){
         msg.innerText=`you chose ${userChoice} computer chose ${CompChoice} \n So You Win!`;
         msg.style.backgroundColor="green";
         msg.classList.remove("msg");
         msg.classList.add("msgAfter");
         userScore++;
         user.innerText=userScore;
    }
    else {
        msg.innerText=` computer chose ${CompChoice} you chose ${userChoice}  \nSo You Lose!`;
        msg.style.backgroundColor="red";
        msg.classList.remove("msg");
         msg.classList.add("msgAfter");
        compScore++;
        comp.innerText=compScore;
      

    }
};
//play
const playGame=(userChoice)=>{
    
    //generate comp choice
    const CompChoice=compChoice();
    
    if(userChoice===CompChoice)
        //draw
      draw(userChoice);
    else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin= CompChoice==="paper" ? false : true;
        }
        if(userChoice==="paper"){
            userWin= CompChoice==="scissors" ? false : true;
        }
         if(userChoice==="scissors"){
            userWin= CompChoice==="rock" ? false : true;
        }
        ShowWinner(userWin,userChoice,CompChoice);
    }

};

//draw
const draw=(userChoice)=>{
    msg.innerText=` you both chose ${userChoice} So it's a Draw!`;
    msg.style.backgroundColor="rgb(21, 84, 86)";
    msg.classList.remove("msg");
    msg.classList.add("msgAfter");
    
    
    
};

const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

     });
});
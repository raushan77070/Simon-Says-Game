let gameSeq=[];
let userSeq=[];
let btns = ["yellow","red","purple","green"];
let hs =0;

let started=false;
let level=0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is satrted");
        started = true;
        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
   
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
   
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let n = Math.floor(Math.random()*3)+1;
    let color = btns[n];
    let randombtn = document.querySelector(`.${color}`);
    gameSeq.push(color);
    gameFlash(randombtn);
   
}

// event listner 

function btnPress(){
     let btn = this;
     userFlash(btn);
     userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


// sequence matching 

function checkAns (idx){
    
     if(userSeq[idx]== gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
     }else{
        if(level > hs){
            hs=level;
        }
        h2.innerHTML=`Game Over! Your score was <b>${level}</b><br> Press any key to start again<br>
        HIGH SCORE : <b>${hs}</b>`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#537c78";
        },150);
        reset();
     }
}

// reset game

function reset(){
    started= false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

let button = document.querySelectorAll(".but");
let p = 1;
let player1
let player2
let turn=document.getElementById("turn")
button.forEach((but) => {
    but.addEventListener("click", function () {
        if (p % 2 === 0) {
            but.innerHTML = 'X';
            but.style.fontWeight = 'bold';
            but.style.fontSize = '32px';
            but.style.color = '#000';
            but.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.2)';
            but.disabled = true;
            p++;
             turn.innerText=`${player1}'s turn `;
             
        } 
        else {
            but.innerHTML = 'O';
            but.style.fontWeight = 'bold';
            but.style.fontSize = '32px';
            but.style.color = '#006400';
            but.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.2)';
            but.disabled = true;
            p++;
            turn.innerText=`${player2}'s turn `
        }

        checkwinner(); 
    });
});

const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
]

function checkwinner() {
  setTimeout(()=>{  for (line of lines) {
        const [a, b, c] = line;
        if (button[a].innerHTML!="" && button[a].innerHTML === button[b].innerHTML && button[a].innerHTML === button[c].innerHTML) {
         var text = button[a].innerHTML;
         if(text == 'X')
           {
            turn.innerText= `${player2} wins`;
            turn.style.color="cyan"
            
            
           }
           else{
            turn.innerText= `${player1} wins`;
            turn.style.color="cyan"
            
       
           }
            for(i=0;i<9;i++)
            {button[i].disabled=true;}
               break; 
        }
    }} ,100);
}

let reset=document.getElementById("restart")
reset.addEventListener("click",function() {
    button.forEach((but)=>{ but.innerHTML="";
but.disabled=false
turn.innerText=`${player1}'s turn `
turn.style.color="white"
});
 p=1
});

let main=document.getElementById("main")
let head=document.getElementById("b")

let play=document.getElementById("play")
play.addEventListener("click",function()
{    
     document.body.classList.remove("body1")
    document.body.classList.add("body2")
    play.style.display="none"
    reset.style.display="block"
    main.style.display="grid"
    head.style.top="10px"
    reset.style.display="block"
    turn.style.display="block"
   player1= prompt("Enter player1 name")
 player2= prompt("Enter player2  name")
 turn.innerText=`${player1}'s turn `
    
})

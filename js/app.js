import {elHands, elUser, elRobot, elRefershGame, elGameZone, elResultZone, elTextName,elModeChanger,elAdvancedMode} from "./html-el.js";



let activeMode="basic";

function modeChanger (){
if(activeMode==="basic"){
activeMode="advanced";
elAdvancedMode.style.display="block";
elGameZone.style.display="none";
elModeChanger.innerText="basic"
}
else{
activeMode="basic";
elAdvancedMode.style.display="none";
elGameZone.style.display="flex";
elModeChanger.innerText="advanced"
}}
//   robot choose 
function robotchoose() {
    const hands = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.trunc(Math.random() * hands.length);
    return hands[randomIndex];
};
// swap zones   

function swapZone (boolean) {
     if (boolean) {
        elGameZone.style.display = 'none';
         elResultZone.style.display = 'flex';
     }
        else {
         elGameZone.style.display = 'flex';
         elResultZone.style.display = 'none';
}}


      

// Find winner
     function checkWiner(u, r){
        const user = u;
        const robot = r;
 
    const action ={
        scissors: {
            rock: "ROBOT",
            paper: "USER",
            scissors: "TIE",
            spock: "ROBOT",
            lizard: "USER",
        },
        paper: {
            rock: "USER",
            paper: "TIE",
            scissors: "ROBOT",
            spock: "USER",
            lizard: "ROBOT",
        },
        rock: {
            rock: "TIE",
            paper: "ROBOT",
            scissors: "USER",
            spock: "ROBOT",
            lizard: "USER",
        },
        spock: {
            rock: "USER",
            paper: "ROBOT",
            scissors: "USER",
            spock: "TIE",
            lizard: "ROBOT"
        },
        lizard: {
            rock: "ROBOT",
            paper: "USER",
            scissors: "ROBOT",
            spock: "USER",
            lizard: "TIE"
        }  
    }
    return action[user][robot];
   }

// Hand
elHands.forEach(elhand => {
    elhand.addEventListener('click', (evnt) => {
         swapZone (true);
        const user = evnt.target.alt;
        const robot = robotchoose();
        elUser.src = evnt.target.src;
        elRobot.src = "./img/hand-load.svg";
        setTimeout(() => {
            elRobot.src = `./img/${robot}.svg`;
            const winner = checkWiner(user, robot);

            elTextName.textContent = winner;
        }, 1000 ,)
        ;
    })});

// Refresh game
elRefershGame.addEventListener('click', () => {
    swapZone (false);
});

elModeChanger.addEventListener("click",()=>{modeChanger()})
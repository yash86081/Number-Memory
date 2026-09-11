let level = document.getElementById("level")
let Number = document.getElementById("Number")
let Input = document.getElementById("Input")
let Submit = document.getElementById("Submit")
let Restart= document.getElementById("Restart")
let loss = document.getElementById("loss")
let process = 0;
let oldtimer=0;
let currentLevel = 1;
Restart.style.display = "none"
function resetNumber() {
    Number.textContent=""
    Input.style.display = "inline-block"
    Submit.style.display = "inline-block"
}
level.textContent= "Level: "+currentLevel
function produce() {
    process= Math.floor(Math.random()*9*(10**(currentLevel+1))+10**(currentLevel+1))
    Number.textContent= String(process)
    Input.style.display = "none"
    Submit.style.display = "none"
    oldtimer = setTimeout(resetNumber, 5000)
}
produce()
function restartGame() {
    location.reload()
}
function GameResult() {
    if (String(process)===Input.value) {
        clearTimeout(oldtimer)
        loss.textContent=""
        Input.value=""
        currentLevel=currentLevel+1
        level.textContent= "Level: "+currentLevel
        produce()
    }
    else {
        clearTimeout(oldtimer)
        loss.textContent = "You Lose!"
        Restart.style.display = "inline-block"
        Input.style.display = "none"
        Submit.style.display = "none"
        level.textContent = "You were at level:"+currentLevel
    }
}
Submit.addEventListener("click", GameResult)
Restart.addEventListener("click", restartGame)
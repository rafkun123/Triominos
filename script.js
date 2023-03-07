const dodaj = document.querySelector(".dodaj")
const display = document.querySelector(".display")
const score = document.querySelectorAll('.score')
const playerDiv = document.querySelectorAll('.playerDiv')
const startGame = document.querySelector('.startGame')
const playersCount = document.querySelector('.playersCount')
const buttons = document.querySelectorAll('button')

Next = () => {
    for (i = 0; i < playerDiv.length; i++){
        if (playerDiv[i] == playerDiv[playersCount.value-1]){
            playerDiv[0].firstElementChild.classList.add('greenDot')
            playerDiv[playersCount.value-1].firstElementChild.classList.remove('greenDot')
            playerDiv[playersCount.value-1].lastElementChild.innerHTML = parseInt(display.innerHTML) + parseInt(playerDiv[playersCount.value-1].lastElementChild.innerHTML)
            playerDiv[playersCount.value-1].lastElementChild.previousElementSibling.innerHTML = display.innerHTML
            display.innerHTML = 0
            break
        } 
        else if (playerDiv[i].firstElementChild.classList.contains('greenDot')){
            playerDiv[i].nextElementSibling.firstElementChild.classList.add('greenDot')
            playerDiv[i].firstElementChild.classList.remove('greenDot')
            playerDiv[i].lastElementChild.innerHTML = parseInt(display.innerHTML) + parseInt(playerDiv[i].lastElementChild.innerHTML)
            playerDiv[i].lastElementChild.previousElementSibling.innerHTML = display.innerHTML
            display.innerHTML = 0
            break
        }
    }
}

StartNewGame = () => {
    if (parseInt(playersCount.value) >= 2 && parseInt(playersCount.value) <= 4 ){
        startGame.parentElement.style.display = "none"
    } else {
        alert('Podaj prawidłową liczbę graczy (2-4)')
        playersCount.value = ''
    }
    
}

buttons.forEach(button=>{
    button.addEventListener('click', e =>{
        let showScore = parseInt(display.innerHTML)
        if(e.target == buttons[1]){
            display.innerHTML = showScore + 1
        } 
        else if(e.target == buttons[2]){
            display.innerHTML = showScore + 2
        }
        else if(e.target == buttons[3]){
            display.innerHTML = showScore + 3
        }
        else if(e.target == buttons[4]){
            display.innerHTML = showScore + 4
        }
        else if(e.target == buttons[5]){
            display.innerHTML = showScore + 5
        }
        else if(e.target == buttons[6]){
            display.innerHTML = showScore + 25
        }
        else if(e.target == buttons[7]){
            display.innerHTML = showScore + 40
        }
        else if(e.target == buttons[8]){
            display.innerHTML = showScore + 50
        }
        else if(e.target == buttons[9]){
            display.innerHTML = showScore + 60
        }
        else if(e.target == buttons[10]){
            display.innerHTML = showScore -5
        }
        else if(e.target == buttons[11]){
            display.innerHTML = -25
        }
        else if(e.target == buttons[12]){
            display.innerHTML = 0
        }
    })
})

dodaj.addEventListener('click', Next)
startGame.addEventListener('click', StartNewGame)

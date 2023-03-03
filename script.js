const one = document.querySelector(".plusOne")
const two = document.querySelector(".plusTwo")
const three = document.querySelector(".plusThree")
const four = document.querySelector(".plusFour")
const five = document.querySelector(".plusFive")
const dodaj = document.querySelector(".dodaj")
const display = document.querySelector(".display")
const clear = document.querySelector(".clear")
const win = document.querySelector('.win')
const most = document.querySelector('.most')
const hex = document.querySelector('.hex')
const dhex = document.querySelector('.dhex')
const mfive = document.querySelector('.minusFive')
const mTF = document.querySelector('.minusTF')

const score = document.querySelectorAll('.score')
const playerDiv = document.querySelectorAll('.playerDiv')

AddOne = () => {
    let zxc = parseInt(display.innerHTML)
    display.innerHTML = zxc + 1
}

AddTwo = () => {
    let zxc = parseInt(display.innerHTML)
    display.innerHTML = zxc + 2
}

AddThree = () => {
    let zxc = parseInt(display.innerHTML)
    display.innerHTML = zxc + 3
}

AddFour = () => {
    let zxc = parseInt(display.innerHTML)
    display.innerHTML = zxc + 4
}

AddFive = () => {
    let zxc = parseInt(display.innerHTML)
    display.innerHTML = zxc + 5
}

AddWin = () => {
    let zxc = parseInt(display.innerHTML)
    display.innerHTML = zxc + 25
}

AddMost = () => {
    let zxc = parseInt(display.innerHTML)
    display.innerHTML = zxc + 40
}

AddHex = () => {
    let zxc = parseInt(display.innerHTML)
    display.innerHTML = zxc + 50
}

AddDHex = () => {
    let zxc = parseInt(display.innerHTML)
    display.innerHTML = zxc + 60
}

MinusFive = () => {
    let zxc = parseInt(display.innerHTML)
    display.innerHTML = zxc - 5
}

MinusTF = () => {
    let zxc = parseInt(display.innerHTML)
    display.innerHTML = zxc -25
}

next = () => {
    for (i = 0; 1 < 4; i++){
        if (playerDiv[i] == playerDiv[3]){
            playerDiv[0].firstElementChild.classList.add('greenDot')
            playerDiv[3].firstElementChild.classList.remove('greenDot')
            playerDiv[3].lastElementChild.innerHTML = parseInt(display.innerHTML) + parseInt(playerDiv[3].lastElementChild.innerHTML)
            playerDiv[3].lastElementChild.previousElementSibling.innerHTML = display.innerHTML
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

clearDisplay = () => {
    display.innerHTML = 0
}

one.addEventListener('click', AddOne)
two.addEventListener('click', AddTwo)
three.addEventListener('click', AddThree)
four.addEventListener('click', AddFour)
five.addEventListener('click', AddFive)
win.addEventListener('click', AddWin)
most.addEventListener('click', AddMost)
hex.addEventListener('click', AddHex)
dhex.addEventListener('click', AddDHex)
mfive.addEventListener('click', MinusFive)
mTF.addEventListener('click', MinusTF)
dodaj.addEventListener('click', next)
clear.addEventListener('click', clearDisplay)

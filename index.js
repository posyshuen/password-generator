const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let firstGen = document.getElementById("first-generation")
let secondGen = document.getElementById("second-generation")

function randomGen() {
    let storedCharacters = ""
    for (let i = 0; i < 12; i++) {
    let random = Math.floor(Math.random()*characters.length)
    storedCharacters += characters[random]
}
    return storedCharacters
}

function gen() {
    firstGen.textContent = randomGen()
    secondGen.textContent = randomGen()
}

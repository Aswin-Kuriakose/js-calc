const inputEl = document.getElementById("input-el")
const numBttn = document.querySelector(".buttons")
const operatorBttn = document.querySelectorAll(".operants")
const clearBttn = document.getElementById("clear-bttn")
const equalBttn = document.getElementById("equal-bttn")

const bttn9 = document.getElementById("bttn9")
const bttn8 = document.getElementById("bttn8")
const bttn7 = document.getElementById("bttn7")
const bttn6 = document.getElementById("bttn6")
const bttn5 = document.getElementById("bttn5")
const bttn4 = document.getElementById("bttn4")
const bttn3 = document.getElementById("bttn3")
const bttn2 = document.getElementById("bttn2")
const bttn1 = document.getElementById("bttn1")
const bttn0 = document.getElementById("bttn0")

bttn9.addEventListener("click",() => {
    inputEl.innerHTML+= bttn9.value
})
bttn8.addEventListener("click",() => {
    inputEl.innerHTML += bttn8.value
})
bttn7.addEventListener("click",() => {
    inputEl.innerHTML+= bttn7.value
})
bttn6.addEventListener("click",() => {
    inputEl.innerHTML += bttn6.value
})
bttn5.addEventListener("click",() => {
    inputEl.innerHTML += bttn5.value
})
bttn4.addEventListener("click",() => {
    inputEl.innerHTML += bttn4.value
})
bttn3.addEventListener("click",() => {
    inputEl.innerHTML += bttn3.value
})
bttn2.addEventListener("click",() => {
    inputEl.innerHTML += bttn2.value
})
bttn1.addEventListener("click",() => {
    inputEl.innerHTML += bttn1.value
})

 function operations() {
    inputEl.innerHTML += this.value
}
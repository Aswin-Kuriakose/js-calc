const inputEl = document.getElementById("input-el")
const numBttn = document.querySelectorAll(".buttons")
const clearBttn = document.getElementById("clear-bttn")
const equalBttn = document.getElementById("equal-bttn")
const symbolBttn = document.querySelectorAll(".symbols")

let opSymbols = ["+","-","x","/"]

for(let i = 0; i < numBttn.length; i++) {
    numBttn[i].addEventListener("click",(e) => {
        inputEl.innerHTML += e.target.innerHTML
    })
}
equalBttn.addEventListener("click", () => {
    let inputStr = inputEl.innerHTML
    let lastChar = inputStr[inputStr.length - 1]
    if (lastChar == "+" || lastChar == "-" || lastChar == "x" || lastChar == "/"){
        inputEl.innerHTML = "syntax error"
    }
    else if(lastChar == "/0"){
        inputEl.innerHTML = "infinity"
    }
    else{
        inputEl.innerHTML = eval(inputEl.innerHTML)
    }
})
clearBttn.addEventListener("click", () => {

    inputEl.innerHTML = " "
})
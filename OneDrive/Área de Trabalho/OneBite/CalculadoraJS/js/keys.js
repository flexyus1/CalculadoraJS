import calculate from "./calculate.js"

 const input = document.querySelector('#input')
 
 export function handleBtnPress (ev) {
  const value = ev.currentTarget.dataset.value
  input.value += value
}

 export function handBtnClear (){
  input.value = ''
  input.focus()
}

export function handType(ev){
  const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
  ev.preventDefault()
  if(allowedKeys.includes(ev.key)){
    input.value += ev.key
    return
  }
  if (ev.key ==='Backspace') {
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === 'Enter'){
    calculate()
  }
}
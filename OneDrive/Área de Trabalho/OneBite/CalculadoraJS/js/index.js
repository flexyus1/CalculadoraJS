const input = document.getElementById('input')
const resultInput = document.getElementById('result')

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
  charKeyBtn.addEventListener('click', handleBtnPress)
})
document.getElementById('clear').addEventListener('click', handBtnClear)
input.addEventListener('keydown',handType )
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById("copyToClipboard").addEventListener("click", copyToClipBoad)
document.getElementById('themeSwitcher').addEventListener('click',theme )
 
import calculate from "./calculate.js"
import copyToClipBoad from "./copyToClipBoad.js"
import { handBtnClear, handType, handleBtnPress } from "./keys.js"
import theme from "./theme.js"
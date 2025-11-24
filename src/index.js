import "./style.css"
import Typed from "typed.js"

const refreshAdvice = document.querySelector(".refresh")
async function getAdvice() {
	const res = await fetch("https://api.adviceslip.com/advice")
	const data = await res.json()
	return data.slip.advice
}
let typed = null
async function init() {
	const advice = await getAdvice()
	if (typed) typed.destroy()
	typed = new Typed(".advice", {
		strings: [advice],
		typeSpeed: 60,
		showCursor: false,
	})
}

init()
setInterval(init, 20000)
refreshAdvice.addEventListener("click", () => {
	init()
})

var currentNumber = 0
const number = document.getElementById('number')

function updateNumber(delta) {
	currentNumber += delta
	number.innerHTML = currentNumber}

document.getElementById('increase').onclick = function() {
	updateNumber(1)}

document.getElementById('decrease').onclick = function() {
	updateNumber(-1)}

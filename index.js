const getById = document.getElementById

const yourHP = document.getElementById('yourHP')
const monsterHP = document.getElementById('monsterHP')

function updateHealth(yourHealthDelta, monsterHealthDelta) {
	yourHP.innerHTML = parseInt(yourHP.innerHTML) + yourHealthDelta
	monsterHP.innerHTML = parseInt(monsterHP.innerHTML) + monsterHealthDelta}

document.getElementById('heal').onclick = function() {
	updateHealth(10, 0)}

document.getElementById('attack').onclick = function() {
	updateHealth(-10, -20)}
var getById = document.getElementById.bind(document)

const numCookies = getById('numCookies')

getById('cookie').onclick = function() {
	numCookies.innerHTML = parseInt(numCookies.innerHTML) + 1}

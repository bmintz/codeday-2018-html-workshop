document.querySelector('button').onclick = function() {
	el = document.createElement('li')
	el.innerHTML = 'no meat, no cheese, no V E G E T A L S'
	document.getElementById('exampleList').appendChild(el)}
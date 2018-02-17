const foods = [
	'two number 9s',
	'a number 9 large',
	'a number 6 with extra dip',
	'a number 7',
	'two number 45s, one with cheese',
	'a large soda.']

document.querySelector('button').onclick = function() {
	if (foods.length == 0)
		return;
	el = document.createElement('li')
	el.innerHTML = foods.shift()
	document.getElementById('exampleList').appendChild(el)}
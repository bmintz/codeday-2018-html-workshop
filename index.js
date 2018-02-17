const foods = [
	'two number 9s',
	'a number 9 large',
	'a number 6 with extra dip',
	'a number 7',
	'two number 45s, one with cheese',
	'a large soda.']
// in the current order, getting and removing elements in order would require foods.shift()
// which is slow. reversing the array lets us pop() instead, which is O(1)
// of course, this is all a little overkill for a silly meme anyway.
foods.reverse()

const order = document.querySelector('ol')

document.querySelector('button').onclick = function() {
	if (foods.length == 0)
		return;
	el = document.createElement('li')
	el.innerHTML = foods.pop()
	order.appendChild(el)}

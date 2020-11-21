const resultContainer = document.getElementById('result')
const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')

let count = 0;

increment.addEventListener('click', () => {
	count = count + 1
	resultContainer.textContent = count
})

decrement.addEventListener('click', () => {
	count = count - 1
	resultContainer.textContent = count
})
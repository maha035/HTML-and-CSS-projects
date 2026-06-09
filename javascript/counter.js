const counterValue = document.getElementById('counter-value');
const decBtn = document.getElementById('decrement');
const resBtn = document.getElementById('reset');
const incBtn = document.getElementById('increment');

let count = 0;

function updateDisplay() {
  counterValue.textContent = count;
  if (count > 0) counterValue.style.color = "green";
  else if (count < 0) counterValue.style.color = "red";
  else counterValue.style.color = "#333";
}

incBtn.addEventListener('click', () => { count++; updateDisplay(); });
decBtn.addEventListener('click', () => { count--; updateDisplay(); });
resBtn.addEventListener('click', () => { count = 0; updateDisplay(); });
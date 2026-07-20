// JavaScript source code
function Factorial() {
	let numberElement = document.getElementById("number");
	let number = numberElement.value;
	let resultElement = document.getElementById("factorial-result");
	let f = 1;
	for (let i = 1; i <= number; i++) { f *= i };
	resultElement.innerHTML = f;
}
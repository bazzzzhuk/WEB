// JavaScript source code
charset = "utf-8"
function Factorial() {
	let numberElement = document.getElementById("number");
	let number = numberElement.value;
	let resultElement = document.getElementById("result");
	let f = BigInt(1);
	for (let i = 1n; i <= number; i++) { f *= i };
	resultElement.innerHTML = `${number}! = ${f}`;
	//resultElement.value = `${number}! = ${f}`;
}
function Power()
{
	let number_p = document.getElementById("number_p").value;
	let power_p = document.getElementById("power_p").value;
	document.getElementById("result_p").innerHTML = `${number_p} ^ ${power_p} = ${BigInt(number_p**power_p)}`;
}
function Fibona44i()
{
	let end_fibona44i = document.getElementById("number_f").value;
	let temp_value;
	let fibona44i_1 = 0;
	let fibona44i_2 = 1;
	let vyvod = '0<br>';
	while (end_fibona44i >= fibona44i_2) {
		vyvod = vyvod + fibona44i_2 + '<br>';
		temp_value = fibona44i_2;
		fibona44i_2 += fibona44i_1;
		fibona44i_1 = temp_value;
	}
	document.getElementById("result_f").innerHTML = `${vyvod} <br> ${fibona44i_2} < следующее число в последовательности Фибоначчи больше введенного предела в ${end_fibona44i}!`
}
function setImage()
{
	let filename = document.getElementById("image-file");
	let reader = new FileReader();
	reader.onload = function (e)
	{
		document.getElementById("image").src = e.target.result;
	}
	reader.readAsDataURL(filename.files[0]);
}
function setBackgroundColor(event)
{
	document.body.style.backgroundColor = event.target.value;
	console.log(event.target.id);
	//document.body.style.backgroundColor = document.getElementById("background-color").value;
}
function setForegroundColor()
{
	document.body.style.color = document.getElementById("foreground-color").value;
}
function setColor(event)
{
	/*
	== - сравнивает два значения
	=== - сравнивает два значения и типы этих значений
	=== возвращает true только в том случае, если совпадают как значения, так и типы.
	*/
	if (event.target.id === 'background-color')
	{
		document.body.style.backgroundColor = event.target.value;
	}
	else {document.body.style.color = event.target.value;}
}
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
	//(event.target.id === 'background-color' ?
	//	document.body.style.backgroundColor :
	//	document.body.style.color) = event.target.value;
	//let transition = document.body.style.transition.value.;
	//document.body.style.transition.value = null;
	document.body.style[(event.target.id === 'background-color' ? 'backgroundColor' : 'color')] = event.target.value;
	//document.body.style.transition.value = transition;
	//if (event.target.id === 'background-color')
	//{
	//	document.body.style.backgroundColor = event.target.value;
	//}
	//else {document.body.style.color = event.target.value;}
//document.body['style']['color']='white';
}
document.addEventListener("mousemove", traceMouse);
function traceMouse(e)
{
	document.getElementById("mouse").innerHTML = `X = ${e.clientX}, Y=${e.clientY}`;
}
//document.getElementById("switch-background").addEventListener("click", switchBackground);
document.getElementById("switch-background").addEventListener("click", switchBackground);
function switchBackground(e)
{

	/*let skin = document.body.className;
	let switchButton = document.getElementById("switch-background");
	switchButton.src = skin === "dark" ? "moon.png" : 'sun.png';
	document.body.className = skin === "dark" ? "light" : "dark";
	//document.getElementById("debug-background").innerHTML = switchButton.src;
	document.getElementById("debug-background").innerHTML = document.body.className;
	*/
	document.body.style.backgroundColor = '';
	document.body.style.color = '';
	document.body.className = document.body.className === 'dark' ? 'light' : 'dark';
	document.getElementById("debug-background").innerHTML = document.body.className;
}
document.getElementById("switch-bg-delay").addEventListener("change", setDelay);
function setDelay(e)
{
	let delay = e.target.value;
	document.getElementById('switch-background').style.transition =
		document.body.style.transition =
		`color ${delay}s, background-color ${delay}s, background-image ${delay}s`;
}

/*--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--| */
function addLeadingZero(number) { return number < 10? "0"+`${number}`:`${number}`};
function tickTimer()
{
	let date = new Date();
	document.getElementById("raw-date").innerHTML = date.toString();

	document.getElementById("hours").innerHTML = addLeadingZero(date.getHours());
	document.getElementById("minutes").innerHTML = addLeadingZero(date.getMinutes());
	document.getElementById("seconds").innerHTML = addLeadingZero(date.getSeconds());

	document.getElementById("yers").innerHTML = addLeadingZero(date.getFullYear());
	document.getElementById("months").innerHTML = addLeadingZero(date.getMonth()+1);
	document.getElementById("days").innerHTML = addLeadingZero(date.getDate());

	//document.getElementById("day-of-week").innerHTML = date.toLocaleDateString("ru");
	//document.getElementById("day-of-week").innerHTML = date.toLocaleTimeString("ru", {weekday:"long"});
	document.getElementById("day-of-week").innerHTML = date.toLocaleDateString("ru", { weekday: "long" });

	document.getElementById("current-date").style.visibility =
		document.getElementById("show-date").checked ? 'visible' : 'hidden';
	document.getElementById("day-of-week").style.visibility =
		document.getElementById("show-weekday").checked ? 'visible' : 'hidden';

	setTimeout(tickTimer, 100);
}
tickTimer();

document.getElementById('btn-start').addEventListener("click", startCountdownTimer);
function startCountdownTimer()
{
	let targetDate	= document.getElementById("target-date");
	let targetTime	= document.getElementById("target-time");
	let btnStart = document.getElementById("btn-start");
	if (btnStart.value === "Start") {
		btnStart.value = "Stop";
		targetDate.disabled = targetTime.disabled = true;
		tickCountdown();
	}
	else
	{
		btnStart.value = "Start";
		targetDate.disabled = targetTime.disabled = false;
	}

}
function tickCountdown()
{
	let now = new Date();

	let targetDateControl = document.getElementById("target-date");
	let targetTimeControl = document.getElementById("target-time");

	let targetDateValue = targetDateControl.valueAsDate;
	let targetTimeValue = targetTimeControl.valueAsDate;
	//Выравниваем часовой пояс:
	targetDateValue.setHours(targetDateValue.getHours() + targetDateValue.getTimezoneOffset() / 60);
	targetTimeValue.setHours(targetTimeValue.getHours() + targetTimeValue.getTimezoneOffset() / 60);

	targetTimeValue.setFullYear(targetDateValue.getFullYear());
	targetTimeValue.setMonth(targetDateValue.getMonth());
	targetTimeValue.setDate(targetDateValue.getDate());

	let timestamp = targetTimeValue - now;
	let duration = Math.trunc(timestamp / 1000);
	document.getElementById("timestamp").innerHTML = timestamp;
	document.getElementById("duration").innerHTML = duration;

	document.getElementById("target-date-value").innerHTML = targetDateValue;
	document.getElementById("target-time-value").innerHTML = targetTimeValue;

	const SECONDS_PER_MINUTE = 60;
	const SECONDS_PER_HOUR = 3600;
	const SECONDS_PER_DAY = 86400;

	let time_of_day = duration % SECONDS_PER_DAY;
	let time_of_hour = Math.trunc(time_of_day / SECONDS_PER_HOUR);
	time_of_day = time_of_day % SECONDS_PER_HOUR;
	let time_of_minute = Math.trunc(time_of_day / SECONDS_PER_MINUTE);
	time_of_day = time_of_day % SECONDS_PER_MINUTE;

	document.getElementById('hours-unit').innerHTML = addLeadingZero(time_of_hour);
	document.getElementById('minutes-unit').innerHTML = addLeadingZero(time_of_minute);
	document.getElementById('seconds-unit').innerHTML = addLeadingZero(time_of_day);
	

	setTimeout(tickCountdown, 100);
}
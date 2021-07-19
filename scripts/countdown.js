let countDown = new Date("Nov 18, 2021 23:59:00").getTime();

let x = setInterval(function () {
	let now = new Date().getTime();

	let gap = countDown - now;

	let days = Math.floor(gap / (1000 * 60 * 60 * 24));
	let hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((gap % (1000 * 60)) / 1000);

	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
}, 1000);

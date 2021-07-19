const inputName = document.getElementById("name");
const inputTel = document.getElementById("tel");
const inputEmail = document.getElementById("email");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	const key = inputName.value;
	const tel = inputTel.value;
	const email = inputEmail.value;
	const data = `${email} - ${tel}`

	if (key && email && tel) {
		localStorage.setItem(key, data);
		alert("Succesfully registered!");
	} else {
		alert("All fields required.");
	}
});

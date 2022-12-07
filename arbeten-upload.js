const titleElement = document.querySelector("form .form-info .title input");
const authorElement = document.querySelector("form .form-info .author input");

const textElement = document.querySelector("form .form-text label textarea");

const subjectElement = document.querySelector("form .form-end select");
const submitElement = document.querySelector("form .form-end input");

submitElement.addEventListener("click", submit);

function submit() {
	if (
		titleElement.value &&
		authorElement.value &&
		textElement.value &&
		subjectElement.value != "Välj ett ämne"
	) {
		const jsonFile = JSON.stringify({
			titel: titleElement.value,
			author: authorElement.value,
			text: textElement.value,
			subject: subjectElement.value,
		});
		console.log(jsonFile);
	} else {
		console.log("error, missing field");
	}
}

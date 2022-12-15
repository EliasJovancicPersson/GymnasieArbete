const titleElement = document.querySelector("form .form-info .title input");
const authorElement = document.querySelector("form .form-info .author input");

const textElement = document.querySelector("form .form-text label textarea");

const subjectElement = document.querySelector("form .form-end select");
const submitElement = document.querySelector("form .form-end input");

const formElement = document.querySelector("form");

submitElement.addEventListener("click", submit);

function submit() {
	if (
		titleElement.value &&
		authorElement.value &&
		textElement.value &&
		subjectElement.value != "Välj ett ämne"
	) {
		console.log(new FormData(formElement));

		post();
	} else {
		console.log("error, missing field");
	}
}

function post() {
	fetch("http://localhost:8000/wiki", {
		method: "POST",
		body: CreateFormData(),
	})
		.then((response) => response.json())
		.then((response) => console.log(JSON.stringify(response)));
}

function CreateFormData() {
	const formdata = new FormData();
	formdata.append("title", titleElement.value);
	formdata.append("author", authorElement.value);
	formdata.append("text", textElement.value);
	formdata.append("subject", subjectElement.value);

	console.log(...formdata);
	return formdata;

	//formdata.append("file");
}

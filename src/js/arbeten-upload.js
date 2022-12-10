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
    console.log(titleElement.value);
    post(url);
  } else {
    console.log("error, missing field");
  }
}

function post(jsonfile) {
  fetch("http://localhost:8000/wiki", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      title: titleElement.value,
      author: authorElement.value,
      text: textElement.value,
      subject: subjectElement.value,
    }),
  })
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)));
}
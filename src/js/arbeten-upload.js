const titleElement = document.querySelector("form .form-info .title input");
const authorElement = document.querySelector("form .form-info .author input");

const textElement = document.querySelector("form .form-text label textarea");

const fileElement = document.querySelector("form .form-end #file");
const subjectElement = document.querySelector("form .form-end select");
const submitElement = document.querySelector("form .form-end #submit");

const formElement = document.querySelector("form");

submitElement.addEventListener("click", submit);
fileElement.addEventListener("change", CheckFiles);

const maxFiles = 2; //temp value of 2, thinking about 10 normally

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
    .then((response) => {
      if (response.message == "FILE-SIZE") {
        alert("The maximum filesize is 25mb each!");
      } else if (response.message == "FILE-FORMAT") {
        alert("Wrong file format, we only allow jpeg,jpg,png and gifs");
      } else {
        alert("uploaded");
        //sucsess
        //display new page
      }
    });
  //take response id and create container with that id
}

function CheckFiles() {
  //TODO : add a check for file size, both here and in backend
  if (fileElement.files.length > maxFiles) {
    alert(`Max ${maxFiles} filer få laddas upp!`);
    const tempTitle = titleElement.value;
    const tempAuthor = authorElement.value;
    const tempText = textElement.value;
    const tempSubject = subjectElement.value;

    formElement.reset();

    titleElement.value = tempTitle;
    authorElement.value = tempAuthor;
    textElement.value = tempText;
    subjectElement.value = tempSubject;
  }
}

function CreateFormData() {
  const formdata = new FormData();
  formdata.append("title", titleElement.value);
  formdata.append("author", authorElement.value);
  formdata.append("text", textElement.value);
  formdata.append("subject", subjectElement.value);

  if (fileElement.files) {
    //append file if it exists
    let files = Array.from(fileElement.files); //Files come in a filelist, convert to array here
    files.forEach((file) => {
      formdata.append("files", file);
    });
  }

  return formdata;
}

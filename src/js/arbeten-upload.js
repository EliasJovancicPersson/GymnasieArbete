const titleElement = document.querySelector("form .form-info .title input");
const authorElement = document.querySelector("form .form-info .author input");

const textElement = document.querySelector("form .form-text label textarea");

const fileElement = document.querySelector("form .form-end #file");
const subjectElement = document.querySelector("form .form-end select");
const submitElement = document.querySelector("form .form-end #submit");

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
    .then((response) => console.log(JSON.stringify(response)))
    .then(() => {
      if (fileElement.files) {
        PutFiles();
      }
    });
  //take response id and create container with that id
}

function PutFiles() {
  fetch(
    `https://gyarbstorage.blob.core.windows.net/images/${fileElement.files[0].name}/?sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-01-01T08:36:38Z&st=2022-12-18T00:36:38Z&sip=81.227.69.179&spr=https,http&sig=aTYVYZFiNOzHmHLQ0GGDLKbAGnOQeta7HrWd7jb7jL8%3D`,
    {
      method: "PUT",
      headers: { "x-ms-blob-type": "BlockBlob" },
      body: fileElement.files[0],
    }
  ).then((response) => console.log(response));
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

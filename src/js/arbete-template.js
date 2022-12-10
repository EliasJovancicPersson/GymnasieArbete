const localUrl = window.location.href;
let query = localUrl.split("?");
query.shift();

let projId = query.toString().split("=").pop();
fetchUrl = "http://localhost:8000/wiki/" + projId;

const responseVar = fetch(fetchUrl, {
  method: "GET",
})
  .then((response) => response.json())
  .then(async function (response) {
    console.table(response.project);
    UpdateText(
      response.project.title,
      response.project.author,
      response.project.createdAt,
      response.project.text,
      response.project.subject
    );
  });

function UpdateText(title, author, timestamp, text, subject) {
  console.log(title);
  console.log(author);
  console.log(timestamp);
  console.log(text);
  console.log(subject);
  try {
    //get titel
    const titelElem = document.querySelector(".gyarb .text-info .title");
    //get author
    const authorElem = document.querySelector(".gyarb .text-info .author");
    //get subject
    const subjectElem = document.querySelector(".gyarb .text-info .subject");
    //get timestamp
    const timestampElem = document.querySelector(
      ".gyarb .text-info .timestamp"
    );
    //get text
    const textElem = document.querySelector(".gyarb .text-main");

    titelElem.textContent = title;
    authorElem.textContent = author;
    subjectElem.textContent = subject;
    timestampElem.textContent = timestamp;
    textElem.textContent = text;
  } catch (err) {
    console.log("Could not get all elements :" + err);
  }
}

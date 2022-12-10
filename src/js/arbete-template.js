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

function UpdateText(titel, author, timestamp, text, subject) {
  console.log(titel);
  console.log(author);
  console.log(timestamp);
  console.log(text);
  console.log(subject);
}

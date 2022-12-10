let url = "http://localhost:8000/wiki";

let responseArray = [];

async function GetProjects() {
  let responseVar = fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then(async function (response) {
      responseArray = await response.projects;

      if (document.querySelectorAll(".gyarb")) {
        let titles = document.querySelector(".title .title-header h3");

        titles.textContent = responseArray[0].title;
      }
    });
}

GetProjects();

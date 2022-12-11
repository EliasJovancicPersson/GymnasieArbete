let url = "http://localhost:8000/wiki";

let responseArray = [];

const maxEntires = 10;

async function GetProjects() {
  let responseVar = fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then(async function (response) {
      responseArray = await response.projects;

      if (document.querySelector(".gyarb")) {
        CreateElements(responseArray);

        try {
          let a = document.querySelectorAll(".gyarb a");
          let titles = document.querySelectorAll(".title .title-header h3");

          for (let i = 0; i < a.length; i++) {
            try {
              a[i].id = responseArray[i]._id;
              const pageUrl = "/src/html/work.html?id=" + a[i].id;
              a[i].href = pageUrl;
              titles[i].textContent = responseArray[i].title;
            } catch (err) {
              console.log(err);
              //display error on website for not finding the project from backend
              titles[i].textContent =
                "ERROR, could not read from database. Maybe it dosent exist?";
            }
          }
        } catch (err) {
          console.log(err);
          //display error on website for not finding the html elements
        }
      }
    });
}

function CreateElements(projectsArray) {
  //create elements for each project, max 10 before new page
  console.log(projectsArray);
  const gyarb = document.querySelector(".gyarb");

  const elementArray = [];

  projectsArray.forEach((element) => {
    if (elementArray.length < maxEntires) {
      const a = document.createElement("a");
      elementArray.push(a);
      a.classList = "work-link";
      const div0 = document.createElement("div");
      div0.classList = "title";
      const div1 = document.createElement("div");
      div1.classList = "title-header";
      const title = document.createElement("h3");
      gyarb.appendChild(a);
      a.appendChild(div0);
      div0.appendChild(div1);
      div1.appendChild(title);
      console.log("created elements");
    } else {
      console.log("max enties reached");
    }
  });
  console.log(elementArray);
}

GetProjects();

let url = "http://localhost:8000/wiki/search/?"; //ändra url här för att söka med olika querys
let querys = document.URL.split("?").pop().split("&");
querys.forEach((element) => {
  url = url + element;
});
let responseArray = [];
let pages = [[]];
let pagesIndex = 0;
let currentPage = 0;
let maxEntires = 8;

const gyarb = document.querySelector(".work-list");
const scrollBack = document.querySelector("#backwards");
const scrollForw = document.querySelector("#forwards");
const pageCounter = document.querySelector("#page");

scrollBack.addEventListener("click", function () {
  scrollBackward();
});
scrollForw.addEventListener("click", function () {
  scrollForward();
});
pageCounter.addEventListener("change", function () {
  currentPage = pageCounter.value - 1;
  DisplayPage();
  UpdateText(currentPage);
});

async function GetProjects() {
  let responseVar = fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then(async function (response) {
      responseArray = await response.projects;

      if (document.querySelector(".gyarb")) {
        for (let i = 0; i < responseArray.length; i++) {
          if (pages[pagesIndex].length < maxEntires) {
            pages[pagesIndex].push(responseArray[i]);
          } else {
            pagesIndex++;
            pages[pagesIndex] = new Array();
            pages[pagesIndex].push(responseArray[i]);
          }
          if (maxEntires > responseArray.length) {
            maxEntires = responseArray.length;
          }
        }
        if (responseArray.length > 0) {
          for (let i = 0; i < maxEntires; i++) {
            CreateLinkElement(); //create maxentries(10) elements
          }
        }
        pageCounter.max = pages.length - 1;
        UpdateText(currentPage);
      }
    });
}

function UpdateText(page) {
  try {
    let a = document.querySelectorAll(".gyarb a");
    let titles = document.querySelectorAll(".title .title-header h3");
    for (let i = 0; i < a.length; i++) {
      try {
        a[i].id = pages[currentPage][i]._id;
        const pageUrl = "/src/html/work.html?id=" + a[i].id;
        a[i].href = pageUrl;
        titles[i].textContent = pages[currentPage][i].title;
      } catch (err) {
        console.log(err);
        //display error on website for not finding the project from backend
        titles[i].textContent =
          "ERROR, could not read from database. Maybe it doesn't exist?";
      }
    }
  } catch (err) {
    console.log(err);
    //display error on website for not finding the html elements
  }
}

function CreateLinkElement() {
  //create elements for each project, max 10 before new page

  const a = document.createElement("a");
  a.classList = "work-link";
  const div0 = document.createElement("div");
  div0.classList = "title";
  const div1 = document.createElement("div");
  div1.classList = "title-header";
  const title = document.createElement("h3");

  a.appendChild(div0);
  div0.appendChild(div1);
  div1.appendChild(title);

  gyarb.appendChild(a);
}

function DisplayPage() {
  if (document.querySelectorAll(".work-link")) {
    let elements = document.querySelectorAll(".work-link");
    elements.forEach((element) => {
      element.remove();
    });
  }
  for (let i = 0; i < pages[currentPage].length; i++) {
    CreateLinkElement();
  }
}

function scrollForward() {
  if (currentPage + 1 <= pagesIndex) {
    currentPage++;
    pageCounter.value = currentPage + 1;
    DisplayPage();
    UpdateText(currentPage);
  }
}
function scrollBackward() {
  if (currentPage - 1 >= 0) {
    currentPage--;
    pageCounter.value = currentPage + 1;
    DisplayPage();
    UpdateText(currentPage);
  }
}

GetProjects();

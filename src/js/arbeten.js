let url = "http://localhost:8000/wiki";
let responseArray = [];
let pages = [[]];
let pagesIndex = 0;
let currentPage = 0;
const maxEntires = 10;

const gyarb = document.querySelector(".work-list");
const scrollBack = document.querySelector("#backwards");
const scrollForw = document.querySelector("#forwards");

scrollBack.addEventListener("click", function () {
  scrollBackward();
});
scrollForw.addEventListener("click", function () {
  scrollForward();
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
          CreateLinkElement();
        }
        DisplayPage(); //page can now be switched
        UpdateText(currentPage);
        console.table(pages);
      }
    });
}

function UpdateText(page) {
  try {
    let a = document.querySelectorAll(".gyarb a");
    let titles = document.querySelectorAll(".title .title-header h3");

    for (let i = 0; i < a.length; i++) {
      try {
        a[i].id = responseArray[i + page * 10]._id; //max entries can only be 10, need to find a way to change max entries to any number
        const pageUrl = "/src/html/work.html?id=" + a[i].id;
        a[i].href = pageUrl;
        titles[i].textContent = responseArray[i + page * 10].title;
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

  if (pages[pagesIndex].length < maxEntires) {
    pages[pagesIndex].push(a);
  } else {
    pagesIndex++;
    pages[pagesIndex] = new Array();
    pages[pagesIndex].push(a);
  }
}

function DisplayPage() {
  if (document.querySelectorAll(".work-link")) {
    let elements = document.querySelectorAll(".work-link");
    elements.forEach((element) => {
      element.remove();
    });
  }

  for (let i = 0; i < pages[currentPage].length; i++) {
    gyarb.appendChild(pages[currentPage][i]);
  }
}

function scrollForward() {
  if (currentPage + 1 <= pagesIndex) {
    currentPage++;
    DisplayPage();
    UpdateText(currentPage);
  }
}
function scrollBackward() {
  if (currentPage - 1 >= 0) {
    currentPage--;
    DisplayPage();
    UpdateText(currentPage);
  }
}

GetProjects();

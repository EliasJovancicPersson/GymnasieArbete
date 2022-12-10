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
        try {
          let a = document.querySelectorAll(".gyarb a");
          let titles = document.querySelectorAll(".title .title-header h3");

          for (let i = 0; i < a.length; i++) {
            try {
              a[i].id = responseArray[i]._id;
              const pageUrl = url + "/" + a[i].id;
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

GetProjects();

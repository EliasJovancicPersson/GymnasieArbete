if (document.getElementsByClassName("dropdown")) {
  const dropdownNodelist = document.getElementsByClassName("dropdown");
  let dropdownArray = Array.from(dropdownNodelist);

  dropdownArray.forEach(function (element) {
    element.addEventListener("click", () => {
      DropDown(element);
    });
  });
}

function DropDown(element) {
  let dropdownContent = element.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("display-none");
}

let url = "https://node-webb-application-gyar.azurewebsites.net/assignments";

let responseArray = [];

async function Test() {
  let responseVar = fetch(url, {
    method: "GET",
  }).then((response) => response.json());

  responseArray = await responseVar;
  console.log(responseArray);

  if (document.querySelectorAll(".gyarb")) {
    let titles = document.querySelectorAll(".title .title-header h3");

    let gyarbText = document.querySelectorAll(".title-answer p");
  }
}

Test();

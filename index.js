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

let url = "https://http-nodejs-production-d03d.up.railway.app/";

let responseArray = [];

async function Test() {
  let responseVar = fetch(url, {
    method: "GET",
    headers: {
      Accept: "text/plain",
      "Content-Type": "text/plain",
    },
  }).then((response) => response.json());

  responseArray = await responseVar;
  console.log(responseArray);

  if (document.querySelectorAll(".gyarb")) {
    let titles = document.querySelectorAll(".title .title-header h3");

    let gyarbText = document.querySelectorAll(".title-answer p");

    for (let i = 0; i < responseArray.length; i++) {
      titles[i].textContent = responseArray[i].title;
      gyarbText[i].textContent = responseArray[i].text;
      console.log(titles[i].textContent);
      console.log(responseArray[i].title);

      console.log(gyarbText[i].textContent);
      console.log(responseArray[i].text);
    }
  }
}

Test();

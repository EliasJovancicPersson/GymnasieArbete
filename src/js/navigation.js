const searchBtn = document.querySelector("#search");
searchBtn.addEventListener("click", Search);

function Search() {
  //query api to search
  console.log("search");
}

const activePage = location.pathname;
if (activePage == "/src/html/work.html") {
} else {
  const navElement = document.querySelector(`a[href^='${activePage}']`);
  console.log(navElement);
  console.log(activePage);
  navElement.classList.add("active");
}

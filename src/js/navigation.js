const searchBtn = document.querySelector("#search");
searchBtn.addEventListener("click", Search);
const searchBar = document.querySelector(".searchWrapper input");
console.log(searchBar);
function Search() {
  let query = searchBar.value;
  let queryType = "title";
  window.location.assign(
    "http://127.0.0.1:5500/src/html/work-list.html?" + queryType + "=" + query
  );
}

const activePage = location.pathname;
if (activePage == "/src/html/work.html") {
} else {
  const navElement = document.querySelector(`a[href^='${activePage}']`);
  console.log(navElement);
  console.log(activePage);
  navElement.classList.add("active");
}

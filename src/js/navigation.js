const searchBtn = document.querySelector("#search");
searchBtn.addEventListener("click", Search);

const searchBar = document.querySelector(".searchWrapper input");

const logginElem = document.querySelector("#loggin");

console.log(document.cookie);

function Search() {
  let query = searchBar.value;
  let queryType = "title";
  window.location.assign(
    "http://127.0.0.1:5500/src/html/work-list.html?" + queryType + "=" + query
  );
}

if (window.localStorage.getItem("loggedIn") == "true") {
  //logged in
  logginElem.href = "/src/html/profile.html"; //temp way of changing to "profil"
  logginElem.textContent = "Profil";
}

const activePage = location.pathname;
if (activePage == "/src/html/work.html") {
} else {
  try {
    const navElement = document.querySelector(`a[href^='${activePage}']`);
    console.log(navElement);
    console.log(activePage);
    navElement.classList.add("active");
  } catch (err) {
    //cant find nav elem}
  }
}

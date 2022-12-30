const logoutElem = document.querySelector("#logout");

logoutElem.addEventListener("click", () => {
  Logout();
});

function Logout() {
  if (window.localStorage.getItem("loggedIn") == "true") {
    try {
      window.localStorage.setItem("loggedIn", "false");
    } catch (err) {
      //not logged in
    }
    window.location = "/index.html";
    console.log("logging out");
  } else {
    window.location = "/index.html";
  }
}

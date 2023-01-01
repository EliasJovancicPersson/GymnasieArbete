const logoutElem = document.querySelector("#logout");

logoutElem.addEventListener("click", () => {
  Logout();
});

function Logout() {
  if (window.localStorage.getItem("loggedIn") == "true") {
    try {
      fetch("https://gyarb-backend.azurewebsites.net/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          window.localStorage.setItem("loggedIn", "false");
          window.location = "/";
        });
    } catch (err) {
      //not logged in
    }
  }
}

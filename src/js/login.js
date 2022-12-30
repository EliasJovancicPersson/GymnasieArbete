const loginBtn = document.querySelector("#login");
const emailElem = document.querySelector("#email");
const passwordElem = document.querySelector("#password");

loginBtn.addEventListener("click", () => {
  login();
});

function login() {
  console.log({ email: emailElem.value, password: passwordElem.value });
  fetch("http://localhost:8000/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      email: emailElem.value,
      password: passwordElem.value,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      window.localStorage.setItem("loggedIn", "true");
      //window.location = "/src/html/profile.html";
    });
}

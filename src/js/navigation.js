const activePage = location.pathname;
if (activePage == "/src/html/work.html") {
} else {
  const navElement = document.querySelector(`a[href^='${activePage}']`);
  console.log(activePage);
  navElement.classList.add("active");
}

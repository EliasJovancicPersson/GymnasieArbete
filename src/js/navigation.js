const activePage = location.pathname;
const navElement = document.querySelector(`a[href^='${activePage}']`);
navElement.classList.add("active");

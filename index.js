const dropdownNodelist = document.getElementsByClassName("dropdown");
let dropdownArray = Array.from(dropdownNodelist);

dropdownArray.forEach(function (element) {
	console.log(element);
	element.addEventListener("click", () => {
		DropDown(element);
	});
});

function DropDown(element) {
	let dropdownContent = element.querySelector(".dropdown-content");
	dropdownContent.classList.toggle("display-none");
}

fetch("railway:5784", { credentials: "include" })
	.then((response) => response.json())
	.then((data) => console.log(data));

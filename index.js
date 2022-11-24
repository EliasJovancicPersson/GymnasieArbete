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

let url = "https://http-nodejs-production-d03d.up.railway.app";

fetch(url, {
	method: "POST",
	headers: {
		Accept: "text/plain",
		"Content-Type": "text/plain",
		// 'Content-Type': 'application/x-www-form-urlencoded',
	},
	body: JSON.stringify(myData),
}).then((response) => console.log(response));

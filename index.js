if (document.getElementsByClassName("dropdown")) {
	const dropdownNodelist = document.getElementsByClassName("dropdown");
	let dropdownArray = Array.from(dropdownNodelist);

	dropdownArray.forEach(function (element) {
		element.addEventListener("click", () => {
			DropDown(element);
		});
	});
}

function DropDown(element) {
	let dropdownContent = element.querySelector(".dropdown-content");
	dropdownContent.classList.toggle("display-none");
}

let url = "http://localhost:8000/wiki";

let responseArray = [];

async function GetProjects() {
	let responseVar = fetch(url, {
		method: "GET",
	})
		.then((response) => response.json())
		.then(async function (response) {
			responseArray = await response.projects;

			if (document.querySelectorAll(".gyarb")) {
				let titles = document.querySelector(".title .title-header h3");

				let gyarbText = document.querySelector(".title-answer p");

				titles.textContent = responseArray[0].title;
				gyarbText.textContent = responseArray[0].text;
			}
		});
}

GetProjects();

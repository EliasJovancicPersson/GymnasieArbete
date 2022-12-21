const localUrl = window.location.href;
let query = localUrl.split("?");
query.shift();
let imagesArr = [];

const imageContainer = document.querySelector(".image-container");
const modal = document.querySelector("#modal");
const modalImg = document.querySelector("#modal img");
const close = document.querySelector(".close");

close.addEventListener("click", () => {
  HideImage();
});

let projId = query.toString().split("=").pop();
fetchUrl = "http://localhost:8000/wiki/" + projId;

const responseVar = fetch(fetchUrl, {
  method: "GET",
})
  .then((response) => response.json())
  .then(async function (response) {
    UpdateText(
      response.project.title,
      response.project.author,
      response.project.createdAt.split("T").shift(),
      response.project.text,
      response.project.subject,
      response.project.images
    );
  });

function UpdateText(title, author, timestamp, text, subject, images) {
  try {
    //get titel
    const titelElem = document.querySelector(".gyarb .text-info .title");
    //get author
    const authorElem = document.querySelector(".gyarb .text-info .author");
    //get subject
    const subjectElem = document.querySelector(".gyarb .text-info .subject");
    //get timestamp
    const timestampElem = document.querySelector(".gyarb .text-footer h3");
    //get text
    const textElem = document.querySelector(".gyarb .text-main p");

    try {
      titelElem.textContent = title;
      authorElem.textContent = author;
      subjectElem.textContent = subject;
      timestampElem.textContent = timestamp;
      textElem.textContent = text;
      imagesArr = images;

      UpdateImages();
    } catch (err) {
      console.log("Could not get information from database" + err);
    }
  } catch (err) {
    console.log("Could not get all elements :" + err);
  }
}

function UpdateImages() {
  imagesArr.forEach((image) => {
    console.log(image);
    const img = document.createElement("img");
    img.src = image;
    img.alt = "image for project: " + query;
    img.addEventListener("click", () => {
      ShowImage(image);
    });
    imageContainer.appendChild(img);
    console.log(img);
  });
}

function ShowImage(img) {
  //set modal src to img
  modal.style.display = "block";
  modalImg.src = img;
}

function HideImage() {
  console.log("hide");
  modal.style.display = "none";
}

/*
const images = ["./images/sm_1.png", "./images/sm_2.png", "./images/sm_3.png", "./images/sm_4.png", "./images/sm_5.png"];
let currentImageIndex = 0;

const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const imageElement = document.getElementById("image");

prevButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
});


function updateImage() {
    imageElement.src = images[currentImageIndex];
    prevButton.style.display = currentImageIndex === 0 ? "none" : "block";
    nextButton.style.display = currentImageIndex === images.length - 1 ? "none" : "block";
}

updateImage();
*/
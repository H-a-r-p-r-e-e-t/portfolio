// css file time
// const cssPath = "css/style.css"; 

// const timestamp = new Date().getTime(); 

// const linkElement = document.createElement("link");
// linkElement.rel = "stylesheet";
// linkElement.type = "text/css";

// linkElement.href = `${cssPath}?t=${timestamp}`;

// document.head.appendChild(linkElement);

//
// const cssLink = document.querySelector('link[rel="stylesheet"]');

// if (cssLink) {
//     const timestamp = new Date().getTime();
//     cssLink.href = `css/style.css?t=${timestamp}`;
// }

// const jsLink = document.querySelector('script[src="js/script.js"]');

// if (jsLink) {
//     const timestamp = new Date().getTime();
//     jsLink.href = `js/script.js?t=${timestamp}`;
// }

const images = document.querySelectorAll(".lightbox-img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const close = document.getElementById("close");

const prev = document.getElementById("prev");

const next = document.getElementById("next");

let current = 0;

function showImage(index) {

    current = index;

    lightboxImage.src = images[current].src;

    lightbox.classList.add("active");

}

images.forEach((img, index) => {

    img.addEventListener("click", () => {

        showImage(index);

    });

});

close.onclick = () => {

    lightbox.classList.remove("active");

}

lightbox.onclick = (e) => {

    if (e.target === lightbox)

        lightbox.classList.remove("active");

}

next.onclick = (e) => {

    e.stopPropagation();

    current++;

    if (current >= images.length)

        current = 0;

    showImage(current);

}

prev.onclick = (e) => {

    e.stopPropagation();

    current--;

    if (current < 0)

        current = images.length - 1;

    showImage(current);

}

document.addEventListener("keydown", (e) => {

    if (!lightbox.classList.contains("active"))

        return;

    if (e.key === "Escape")

        lightbox.classList.remove("active");

    if (e.key === "ArrowRight")

        next.click();

    if (e.key === "ArrowLeft")

        prev.click();

});

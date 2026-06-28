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

// hamburger

const menuToggle=document.getElementById("menu-toggle");
const navLinks=document.getElementById("nav-links");

document.querySelectorAll("#nav-links a").forEach(link=>{
    link.addEventListener("click",()=>{
        navLinks.classList.remove("active");
    });
});

menuToggle.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
    menuToggle.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});

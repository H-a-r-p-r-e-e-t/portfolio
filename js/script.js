// css file time
// const cssPath = "css/style.css"; 

// const timestamp = new Date().getTime(); 

// const linkElement = document.createElement("link");
// linkElement.rel = "stylesheet";
// linkElement.type = "text/css";

// linkElement.href = `${cssPath}?t=${timestamp}`;

// document.head.appendChild(linkElement);

//
const cssLink = document.querySelector('link[href="css/style.css"]');

if (cssLink) {
    const timestamp = new Date().getTime();
    cssLink.href = `css/style.css?t=${timestamp}`;
}

const jsLink = document.querySelector('link[src="js/script.js"]');

if (jsLink) {
    const timestamp = new Date().getTime();
    jsLink.href = `js/script.js?t=${timestamp}`;
}

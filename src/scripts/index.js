const landing = document.getElementById("landing");
const react = document.getElementById("react");
const dev = document.getElementById("dev");

const landingM = document.getElementById("landing-menu");
const reactM = document.getElementById("react-menu");
const devM = document.getElementById("dev-menu");

function landingOpen() {
    react.style.display = "none";
    dev.style.display = "none";
    landing.style.display = "grid";

    devM.style.border = "none";
    reactM.style.border = "none";
    landingM.style.borderBottom = "1px solid #27AE60"
}

function reactOpen() {
    react.style.display = "grid";
    dev.style.display = "none";
    landing.style.display = "none";

    devM.style.border = "none";
    reactM.style.borderBottom = "1px solid #27AE60";
    landingM.style.border = "none"
}

function devOpen() {
    react.style.display = "none";
    dev.style.display = "grid";
    landing.style.display = "none";

    devM.style.borderBottom = "1px solid #27AE60";
    reactM.style.border = "none";
    landingM.style.border = "none"
}
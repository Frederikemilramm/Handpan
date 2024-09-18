// This can be extended for any additional functionality you need later.
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
});
function openNav() {
    document.getElementById("nav-overlay").style.width = "100%";
}

function closeNav() {
    document.getElementById("nav-overlay").style.width = "0%";
}

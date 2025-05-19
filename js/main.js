AOS.init({
    duration: 800
});


function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("#menu a");
    links.forEach(function(link) {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 768) {
                document.getElementById("menu").classList.remove("show");
            }
        });
    });
});

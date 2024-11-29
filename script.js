var menuIcon = document.querySelector(".menu");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
menuIcon.onclick = function () {
    left.classList.toggle("compressed");
    right.classList.toggle("expand");
};

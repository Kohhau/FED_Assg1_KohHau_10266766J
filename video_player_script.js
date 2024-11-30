var left = document.querySelector(".left2");
var vidplayermenu = document.querySelector(".menu");
vidplayermenu.onclick = function () {
    left.classList.toggle("overlay")
}

var more = document.querySelector(".more")
var description = document.querySelector(".description")
var active_vid_info = document.querySelector(".active-vid-info")
more.onclick = function () {
    description.classList.toggle("expanded-description")
    active_vid_info.classList.toggle("expanded-active-vid-info")
}

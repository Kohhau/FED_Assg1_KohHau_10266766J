var menuIcon = document.querySelector(".menu");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
menuIcon.onclick = function () {
    left.classList.toggle("compressed");
    right.classList.toggle("expand");
};
function MyFilter() {
    // Get the input field value and convert it to lowercase for case-insensitive comparison
    const input = document.getElementById("myInput").value.toLowerCase();

    // Get all the video elements
    const videos = document.querySelectorAll(".video-list");

    // Loop through each video element
    videos.forEach((video) => {
        // Find the title of the video within the current video container
        const titleElement = video.querySelector(".vid-info a");
        const title = titleElement ? titleElement.textContent.toLowerCase() : "";

        // Check if the title includes the input value
        if (title.includes(input)) {
            // Show the video if it matches
            video.style.display = "";
        } else {
            // Hide the video if it doesn't match
            video.style.display = "none";
        }
    });
}
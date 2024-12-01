// elements
var menuIcon = document.querySelector(".menu");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
menuIcon.onclick = function () {
    left.classList.toggle("compressed");
    right.classList.toggle("expand");
};

// Array of video file URLs
const videoList = [
    'images/hatomugi_short.mp4',
    'images/vaundy_short.mp4',
    'images/steph_curry_short.mp4'
];

let currentVideoIndex = 0;

//video and button elements
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

//Load video
function loadVideo(index) {
    videoSource.src = videoList[index];
    videoPlayer.load(); // Reload the video
    videoPlayer.play(); // Autoplay the video
}

// buttons
prevButton.addEventListener('click', () => {
    if (currentVideoIndex > 0) {
        currentVideoIndex--;
        loadVideo(currentVideoIndex);
    }
});
nextButton.addEventListener('click', () => {
    if (currentVideoIndex < videoList.length - 1) {
        currentVideoIndex++;
        loadVideo(currentVideoIndex);
    } else {
        loadVideo(0)
        currentVideoIndex = 0;
    }
});

// Autoplay the next video when the current video ends
videoPlayer.addEventListener('ended', () => {
    loadVideo(currentVideoIndex);
});
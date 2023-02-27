//Data for various site themes
let checkpointVids = [
    {color : '#8b81f2', text : 'Assets/checkpointTextPurple.png', videoWebm : 'Assets/AAIsland_VP9.webm', videoMov : 'Assets/AAIsland_HEVC.mov', fontColor : "#6658f0", spotifyFrame : "https://open.spotify.com/embed/artist/0ChqHQDUwXWdJZVIc7ZXjq?utm_source=generator&theme=0"}, 
    {color : '#ec6272', text : 'Assets/checkpointTextPink.png', videoWebm : 'Assets/EIsland_VP9.webm', videoMov : 'Assets/EIsland_HEVC.mov', fontColor : "#ed8893", spotifyFrame : "https://open.spotify.com/embed/track/4a8SQCvS8pydJ3hpauvm4v?utm_source=generator&theme=0"}, 
    {color : '#4eb565', text : 'Assets/checkpointTextGreen.png', videoWebm : 'Assets/AFIsland_VP9.webm', videoMov : 'Assets/AFIsland_HEVC.mov', fontColor : "#34964a", spotifyFrame : "https://open.spotify.com/embed/track/0yXkkD018Oy3RkVEz8njKH?utm_source=generator&theme=0"}, 
    {color : '#5f79ed', text : 'Assets/checkpointTextBlue.png', videoWebm : 'Assets/RFIsland_VP9.webm', videoMov : 'Assets/RFIsland_HEVC.mov', fontColor : "#7c90e7", spotifyFrame : "https://open.spotify.com/embed/track/0HfgxC5erELQ8QN28jDcso?utm_source=generator&theme=0"}, 
    {color : '#6cb0d1', text : 'Assets/checkpointTextLtBlue.png', videoWebm : 'Assets/BSIsland_VP9.webm', videoMov : 'Assets/BSIsland_HEVC.mov', fontColor : "#288cbd", spotifyFrame : "https://open.spotify.com/embed/track/6fC7WAqlEbZ3qTsX8lk7Hr?utm_source=generator&theme=0"},
    {color : '#e1ab5b', text : 'Assets/checkpointTextYellow.png', videoWebm : 'Assets/DSIsland_VP9.webm', videoMov : 'Assets/DSIsland_HEVC.mov', fontColor : "#f1c84d", spotifyFrame : "https://open.spotify.com/embed/track/4wi3nxomivvjyx1qQvJCqx?utm_source=generator&theme=0"}
];

//Code for loading screen
function loadAnimation(){
    setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("site-wrapper").style.display = "block";
}

//Dynamically change the theme of the website, including video, background color, and font color
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('load', () => {
    let num = Math.floor(Math.random() * 6);
    document.body.style.backgroundColor = checkpointVids[num].color;
    document.body.style.color = checkpointVids[num].fontColor;
    document.getElementById("checkpoint-text").src = checkpointVids[num].text;
    document.getElementById("webmVid").src = checkpointVids[num].videoWebm;
    document.getElementById("movVid").src = checkpointVids[num].videoMov;
    document.getElementById("spotify-frame").src = checkpointVids[num].spotifyFrame;
    document.querySelectorAll('a').forEach(e => e.style.color = checkpointVids[num].fontColor);
    let video = document.getElementById("checkpoint-island").load();
});   

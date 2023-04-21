const song = document.getElementById("song")
const range = document.getElementById("music-range")
const playBtn = document.getElementById("play")

song.onloadedmetadata= function (){
    range.max =song.duration
    range.value =song.currentTime
}
function pushPlay(){
    if (playBtn.classList.contains("fa-pause")){
        song.pause()
    playBtn.classList.remove("fa-pause")
    playBtn.classList.add("fa-play")
    }else{
        song.play()
        playBtn.classList.remove("fa-play")
        playBtn.classList.add("fa-pause")
    }
}

if(song.play()){
    setInterval(() => {
    range.value =song.currentTime
    }, 500);
}

range.onchange=function(){
    song.play()
    song.currentTime = range.value
    playBtn.classList.remove("fa-play")
    playBtn.classList.add("fa-pause")
}
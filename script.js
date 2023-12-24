let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let currentTm = document.getElementById("currentTm");
let durationT = document.getElementById("durationT");


song.onloadedmetadata = function(){
  progress.max = song.duration;
  progress.value = song.currentTime;
  displayTime(song.currentTime, currentTm);
  displayTime(song.duration, durationT);
}
function playPause(){
  if(ctrlIcon.classList.contains("bx-pause"))
  {
    song.pause();
    ctrlIcon.classList.remove("bx-pause");
    ctrlIcon.classList.add("bx-play");

  }
  else{
    song.play();
    ctrlIcon.classList.remove("bx-play");
    ctrlIcon.classList.add("bx-pause");
  }
}
if(song.play()){
  setInterval(() => {
    progress.value = song.currentTime;
    displayTime(song.currentTime,currentTm);
  }, 1000);
}
progress.onchange = function(){
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.remove("bx-play");
  ctrlIcon.classList.add("bx-pause");
  displayTime(song.currentTime);
}
function displayTime(time, currentTm) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
 if(currentTm){
  currentTm.innerHTML = formattedTime;
 }
 else if(currentTm){
 currentTm.innerHTML = formattedTime;
 }
}
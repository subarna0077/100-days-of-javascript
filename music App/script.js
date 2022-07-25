const wrapper = document.querySelector('.player'),
playing_indicator = wrapper.querySelector('.now-playing'),
image = wrapper.querySelector('img'),
songTitle = wrapper.querySelector('.track-name'),
audio = wrapper.querySelector('audio'),
singer = wrapper.querySelector('.track-artist'),
playPauseBtn = wrapper.querySelector('.playpause-track'),
nextTrack = wrapper.querySelector('.next-track'),
preTrack = wrapper.querySelector('.prev-track'),
progressArea = wrapper.querySelector('.progress-area'),
slider = wrapper.querySelector('.slider'),
playTime = wrapper.querySelector('.current'),
totalTime = wrapper.querySelector('.duration')
;

 let currentIndex = 3;
 window.addEventListener('load',()=>{
     loadMusic(currentIndex);
 });
function loadMusic(index){
    playing_indicator.textContent = `Playing ${currentIndex} of ${allMusic.length}`
    songTitle.textContent = allMusic[index-1].name;
    singer.textContent = allMusic[index-1].artist;
    image.src =`/music App/images/${allMusic[index-1].img}.jpg`;
    audio.src = `/music App/songs/${allMusic[index-1].src}.mp3`;
}
 function pauseMusic(){
    playPauseBtn.querySelector('i').classList.remove('fa-pause-circle');
    playPauseBtn.querySelector('i').classList.add('fa-play-circle');
    audio.pause();
    
   
}
 function playMusic(){
    playPauseBtn.querySelector('i').classList.remove('fa-play-circle');
    playPauseBtn.querySelector('i').classList.add('fa-pause-circle');
    audio.play();
}


playPauseBtn.addEventListener('click',()=>{
   const isPaused = playPauseBtn.querySelector('i').classList.contains('fa-play-circle');
   isPaused ? playMusic() : pauseMusic();
});

nextTrack.addEventListener('click',()=>{
    currentIndex++;
    currentIndex > allMusic.length ? currentIndex = 1 : currentIndex= currentIndex;
    loadMusic(currentIndex);
    playMusic()

})
preTrack.addEventListener('click',()=>{
    currentIndex --;
    currentIndex < 1 ? currentIndex = allMusic.length : currentIndex = currentIndex;
    loadMusic(currentIndex);
    playMusic()

})

audio.addEventListener('timeupdate', e=>{
    let currentTime = e.target.currentTime;
    let totalDuration = e.target.duration;
    console.log(currentTime,totalDuration)
    let progressWidth = (currentTime/totalDuration)*100+'%';
    console.log(progressWidth);
    slider.style.width = progressWidth;

    
    audio.addEventListener("loadeddata",()=>{
        debugger;
         let audioDuration = audio.totalDuration;
         console.log(audioDuration);
    });

});


progressArea.addEventListener('click',(e)=>{
    let width = progressArea.clientWidth,
    clickedPoint = e.offsetX,
    songlength = audio.duration;
    console.log(width,clickedPoint,songlength)
    audio.currentTime = (clickedPoint/ width) *songlength;
})

progressArea.addEventListener('dragsta',e=>{
    console.log(e)

})